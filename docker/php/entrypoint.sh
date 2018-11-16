#!/bin/bash
set -e

composer install
chown -R www-data:www-data /var/www/

exec "$@"