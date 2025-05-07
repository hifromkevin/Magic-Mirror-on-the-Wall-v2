package utils

import (
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
)

// HandleError centralizes error handling for consistent responses and logging
func HandleError(c *gin.Context, statusCode int, message string, err error) {
	log.Printf("%s: %v", message, err)
	c.JSON(statusCode, gin.H{"error": fmt.Sprintf("%s: %v", message, err)})
}
