package routes

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"

	"magic-mirror-on-the-wall-backend/types"
	"magic-mirror-on-the-wall-backend/utils"
)

func GetDadJoke(c *gin.Context) {
	req, err := http.NewRequest("GET", "https://icanhazdadjoke.com", nil)
	if err != nil {
		utils.HandleError(c, http.StatusInternalServerError, "Failed to create request", err)
		return
	}

	req.Header.Set("Accept", "application/json")

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		utils.HandleError(c, http.StatusInternalServerError, "Failed to fetch dad joke", err)
		return
	}

	defer func() {
		if err := resp.Body.Close(); err != nil {
			log.Printf("Error closing response body: %v", err)
		}
	}()

	var dadJokeData types.DadJoke
	if err := json.NewDecoder(resp.Body).Decode(&dadJokeData); err != nil {
		utils.HandleError(c, http.StatusInternalServerError, "Failed to decode dad joke response", err)
		return
	}

	c.JSON(http.StatusOK, dadJokeData)
}
