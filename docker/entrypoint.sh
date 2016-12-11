#!/bin/bash

bundle check || bundle install --jobs 1 --retry 5 --with test development webkit

if [ -n "$DATABASE_URL" ];then
  COUNT=0
  connected=1

  until [[ $connected == 0 ]]; do
    ruby /wait-for-db.rb "$DATABASE_URL"
    connected=$?

    if (( $COUNT > 10 ));then
      echo "Could not connect to db in 10 seconds"
      exit 1
    fi
    echo "Waiting for db $COUNT time"
    ((COUNT++))
    sleep 1
  done
fi

exec bundle exec $@
