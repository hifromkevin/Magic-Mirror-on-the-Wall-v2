package location

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"magic-mirror-on-the-wall-backend/types"
)



func GetLocationInfo(w http.ResponseWriter, r *http.Request) {
	ipApiKey := os.Getenv("IP_INFO_API")
	accuweatherApi := os.Getenv("ACCUWEATHER_API")

	// Step 1: Get IP data from ipinfo.io
	ipUrl := fmt.Sprintf("https://ipinfo.io/json?token=%s", ipApiKey)
	resp, err := http.Get(ipUrl)
	if err != nil {
			log.Printf("Failed to fetch IP location: %v", err)
			http.Error(w, "Failed to fetch IP location: "+err.Error(), http.StatusInternalServerError)
			return
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
			log.Printf("IP Info API returned status: %d", resp.StatusCode)
			http.Error(w, "IP Info API returned an error", http.StatusInternalServerError)
			return
	}

	var ipInfoResponse types.IpInfoResponse
	err = json.NewDecoder(resp.Body).Decode(&ipInfoResponse)
	if err != nil {
			log.Printf("Failed to decode IP info response: %v", err)
			http.Error(w, "Failed to decode IP info response: "+err.Error(), http.StatusInternalServerError)
			return
	}

	// Step 2: Use postal code to get location key from AccuWeather API
	postal := ipInfoResponse.Postal
	locationUrl := fmt.Sprintf("http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=%s&q=%s", accuweatherApi, postal)
	locationResp, err := http.Get(locationUrl)
	if err != nil {
			log.Printf("Failed to fetch location key: %v", err)
			http.Error(w, "Failed to fetch location key: "+err.Error(), http.StatusInternalServerError)
			return
	}
	defer locationResp.Body.Close()

	if locationResp.StatusCode != http.StatusOK {
			log.Printf("AccuWeather Location API returned status: %d", locationResp.StatusCode)
			http.Error(w, "AccuWeather Location API returned an error", http.StatusInternalServerError)
			return
	}

	var locationData []map[string]interface{}
	err = json.NewDecoder(locationResp.Body).Decode(&locationData)
	if err != nil || len(locationData) == 0 {
			log.Printf("Failed to decode location response: %v", err)
			http.Error(w, "Failed to decode location response: "+err.Error(), http.StatusInternalServerError)
			return
	}

	// Extract the Key from the first result
	locationKey := locationData[0]["Key"].(string)

	// Return the location key as JSON
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"Key": locationKey})
}