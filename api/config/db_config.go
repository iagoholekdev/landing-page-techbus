package config

import (
	"context"
	"fmt"

	"github.com/jackc/pgx/v5/pgxpool"
	_ "github.com/jackc/pgx/v5/stdlib"
)

func ConnectToDatabase() (*pgxpool.Pool, error) {
	connectionString := "postgres://postgres:admin@localhost:5432/landing-page"
	pool, err := pgxpool.New(context.Background(), connectionString)
	if err != nil {
		return nil, fmt.Errorf("unable to connect to database: %w", err)
	}

	if err = pool.Ping(context.Background()); err != nil {
		pool.Close()
		return nil, fmt.Errorf("unable to reach the database: %w", err)
	}

	fmt.Println("Connected to the database!")
	return pool, nil
}
