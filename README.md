[![CircleCI](https://circleci.com/gh/pawelniewie/zen2.svg?style=svg)](https://circleci.com/gh/pawelniewie/zen2)

# Prerequisites

## Mac OS X

* Install system dependencies
  
  `brew install rbenv rbenv-gemset postgres node yarn`
  
  Run PostgreSQL if it's not running:
  
  `brew services start postgres`
  
* Checkout source code

	```
	mkdir -p ~/Development
	git clone git@github.com:pawelniewie/zen2.git ~/Development/zen
	cd  ~/Development/zen
	```
  
* Install ruby version that we use

	`rbenv install`
    
* Setup project

	`bin/setup`

# Running dev mode

`foreman start -f Procfile.dev`

# Settings up credentials for GraphiQL

Edit `.env` file and add your own credentials after you create a user:

```bash
GRAPHIQL_USER=11110000b@gmail.com
GRAPHIQL_PASSWORD=password
```

# Sample GQL

Check [GraphQL.md] for sample payloads.
