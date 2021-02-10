# The Bodyweight Gym Student Portal

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://sympli-rjs.netlify.app/storybook/index.html)
[![Maintainability](https://api.codeclimate.com/v1/badges/96b0263ab7a3c9513e4a/maintainability)](https://codeclimate.com/github/Mathew-Harvey/bwg-student-portal)
[![Known Vulnerabilities](https://snyk.io/test/github/jacktator/Sympli_RJS/badge.svg)](https://app.snyk.io/org/mathew-harvey/project/5d2357f0-6407-4164-a901-ed307dd86190/)


React Application which requests Start Wars Characters, an technical interview for Sympli.

[Live Site](https://bwg-student-portal.herokuapp.com/) | [Bundle Explorer](https://sympli-rjs.netlify.app/explorer.html) | [Tech Stacks](app/docs/STACK.md)

##(todo all here
## The App

The App specific code is placed in the `./app` folder. 

For more info, please see [`./app/README.md`](./app/README.md)

## The Storybook

[The Storybook](./storybook/README.md) is created to host components and docs.

## The Packages (TODO)

Presentational Components are created and placed into separate packages.

# Testing & Strategy

## Component = Presentational / Dumb Components

Presentational / Dumb Components are written and presented in Storybook.

Components are covered by Snapshots to ensure consistency.

## Container = Container / Smart Components

Container / Smart Components are written with network Requests

Containers are covered by Unit Test and Mock Data.

## Provider = Redux-Like Statement Management Provider

Given it's a simple application, `redux` package would be too heavy an overkill on the bundle size.

Instead, React Hooks are used to achieve Redux-Like features

- Context and Provider
- `useReducer`
- `utils`

Reducers and Utils are covered by Unit Tests. 

# Code Quality

Code Quality is automatically checked at `pre-commit`
- ESLint
- Prettier

# Error Handling

All Network Errors are handled within the `Provider`.

Any unhandled error, are caught by a catch-all `ErrorBoundary`, which reports to Sentry.

# Optimization

Bundles are code-split into small chucks and lazy loading is used.

# PWA and Offline-First

All files and responses are cached using approriate strategies.

Once user has visited the app once, he'll be able to use it offline.

![](./app/architecture.png)

# Security

SNYK

# CICD

Netlify

# UX Monitoring (TODO)

FullStory
