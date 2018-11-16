#!/bin/bash
set -e

yarn install
yarn encore dev --watch

exec "$@"