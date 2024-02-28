## CLIENT MANAGEMENT - API

#### Get all clients

```http
  GET /api/v1/clients
```

#### Get client by id

```http
  GET /api/v1/clients/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Create new client

```http
  POST /api/v1/clients
```

Json body

```{
		"first_name": "first name",
		"last_name": "last name",
		"city": "city",
		"email": "email@email.com"
	}
```

| Parameter    | Type     | Description   |
| :----------- | :------- | :------------ |
| `first_name` | `string` | **Required**. |
| `last_name`  | `string` | **Required**. |
| `city`       | `string` | **Required**. |
| `email`      | `string` | **Required**. |

#### Delete client

```http
  DELETE /api/v1/clients/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Update existing client

```http
  PUT /api/v1/clients
```

Json body

```{
		"first_name": "first name",
		"last_name": "last name",
		"city": "city",
		"email": "email@email.com"
	}
```

| Parameter    | Type     | Description   |
| :----------- | :------- | :------------ |
| `first_name` | `string` | **Required**. |
| `last_name`  | `string` | **Required**. |
| `city`       | `string` | **Required**. |
| `email`      | `string` | **Required**. |

### Para rodar

npx ts-node-dev src/index.ts

## Para migrar as tabelas para o prisma

Entrar no .env e descomentar o DATABASE_URL com o localhost para migrar a tabela do prisma.

```
npx prisma migrate dev
```

Para rodar o docker (não esquecer de comentar o DATABASE_URL com o localhost):

```
docker compose -f docker-compose.yaml up --attach cm-api
```
