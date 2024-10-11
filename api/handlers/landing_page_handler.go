package handler

import (
	service "main/service"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
)

func CreateLandingPageHandler(engine *gin.Engine, dbPool *pgxpool.Pool) {
	engine.POST("/createlead", func(context *gin.Context) {
		service.CreateLead(context, dbPool)
	})
}
