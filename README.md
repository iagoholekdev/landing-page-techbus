
# TechBus Enterprise

# TECHBUS

**TECHBUS** é um aplicativo que desenvolveremos para o projeto integrador da faculdade, que apresenta uma solução inovadora para o transporte coletivo privado, facilitando a movimentação de alunos e funcionários em ônibus e vans.

**REPOSITÓRIO ATUAL** o repositório atual é da landing page do projeto
## Tecnologias Utilizadas
- **Frontend:** Angular
- **Backend:** Go com Gin (para a API)
- **Banco de Dados:** PostgreSQL (para armazenamento de dados)
- **Migrations:** GORM para gerenciar migrações do banco de dados

## Funcionalidades da Landing Page

- **Informações sobre o TECHBUS:** Apresentação da solução e seus benefícios para transporte coletivo.
- **Cadastro de leads**: Pessoas interessadas no projeto poderão se cadastrar no nosso database, onde entraremos em contato

## Instalação

### Inicialização do projeto

1. **Rode as migrations (exemplo):**
```bash
migrate -database postgres://user:password@localhost:5432/landing-page?sslmode=disable -path ./migrations up
```
2. **Clone o repositório:**
   ```bash
   git clone https://github.com/iagoholekdev/landing-page-techbus.git
   -----------api------------
   cd landing-page-techbus/api 
   go run main.go
   -----------web------------
   cd landing-page-techbus/web
   ng serve

