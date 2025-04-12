package routes

import (
	"encoding/json"
	"fmt"
	"magic-mirror-on-the-wall-backend/types"
	"magic-mirror-on-the-wall-backend/types/weatherTypes"
	"net/http"
	"os"
)

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

	var forecastWrapper struct {
		DailyForecasts []weatherTypes.WeatherForecastResponse `json:"DailyForecasts"`
	}
	if err := json.NewDecoder(forecastResp.Body).Decode(&forecastWrapper); err != nil {
		http.Error(w, "Failed to decode forecast", http.StatusInternalServerError)
		return
	}

	fullResponse := types.WeatherResponse{
		Current:  currentData[0],
		Forecast: forecastWrapper.DailyForecasts,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(fullResponse)
}