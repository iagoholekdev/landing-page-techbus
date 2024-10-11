package main

import (
	"log"
	"main/config"
	handler "main/handlers"

	"github.com/gin-gonic/gin"
)

func main() {
	handlerInstance := gin.Default()

	dbPool, err := config.ConnectToDatabase()
	if err != nil {
		log.Fatalf("Error connecting to the database: %v", err)
	}
	defer dbPool.Close()
	handler.CreateLandingPageHandler(handlerInstance, dbPool)
	if err := handlerInstance.Run(":8080"); err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}
