package routes

import (
	"encoding/json"
	"log"
	"net/http"
)

type DadJoke struct {
	ID     string `json:"id"`
	Joke   string `json:"joke"`
	Status int    `json:"status"`
}

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

	var dadJokeData DadJoke
	err = json.NewDecoder(resp.Body).Decode(&dadJokeData)
	if err != nil {
			http.Error(w, "Failed to decode dad joke: "+err.Error(), http.StatusInternalServerError)
			return
	}

	log.Printf("!!!", dadJokeData)

	json.NewEncoder(w).Encode(dadJokeData)
}