package routes

import (
	"encoding/json"
	"net/http"

	"magic-mirror-on-the-wall-backend/types"
)



func GetDadJoke(w http.ResponseWriter, r *http.Request) {
	req, err := http.NewRequest("GET", "https://icanhazdadjoke.com", nil)
	if err != nil {
			http.Error(w, "Failed to create request: "+err.Error(), http.StatusInternalServerError)
			return
	}

	req.Header.Set("Accept", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
			http.Error(w, "Failed to fetch dad joke: "+err.Error(), http.StatusInternalServerError)
			return
	}
	defer resp.Body.Close()

	var dadJokeData types.DadJoke
	err = json.NewDecoder(resp.Body).Decode(&dadJokeData)
	if err != nil {
			http.Error(w, "Failed to decode dad joke: "+err.Error(), http.StatusInternalServerError)
			return
	}

	json.NewEncoder(w).Encode(dadJokeData)
}