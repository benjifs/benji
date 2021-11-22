# benji.dog
[![Netlify Status](https://api.netlify.com/api/v1/badges/8adf49ae-cb8e-407b-bf3b-1b3c8a6af409/deploy-status)](https://app.netlify.com/sites/benji-dog/deploys)

My [personal website](https://benji.dog) built with [11ty](https://11ty.dev).

The [production](https://benji.dog) version of this website runs on a separate server. This repo is setup to automatically deploy with [Netlify](https://netlify.com) whenever there is a `push` to the [micropub-posts](https://github.com/benjifs/benji/tree/micropub-posts) branch.

## Setup

```bash
npm install
```

## Development

```bash
npm run start
```

## Build

```bash
npm run build
```

## Deploy
[![Netlify Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/benjifs/micropub)

Currently setup to deploy to Netlify, GH Pages, and upload to my server. Mostly just as a way to compare and to have a sample of a way to do this. Will stick to one approach in the future.
