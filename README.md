# benji.dog
[![GitHub Status](https://github.com/benjifs/benji/actions/workflows/eleventy_build.yml/badge.svg)](https://github.com/benjifs/benji/actions)

[![Netlify Status](https://api.netlify.com/api/v1/badges/8adf49ae-cb8e-407b-bf3b-1b3c8a6af409/deploy-status)](https://app.netlify.com/sites/benji-dog/deploys)

My [personal website](https://benji.dog) built with [11ty](https://11ty.dev).

The [production](https://benji.dog) version of this website runs on a separate server. On a push to the `main` branch, a workflow runs and builds the website and after it completes running, it will deploy the changes to my server. This repo is also setup to deploy to [GitHub Pages](https://pages.github.com/) and [Netlify](https://netlify.com) but those are mainly there for reference purpose.

## Build

To build, run `npm install` and `npm run build`. If doing active development, you can also run `npm run start` to watch for changes and rebuild as needed.

## Deploy

The easiest way to deploy this website is to upload the `_site` directory that shows up after a successful built. You can also fork this repo and make the required environment variable changes (see [.env.example](https://github.com/benjifs/benji/blob/main/.env.example)) and it should build once you enable [GitHub Pages](https://pages.github.com/).

An easier approach is to use the "Netlify Deploy" button from below which should run through the process of cloning and setting up everything for you.

[![Netlify Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/benjifs/benji)

