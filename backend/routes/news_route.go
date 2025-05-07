package routes

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"magic-mirror-on-the-wall-backend/types"
	"magic-mirror-on-the-wall-backend/utils"

	"github.com/gin-gonic/gin"
)

func GetNews(c *gin.Context) {
	apiKey := os.Getenv("NEWS_API")
	if apiKey == "" {
		utils.HandleError(c, http.StatusInternalServerError, "API key not set", nil)
		return
	}

	url := fmt.Sprintf("https://newsapi.org/v2/top-headlines?country=us&apiKey=%s", apiKey)

	resp, err := http.Get(url)
	if err != nil {
		log.Printf("Failed to fetch news: %v", err)
		utils.HandleError(c, http.StatusInternalServerError, "Failed to fetch news", err)
		return
	}

	defer func() {
		if err := resp.Body.Close(); err != nil {
			log.Printf("Error closing response body: %v", err)
		}
	}()

	if resp.StatusCode != http.StatusOK {
		log.Printf("News API returned status: %d", resp.StatusCode)
		utils.HandleError(c, http.StatusInternalServerError, "News API returned an error", err)
		return
	}

	var newsResponse types.NewsResponse
	err = json.NewDecoder(resp.Body).Decode(&newsResponse)
	if err != nil {
		log.Printf("Failed to decode news response: %v", err)
		utils.HandleError(c, http.StatusInternalServerError, "Failed to decode news response", err)
		return
	}

	c.JSON(http.StatusOK, newsResponse.Articles[0:5])
}
