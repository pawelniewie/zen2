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
curl -v -H 'Content-Type: application/json' \                                                                                                                                            [master↑4|✚2]
     -X POST \
     -d '{"user":{"email":"11110000b+ano@gmail.com","password":"12345678"}}' \
     http://localhost:5000/users/sign_in.json
```

Response:

```json
{"id":"bfae6074-2ce5-4635-a127-4b75ce41cf95","email":"11110000b+ano@gmail.com","created_at":"2016-12-21T07:41:13.797Z","updated_at":"2016-12-21T09:00:37.717Z"}
```

Error response:

```json
{"error":"You need to sign in or sign up before continuing."}
```

# Log out

```bash
curl -v -H 'Content-Type: application/json' \                                                                                                                                            [master↑4|✚3]
     -X DELETE \
     -H 'Cookie: _zen_session=1808263b9893a87fbb93ef0af6c0022e; path=/; HttpOnly' \
     http://localhost:5000/users/sign_out.json
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