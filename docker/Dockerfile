FROM ruby:2.3.3

RUN apt-get update -qq && \
    apt-get install -y cmake pkg-config \
    imagemagick ghostscript file \
    xvfb qt5-default libqt5webkit5-dev gstreamer1.0-plugins-base gstreamer1.0-tools gstreamer1.0-x && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ENV app /app
ENV BUNDLE_PATH=/bundle

RUN mkdir $app

WORKDIR $app

ONBUILD COPY ../Gemfile /app/Gemfile
ONBUILD COPY ../Gemfile.lock /app/Gemfile.lock
ONBUILD COPY .. /app
ONBUILD RUN bundle install
ONBUILD COPY ./entrypoint.sh /

CMD foreman start -f Procfile.dev

