## 🛠 Under construction

Application that allows you to convert fiat currency to crypto. Using coingecko api. Personal Project.

# Crypto Converter App

A simple app allowing you to convert selected cryptocurrencies to fiat currencies and vice versa. It also displays current data for listed cryptocurrencies.

## Table of contents

## Motivation

I recently got interested in crypto markets and wanted to be able to convert prices to fiat currency in a simple and straighforward way. I also wanted to have a display of current prices and changes.

## Demo

App provides converter, has a toggle view between cards and a table, and a switch between light and dark mode.
GIF

## Installation and running app

Use the npm package manager to install.

```bash
npm install
```

To start use a command

```bash
npm start
```

## API used

[Coin gecko API](https://www.coingecko.com/en/api/documentation)

## Technologies used

- [React](https://github.com/facebook/create-react-app)
- [Typescript](https://www.typescriptlang.org/)
- [Styled components](https://styled-components.com/)
- [Material UI](https://mui.com/getting-started/usage/)
- [React number format](https://www.npmjs.com/package/react-number-format)

## Future plans

- User will be able to customize which cryptocurrencies and fiat currencies would be displayed to them. That would offer bigger selection to user.
- Displaying more detailed information about cryptocurrencies (24h high, 24h low, graph).

## Known issues 🐞

- Material UI table is not resposnsive. [Sticky columns are planned](https://mui.com/components/data-grid/columns/#column-pinning) though.
- In convertor input zero does not get replaced by new number but stays as the next digit.
- When scrolled down and switching view to table, page scrolls to top.
