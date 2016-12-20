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

# Sample GQL

## Create an organization

```graphql
mutation CreateOrganizationWithUser($input: CreateOrganizationWithUserInput!) {
  createOrganizationWithUser(input: $input) {
    success {
      token
      user {
        id
      }
      organization {
        id
      }
    }
    clientMutationId
    errors {field, message}
  }
}
```

```json
{
  "input":{
    "clientMutationId": "test",
    "organization": {
      "name": "Test",
      "slug": "tet"
    },
    "user": {
      "email": "11110000b@gmail.com",
      "password": "dupa123"
    }
  }
}
```

## Create a project

```graphql
mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    success {
      project {
        key
        id
      }
    }
    clientMutationId
    errors {field, message}
  }
}
```

```json
{
  "input":{
    "clientMutationId": "test",
    "project": {
      "name": "Another",
      "key": "ano"
    },
    "organizationId": "202530d3-45cc-433b-b874-65c72707c763"
  }
}
```