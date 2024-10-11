package types

import "time"

type Lead struct {
	ID               int64     `json:"id"`
	Nome             string    `json:"nome"`
	Email            string    `json:"email"`
	DataHoraCadastro time.Time `json:"dataHoraCadastro"`
	Telefone         string    `json:"telefone"`
}
