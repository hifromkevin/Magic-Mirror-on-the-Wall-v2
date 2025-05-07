package routes

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"magic-mirror-on-the-wall-backend/redis"
	"magic-mirror-on-the-wall-backend/types"
	"magic-mirror-on-the-wall-backend/types/weatherTypes"
	"magic-mirror-on-the-wall-backend/utils"

	"github.com/gin-gonic/gin"
)

func formatDate(dateStr string) string {
	parsedDate, err := time.Parse(time.RFC3339, dateStr)
	if err != nil {
		return dateStr
	}
	return parsedDate.Format("Monday, Jan 2")
}

func GetWeather(c *gin.Context) {
	ctx := context.Background()

	ipApiKey := os.Getenv("IP_INFO_API")
	accuweatherApi := os.Getenv("ACCUWEATHER_API")

	ipUrl := fmt.Sprintf("https://ipinfo.io/json?token=%s", ipApiKey)
	ipResp, err := http.Get(ipUrl)
	if err != nil {
		utils.HandleError(c, http.StatusInternalServerError, "Failed to get IP info", err)
		return
	}

	defer func() {
		if err := ipResp.Body.Close(); err != nil {
			log.Printf("Error closing response body: %v", err)
		}
	}()

	var ipInfo types.IpInfoResponse
	if err := json.NewDecoder(ipResp.Body).Decode(&ipInfo); err != nil {
		utils.HandleError(c, http.StatusInternalServerError, "Failed to decode IP info", err)
		return
	}
	postal := ipInfo.Postal

    cacheKey := fmt.Sprintf("weather:%s", postal)

    if redis.RedisAvailable {
        cachedWeather, err := redis.RedisClient.Get(ctx, cacheKey).Result()
        if err == nil {
            // Cache hit, return cached data
            c.Data(http.StatusOK, "application/json", []byte(cachedWeather))
            return
        }
    }

	locationUrl := fmt.Sprintf("http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=%s&q=%s", accuweatherApi, postal)
	locResp, err := http.Get(locationUrl)
	if err != nil {
		utils.HandleError(c, http.StatusInternalServerError, "Failed to get location key", err)
		return
	}

	defer func() {
		if err := locResp.Body.Close(); err != nil {
			log.Printf("Error closing response body: %v", err)
		}
	}()

	var locationData []map[string]interface{}
	if err := json.NewDecoder(locResp.Body).Decode(&locationData); err != nil || len(locationData) == 0 {
		utils.HandleError(c, http.StatusInternalServerError, "Failed to decode location key", err)
		return
	}
	locationKey, ok := locationData[0]["Key"].(string)
	if !ok {
		utils.HandleError(c, http.StatusInternalServerError, "Invalid location key format", fmt.Errorf("unexpected type for Key"))
		return
	}

	currentUrl := fmt.Sprintf("http://dataservice.accuweather.com/currentconditions/v1/%s?apikey=%s&details=true", locationKey, accuweatherApi)
	currResp, err := http.Get(currentUrl)
	if err != nil {
		utils.HandleError(c, http.StatusInternalServerError, "Failed to fetch current weather", err)
		return
	}

	defer func() {
		if err := currResp.Body.Close(); err != nil {
			log.Printf("Error closing response body: %v", err)
		}
	}()

	var currentData []weatherTypes.WeatherCurrentResponse
	if err := json.NewDecoder(currResp.Body).Decode(&currentData); err != nil || len(currentData) == 0 {
		utils.HandleError(c, http.StatusInternalServerError, "Failed to decode current weather", err)
		return
	}

	forecastUrl := fmt.Sprintf("http://dataservice.accuweather.com/forecasts/v1/daily/5day/%s?apikey=%s", locationKey, accuweatherApi)
	forecastResp, err := http.Get(forecastUrl)
	if err != nil {
		utils.HandleError(c, http.StatusInternalServerError, "Failed to fetch forecast", err)
		return
	}

	defer func() {
		if err := forecastResp.Body.Close(); err != nil {
			log.Printf("Error closing response body: %v", err)
		}
	}()

	var forecastData weatherTypes.WeatherForecastResponse
	if err := json.NewDecoder(forecastResp.Body).Decode(&forecastData); err != nil {
		utils.HandleError(c, http.StatusInternalServerError, "Failed to decode forecast", err)
		return
	}

	forecastsFiveDays := make([]weatherTypes.WeatherSingleForecast, 0, 5)
	for _, forecast := range forecastData.DailyForecasts[1:5] {
		forecastsFiveDays = append(forecastsFiveDays, weatherTypes.WeatherSingleForecast{
			Date:            formatDate(forecast.Date),
			TemperatureHigh: forecast.Temperature.Maximum.Value,
			TemperatureLow:  forecast.Temperature.Minimum.Value,
			IconDay:         forecast.Day.Icon,
			IconDayPhrase:   forecast.Day.IconPhrase,
			IconNight:       forecast.Night.Icon,
			IconNightPhrase: forecast.Night.IconPhrase,
		})
	}

	fullResponse := types.WeatherResponse{
		Current: weatherTypes.WeatherCurrentData{
			WeatherText:              currentData[0].WeatherText,
			WeatherIcon:              currentData[0].WeatherIcon,
			Temperature:              currentData[0].Temperature.Imperial.Value,
			RealFeelTemperature:      currentData[0].RealFeelTemperature.Imperial.Value,
			RealFeelTemperatureShade: currentData[0].RealFeelTemperatureShade.Imperial.Value,
			RelativeHumidity:         currentData[0].RelativeHumidity,
			Wind: weatherTypes.WindValues{
				Degrees:   currentData[0].Wind.Direction.Degrees,
				Direction: currentData[0].Wind.Direction.English,
				Speed:     currentData[0].Wind.Speed.Imperial.Value,
			},
			UVIndex:     currentData[0].UVIndex,
			UVIndexText: currentData[0].UVIndexText,
			Visibility:  currentData[0].Visibility,
			IsDayTime:   currentData[0].IsDayTime,
		},
		Forecast: weatherTypes.WeatherForecastData{
			WeatherText:  forecastData.Headline.Text,
			ForecastData: forecastsFiveDays,
		},
		Location: fmt.Sprintf("%s, %s", ipInfo.City, ipInfo.Region),
	}

    if redis.RedisAvailable {
        responseBytes, _ := json.Marshal(fullResponse)
        redis.RedisClient.Set(ctx, cacheKey, string(responseBytes), 30*time.Minute)
    }

	c.JSON(http.StatusOK, fullResponse)
}
