package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"

	"magic-mirror-on-the-wall-backend/routes"
)

func init() {
	if os.Getenv("GO_ENV") != "production" {
		if err := godotenv.Load("../.env"); err != nil {
			log.Println("Warning: .env file not found")
		}
	}
}

func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*") // Allow all origins
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		if r.Method == "OPTIONS" {
			return
		}
		next.ServeHTTP(w, r)
	})
}

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/dadJoke", routes.GetDadJoke).Methods("GET")
	router.HandleFunc("/news", routes.GetNews).Methods("GET")
	router.HandleFunc("/weather", routes.GetWeather).Methods("GET")

	staticDir := "../frontend/dist"
	router.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir(staticDir))))

	router.PathPrefix("/").HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/" || r.URL.Path == "/index.html" {
			http.ServeFile(w, r, staticDir+"/index.html")
		} else {
			http.NotFound(w, r)
		}
	})
	
	port := os.Getenv("GO_PORT")
	if port == "" {
		port = "3005" 
	}

	log.Printf("Server started on :%s\n", port)
	if err := http.ListenAndServe(":"+port, enableCORS(router)); err != nil {
		log.Fatal("ListenAndServe:", err)
	}
}