package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

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