package location

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"

	"magic-mirror-on-the-wall-backend/types"
	"magic-mirror-on-the-wall-backend/utils"
)

func GetLocationInfo(c *gin.Context) {
	ipApiKey := os.Getenv("IP_INFO_API")
	accuweatherApi := os.Getenv("ACCUWEATHER_API")

	// Step 1: Get IP data from ipinfo.io
	ipUrl := fmt.Sprintf("https://ipinfo.io/json?token=%s", ipApiKey)
	resp, err := http.Get(ipUrl)
	if err != nil {
		utils.HandleError(c, http.StatusInternalServerError, "Failed to fetch IP location", err)
		return
	}

	defer func() {
		if err := resp.Body.Close(); err != nil {
			log.Printf("Error closing response body: %v", err)
		}
	}()

	if resp.StatusCode != http.StatusOK {
		utils.HandleError(c, http.StatusInternalServerError, "IP Info API returned an error", fmt.Errorf("status code: %d", resp.StatusCode))
		return
	}

	var ipInfoResponse types.IpInfoResponse
	if err := json.NewDecoder(resp.Body).Decode(&ipInfoResponse); err != nil {
		utils.HandleError(c, http.StatusInternalServerError, "Failed to decode IP info response", err)
		return
	}

	// Step 2: Use postal code to get location key from AccuWeather API
	postal := ipInfoResponse.Postal
	locationUrl := fmt.Sprintf("http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=%s&q=%s", accuweatherApi, postal)
	locationResp, err := http.Get(locationUrl)
	if err != nil {
		utils.HandleError(c, http.StatusInternalServerError, "Failed to fetch location key", err)
		return
	}

	defer func() {
		if err := locationResp.Body.Close(); err != nil {
			log.Printf("Error closing response body: %v", err)
		}
	}()

	if locationResp.StatusCode != http.StatusOK {
		utils.HandleError(c, http.StatusInternalServerError, "AccuWeather Location API returned an error", fmt.Errorf("status code: %d", locationResp.StatusCode))
		return
	}

	var locationData []map[string]interface{}
	if err := json.NewDecoder(locationResp.Body).Decode(&locationData); err != nil || len(locationData) == 0 {
		utils.HandleError(c, http.StatusInternalServerError, "Failed to decode location response", err)
		return
	}

	// Extract the Key from the first result
	locationKey, ok := locationData[0]["Key"].(string)
	if !ok {
		utils.HandleError(c, http.StatusInternalServerError, "Invalid location key format", fmt.Errorf("unexpected type for Key"))
		return
	}

	// Return the location key as JSON
	c.JSON(http.StatusOK, gin.H{"Key": locationKey})
}
