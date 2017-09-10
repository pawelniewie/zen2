FROM ruby:2.4.1

ENV INSTALL_PATH /zen

RUN set -ex \
    && apt-get update \
    && apt-get install -qq -y --no-install-recommends build-essential libpq-dev git curl \
    && (curl -sL https://deb.nodesource.com/setup_8.x | bash -) \
    && (curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -) \
    && (echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list) \
    && apt-get update \
    && apt-get install -qq -y nodejs yarn \
    && mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY Gemfile Gemfile.lock ./
RUN bundle install --binstubs --jobs 3

COPY package.json yarn.lock ./
RUN yarn install

COPY . ./

RUN bundle exec rake RAILS_ENV=production DATABASE_URL=postgresql://user:pass@127.0.0.1/dbname SECRET_KEY_BASE=dummytoken assets:precompile

VOLUME ["$INSTALL_PATH/public"]

ENTRYPOINT ["bin/rails"]

CMD ["s"]
