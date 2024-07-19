
# Documentação da API

## 1. Introdução
- **Nome da API**: Quester API
- **Descrição**: Esta API permite a conexão com banco de dados quester
- **URL Base**: https://api.exemplo.com

## 2. Autenticação
- **Método de Autenticação**: Sem autenticação

## 3. Endpoints
<table border="1px">
	<tr>
		<th> /signin</th>
		<th>Cadastra um usuário</th>
		<th> [RF0001]</th>
	<tr>
	<tr>
		<th> /signup</th>
		<th>Faz login de um usuário cadastrado</th>
			<th> [RF0002]</th>
	<tr>
<table>


### Criar Usuário
- **Método HTTP**: POST
- **URL**: /signin
- **Descrição**: Cria um novo usuário.

**Parâmetros de Requisição**:
- **Corpo da Requisição** (JSON):
```json
{
  "nome": string,
  "email": string,
  "senha": string,
  "date_of_birth": string
}
```
**Response**:
- **Sucesso**:
-- **Código HTTP:** 201 Created
--**Corpo da Resposta** (JSON): { acknowledged: true, insertedId: newObjectId(' ')  }

- **Erro**:
-- **Código HTTP:** 400 Bad request
--**Corpo da Resposta** (EXCEPTION): WriteError() 


