#!/usr/bin/env bash

set -ex

reset

yarn add react-helmet
yarn add gatsby-plugin-react-helmet react-helmet
yarn add gatsby-plugin-offline

yarn build

rm -rf docs

cp -R public docs

git add .
