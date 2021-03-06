## Create an organization

```bash
curl -H 'Content-Type: application/json' \                                                                                                                                                   [master|]
     -X POST \
     -d '{"user":{"email":"11110000b@gmail.com","password":"12345678", "organization_attributes": {"name": "Zen", "slug": "zen"}}}' \
     http://localhost:5000/users.json
```

Response:

```json
{"id":"ee24f423-4539-4b7e-94c2-7498390c2290","email":"11110000b+test@gmail.com","created_at":"2016-12-21T07:33:53.319Z","updated_at":"2016-12-21T07:33:53.319Z"}
```

Error response:
```json
{"errors":{"organization.slug":["This slug is already taken"],"email":["This one has already been taken"]}}
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

## Getting list of issues

```graphql
query IssueQuery($project:ProjectSelector) {
  issues(project: $project) {
    edges {
      node {
        id
        summary
      }
    }
  }
}
```

Variables:

```json
{
  "project": {
    "key": "TEST"
  }
}
```

Output:

## Create a comment

```graphql
mutation CreateComment($input:CreateCommentInput!) {
  createComment(input:$input) {
    errors {
      field
      message
    }
    success{
      issue{
        comments {
          edges{
            node {
              body
            }
          }
        }
      }
    }
  }
}
```

```json
{
  "input": {
    "comment": {
      "issue_id": "68633b11-c9fd-4cbd-b7e7-698afd7e736a",
      "body": "this is sparta"
    }
  }
}
```

## Update issue

```graphql
mutation UpdateIssue($issue:UpdateIssueInput!) {
  updateIssue(input:$issue) {
    success {
      issue {
        summary
        description
      }
    }
    errors {
      field
      message
    }
  }
}
```

```json
{
  "issue": {
    "issue_id": "4fe93613-ad27-4c90-b3f8-ce10a9016f3f",
    "fields": [
      {"field_id": "summary", "serialized_value": "Another"},
      {"field_id": "description", "serialized_value": "Test"}
    ]
  }
}
```
