# Getting Started with Create React App

This project was use Lerna repo management tool to build packages

## Table of Contents

- [Description](#description)
- [Available Scripts](#available-scripts)
  - [yarn format](#yarn-format)
  - [yarn build](#yarn-build)
  - [yarn dev](#yarn-dev)
  - [yarn test](#yarn-test)
  - [yarn run publish](#yarn-run-publish)
  - [yarn build:storybook](#yarn-build:storybook)
  - [Supported Browsers](#supported-browsers)
- [Styled Components](#styled-components)
- [Lerna](#lerna)
- [Storybook](#storybook)
- [GitHub](#github)

## Description

This is project demonstrated United States population via barchart with mock data (json data).

The library using for demonstrating barchart is AmCharts. However, it has some limitation in jest while running "yarn test". 

There is dropdown button located at the top-right corner, it executes a simple filter function for year.

There is a dummy dropdown show after 'App experience' called General. It potentially can fulfil a selection function.   

## Available Scripts

In the project directory, you can run:

### `yarn format`

Use prettier to prettify repo code.

More [info](https://prettier.io/docs/en/comparison.html)

### `yarn build`

Builds the app for production to the `lib` folder.\
It correctly bundles Packages in production mode and optimizes the build for the best performance.

### `yarn dev`

Launches the dev runner in the interactive watch mode.\

### `yarn test`

Launches the jest runner to test different scenario suits to assure code quality 

Learn more about [Jest](https://jestjs.io/docs/getting-started)

### `yarn run publish`

Publish production ready code ot [npm](https://www.npmjs.com/)


## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Styled Components

The layout of the app is completed with styled-components library.

For example:

### `globalStyles.ts`

```ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family:"brandon-grotesque", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${color.background};
    }
    ...
`

```

More information for [Styled Components](https://styled-components.com/)

## Lerna

Splitting up large codebases into separate independently versioned packages is extremely useful for code sharing. However, making changes across many repositories is messy and difficult to track, and testing across repositories gets complicated really fast.

To solve these (and many other) problems, some projects will organize their codebases into multi-package repositories. Projects like Babel, React, Angular, Ember, Meteor, Jest, and many others develop all of their packages within a single repository.

More info about [Lerna](https://lerna.js.org/)

## Storybook

The package repo use Storybook tool to develop and test UI components

Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.

More info about [Storybook](https://storybook.js.org/)

## Github

The repo has been managed and stored by the Github, and it also setup CI pipeline through github workflows
