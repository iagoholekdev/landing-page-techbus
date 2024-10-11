CREATE TABLE leads (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(500) NOT NULL,
    data_cadastro TIMESTAMP NOT NULL,
    telefone VARCHAR(20) NOT NULL
);
