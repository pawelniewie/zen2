# Installing dependencies

`bundle && npm i`

# Running dev mode

`heroku local -f Procfile.dev`

# Creating a user

```
curl -H "Content-Type: application/json" \
     -X POST \
     -d '{"user":{"email":"test@example.com","password":"12345678"}}' \
     http://localhost:5000/users.json
```