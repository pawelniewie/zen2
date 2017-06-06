[![CircleCI](https://circleci.com/gh/pawelniewie/zen2.svg?style=svg)](https://circleci.com/gh/pawelniewie/zen2)

# Prerequisites
* Install rbenv
* Install postgres server and make sure it's started
* Install heroku cli
* `rbenv install 2.4.1`
* `rake db:setup`

# Installing dependencies

`bundle && yarn install`

# Running dev mode

`heroku local -f Procfile.dev`

# Settings up credentials for GraphiQL

Edit `.env` file and add your own credentials after you create a user:

```bash
GRAPHIQL_USER=11110000b@gmail.com
GRAPHIQL_PASSWORD=password
```

# Sample GQL

Check [GraphQL.md] for sample payloads.
