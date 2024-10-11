package validations

import (
	"errors"
	"main/types"
)

func ValidateLead(lead types.Lead) error {
	if lead.Nome == "" {
		return errors.New("o campo 'nome' é obrigatório")
	}

	if lead.Email == "" {
		return errors.New("o campo 'Email' é obrigatório")
	}

	if lead.Telefone == "" {
		return errors.New("o campo 'telefone' é obrigatório")
	}

	return nil
}
