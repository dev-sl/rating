#!/bin/bash
set -e

echo "Installing vendors..."
composer install

while ! nc -z mysql 3306; do
    echo "Waiting for connection to MySQL..."
    sleep 2s
done

echo "Building project..."
composer run-script build

echo "Adding permissions to project folders..."
chown -R www-data:www-data /var/www/

exec "$@"