FROM php:7.2-fpm

RUN apt-get update && apt-get install -y --no-install-recommends \
    apt-utils \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    libpng-dev \
    curl \
    wget \
    zip \
    unzip \
    git

RUN curl --silent --show-error https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/rating

CMD ["php-fpm"]