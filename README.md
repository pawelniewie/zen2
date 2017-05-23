# Prerequisites
* Install rbenv
* Install postgres server and make sure it's started
* Install heroku cli
* `rbenv install 2.3.3`
* `gem install bundler` (if you don't have it already)
* `rake db:setup`

# Installing dependencies

`bundle && npm i`

# Running dev mode

`heroku local -f Procfile.dev`

# Settings up credentials for GraphiQL

Edit `.env` file and add your own credentials after you create a user:

```bash
GRAPHIQL_USER=11110000b@gmail.com
GRAPHIQL_PASSWORD=secret
```

# Sample GQL

Check [GraphQL.md] for sample payloads.
