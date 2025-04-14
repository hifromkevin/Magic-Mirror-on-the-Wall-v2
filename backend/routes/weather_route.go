package routes

import (
	"encoding/json"
	"fmt"
	"magic-mirror-on-the-wall-backend/types"
	"magic-mirror-on-the-wall-backend/types/weatherTypes"
	"net/http"
	"os"
	"time"
)

func formatDate(dateStr string) string {
	parsedDate, err := time.Parse(time.RFC3339, dateStr)
	if err != nil {
			return dateStr // Return the original string if parsing fails
	}
	return parsedDate.Format("Monday, Jan 2") // Format as "Mon Day" (e.g., "Apr 14")
	}

func GetWeather(w http.ResponseWriter, r *http.Request) {
	ipApiKey := os.Getenv("IP_INFO_API")
	accuweatherApi := os.Getenv("ACCUWEATHER_API")
	
	ipUrl := fmt.Sprintf("https://ipinfo.io/json?token=%s", ipApiKey)
	ipResp, err := http.Get(ipUrl)
	if err != nil {
		http.Error(w, "Failed to get IP info", http.StatusInternalServerError)
		return
	}
	defer ipResp.Body.Close()

	var ipInfo types.IpInfoResponse
	if err := json.NewDecoder(ipResp.Body).Decode(&ipInfo); err != nil {
		http.Error(w, "Failed to decode IP info", http.StatusInternalServerError)
		return
	}
	postal := ipInfo.Postal

	locationUrl := fmt.Sprintf("http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=%s&q=%s", accuweatherApi, postal)
	locResp, err := http.Get(locationUrl)
	if err != nil {
		http.Error(w, "Failed to get location key", http.StatusInternalServerError)
		return
	}
	defer locResp.Body.Close()

	var locationData []map[string]interface{}
	if err := json.NewDecoder(locResp.Body).Decode(&locationData); err != nil || len(locationData) == 0 {
		http.Error(w, "Failed to decode location key", http.StatusInternalServerError)
		return
	}
	locationKey := locationData[0]["Key"].(string)

	currentUrl := fmt.Sprintf("http://dataservice.accuweather.com/currentconditions/v1/%s?apikey=%s&details=true", locationKey, accuweatherApi)
	currResp, err := http.Get(currentUrl)
	if err != nil {
		http.Error(w, "Failed to fetch current weather", http.StatusInternalServerError)
		return
	}
	defer currResp.Body.Close()

	var currentData []weatherTypes.WeatherCurrentResponse
	if err := json.NewDecoder(currResp.Body).Decode(&currentData); err != nil || len(currentData) == 0 {
		http.Error(w, "Failed to decode current weather", http.StatusInternalServerError)
		return
	}

	forecastUrl := fmt.Sprintf("http://dataservice.accuweather.com/forecasts/v1/daily/5day/%s?apikey=%s&metric=true", locationKey, accuweatherApi)
	forecastResp, err := http.Get(forecastUrl)
	if err != nil {
		http.Error(w, "Failed to fetch forecast", http.StatusInternalServerError)
		return
	}
	defer forecastResp.Body.Close()

	var forecastData weatherTypes.WeatherForecastResponse

	if err := json.NewDecoder(forecastResp.Body).Decode(&forecastData); err != nil {
			http.Error(w, "Failed to decode forecast", http.StatusInternalServerError)
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
			WeatherText: currentData[0].WeatherText,
			WeatherIcon: currentData[0].WeatherIcon,
			Temperature: currentData[0].Temperature.Imperial.Value,
			RealFeelTemperature: currentData[0].RealFeelTemperature.Imperial.Value,
			RealFeelTemperatureShade: currentData[0].RealFeelTemperatureShade.Imperial.Value,
			RelativeHumidity: currentData[0].RelativeHumidity,
			Wind: currentData[0].Wind,
			WindGust: currentData[0].WindGust,
			UVIndex: currentData[0].UVIndex,
			UVIndexText: currentData[0].UVIndexText,
			Visibility: currentData[0].Visibility,
		},
		Forecast: weatherTypes.WeatherForecastData{
			WeatherText:  forecastData.Headline.Text,
			ForecastData: forecastsFiveDays,
	},
		Location: fmt.Sprintf("%s, %s", ipInfo.City, ipInfo.Region), 
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(fullResponse)
}