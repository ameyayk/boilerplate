# `server`

> TODO: description

## Usage

```
env NODE_ENV=development APP_PORT=5001 node server.js
```

## Tests

1. Register

```
 curl  -H 'Content-Type: application/json' -X POST http://localhost:5000/register -d  '{"email":"ameya@email.com","password":"hello"}'

```

2. Login

```
curl  -H 'Content-Type: application/json' -X POST http://localhost:5000/register -d  '{"email":"ameya@email.com","password":"hello"}'

```

curl -H 'x-auth-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwOTI0YTRhNzcyNzBlMjg2YzVhN2I0MyIsImVtYWlsIjoiYW1leWEifSwiaWF0IjoxNjIwMjAwNzYyfQ.3IXxbrByMtsCyFJ3uTvckBOUYKpR5uoEPHQtF1jyH4U' http://localhost:5000/api/data

```

```
