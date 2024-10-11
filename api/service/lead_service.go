package service

import (
	"fmt"
	"log"
	"main/repository"
	"main/types"
	"main/types/validations"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
)

func CreateLead(context *gin.Context, dbpool *pgxpool.Pool) {
	if context == nil {
		log.Fatal("Context is null")
	}

	var lead types.Lead
	if err := context.ShouldBindJSON(&lead); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	fmt.Println(lead)

	if err := validations.ValidateLead(lead); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": "Lead está com dados inválidos, verifique."})
	}

	if err := repository.InsertLead(context, lead, dbpool); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": "Erro ao salvar lead"})
		return
	}

}
