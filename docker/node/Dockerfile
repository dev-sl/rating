FROM node:latest

WORKDIR /var/www/rating

COPY . /var/www/rating

ENTRYPOINT yarn install && yarn encore dev --watch