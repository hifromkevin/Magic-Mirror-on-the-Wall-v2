package routes

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
)

type NewsResponse struct {
    Status       string    `json:"status"`
    TotalResults int       `json:"totalResults"`
    Articles     []Article `json:"articles"`
}

type Article struct {
    Source      Source  `json:"source"`
    Author      string  `json:"author"`
    Title       string  `json:"title"`
    Description *string `json:"description"`
    URL         string  `json:"url"`
    URLToImage  *string `json:"urlToImage"`
    PublishedAt string  `json:"publishedAt"`
    Content     *string `json:"content"`
}

type Source struct {
    ID   *string `json:"id"`
    Name string  `json:"name"`
}

func GetNews(w http.ResponseWriter, r *http.Request) {
	apiKey := os.Getenv("NEWS_API")
	if apiKey == "" {
			http.Error(w, "API key not set", http.StatusInternalServerError)
			return
	}

	url := fmt.Sprintf("https://newsapi.org/v2/top-headlines?country=us&apiKey=%s", apiKey)

	resp, err := http.Get(url)
	if err != nil {
			log.Printf("Failed to fetch news: %v", err)
			http.Error(w, "Failed to fetch news: "+err.Error(), http.StatusInternalServerError)
			return
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
			log.Printf("News API returned status: %d", resp.StatusCode)
			http.Error(w, "News API returned an error", http.StatusInternalServerError)
			return
	}

	var newsResponse NewsResponse
	err = json.NewDecoder(resp.Body).Decode(&newsResponse)
	if err != nil {
			log.Printf("Failed to decode news response: %v", err)
			http.Error(w, "Failed to decode news response: "+err.Error(), http.StatusInternalServerError)
			return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(newsResponse.Articles)
}