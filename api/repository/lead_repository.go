package repository

import (
	"context"
	"fmt"
	"log"
	"main/types"

	"github.com/jackc/pgx/v5/pgxpool"
)

func InsertLead(ctx context.Context, lead types.Lead, dbpool *pgxpool.Pool) error {
	query := `
		INSERT INTO leads (nome, email, data_cadastro, telefone)
		VALUES ($1, $2, $3, $4)
	`
	fmt.Println("Lead: ", lead)
	_, err := dbpool.Exec(ctx, query, lead.Nome, lead.Email, lead.DataHoraCadastro, lead.Telefone)
	if err != nil {
		log.Printf("error inserting lead: %v", err)
		return err
	}

	return nil
}
