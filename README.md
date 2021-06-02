# Imigani Express API

Imigani Backend API

[![Build Status](https://travis-ci.com/mwibutsa/imigani-api.svg?branch=develop)](https://travis-ci.com/mwibutsa/imigani-api) [![Coverage Status](https://coveralls.io/repos/github/mwibutsa/imigani-api/badge.svg?branch=develop)](https://coveralls.io/github/mwibutsa/imigani-api?branch=develop)

## Description

Imigani is a an application designed to help Rwandans maintain their culture

## Technologies

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- A package manager - [Yarn](https://yarnpkg.com/lang/en/) (preferred) or [NPM](https://www.npmjs.com/)
- [Postgres](https://www.postgresql.org/)

## Prerequisites

NodeJS and a package manager should be installed on your system together with the following applications for use in development

- [Postman](https://www.postman.com/downloads/) or [Insomnia](https://insomnia.rest/download/) for testing the API or to trigger API actions
- A web browser (prefer [Chrome](https://www.google.com/chrome/))

## Setup

After installing the prerequisites, clone the repository:

```ch
    $ git clone https://github.com/mwibutsa/imigani-api.git
```

Then change the directory to the cloned repository:

```ch
    $ cd imigani-api
```

To install dependencies defined in the `package.json` file run:

```ch
    $ yarn install
```

Create a `.env` file and add all variables as defined in the `.env.example` file

```ch
    touch .env
```

Start the local development

```ch
    $ yarn start
```

To access the development API server :

- Open [localhost:3000](http://localhost:3000) in your browser

This will load the development version of Imigani API.

## Development standards and Guidelines

- [Commit message](https://www.conventionalcommits.org/en/v1.0.0/)
- [ESLint](https://eslint.org/) for Typescript and Javascript

## Deployment

- Raise a PR on `develop` branch
- When the PR is merged, GitHub CI will build and deploy the project
- Branch naming `<type>/short-description` where type can be [feat,fix,chore]

## Sources and other info

- API documentation available on [localhost:3000/api-docs](http://localhost:3000/api-docs)

## Troubleshooting

- Check the error in console log for errors

## Maintainers

- [Mwibutsa Floribert](https://gitlab.com/mwibutsa)
- [Niyonizeye Jean paul](https://gitlab.com/Niyonizeye)
