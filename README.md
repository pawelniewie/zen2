# Installing dependencies

`bundle && npm i`

# Running dev mode

`heroku local -f Procfile.dev`

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