package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"magic-mirror-on-the-wall-backend/redis"
	"magic-mirror-on-the-wall-backend/routes"
)

func init() {
	if os.Getenv("GO_ENV") != "production" {
		if err := godotenv.Load("../.env"); err != nil {
			log.Println("Warning: .env file not found")
		}
	}
}

func main() {
	redis.InitRedis()

	router := gin.Default()

	staticDir := "../frontend/dist"
	router.Static("/assets", staticDir+"/assets")

	router.GET("/dadJoke", routes.GetDadJoke)
	router.GET("/news", routes.GetNews)
	router.GET("/weather", routes.GetWeather)

	router.NoRoute(func(c *gin.Context) {
		if c.Request.URL.Path == "/" || c.Request.URL.Path == "/index.html" {
			c.File(staticDir + "/index.html")
		} else {
			c.Status(http.StatusNotFound)
		}
	})

	// Port setup
	port := os.Getenv("GO_PORT")
	if port == "" {
		port = "3005"
	}

	log.Printf("Server started on :%s\n", port)
	if err := router.Run(":" + port); err != nil {
		log.Fatal("Failed to run server:", err)
	}
}
