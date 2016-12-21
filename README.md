# Installing dependencies

`bundle && npm i`

# Running dev mode

`heroku local -f Procfile.dev`

# Sample GQL

## Create an organization

```bash
curl -H 'Content-Type: application/json' \                                                                                                                                                   [master|]
     -X POST \
     -d '{"user":{"email":"11110000b@gmail.com","password":"12345678", "organizations_attributes": [{"name": "Zen", "slug": "zen"}]}}' \
     http://localhost:5000/users.json
```

Response:

```json
{"id":"ee24f423-4539-4b7e-94c2-7498390c2290","email":"11110000b+test@gmail.com","created_at":"2016-12-21T07:33:53.319Z","updated_at":"2016-12-21T07:33:53.319Z"}
```

Error response:
```json
{"errors":{"organizations.slug":["This slug is already taken"],"email":["This one has already been taken"]}}
```

## Authenticate a user

```bash

```

Response:

```json

```

Error response:

```json

```

# Log out

```bash

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

## Create an issue

```graphql
mutation CreateIssue($input: CreateIssueInput!) {
  createIssue(input: $input) {
    success {
      issue {
        key
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
    "issue": {
      "summary": "This is a test"
    },
    "projectId": "f2882d16-8f28-4d23-b1f0-ffbde05f9f2d"
  }
}
```