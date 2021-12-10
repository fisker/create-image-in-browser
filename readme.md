# create-image-in-browser

[![Build Status][github_actions_badge]][github_actions_link]
[![Coverage][coveralls_badge]][coveralls_link]
[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]

[github_actions_badge]: https://img.shields.io/github/workflow/status/fisker/create-image-in-browser/CI/main?style=flat-square
[github_actions_link]: https://github.com/fisker/create-image-in-browser/actions?query=branch%3Amain
[coveralls_badge]: https://img.shields.io/coveralls/github/fisker/create-image-in-browser/main?style=flat-square
[coveralls_link]: https://coveralls.io/github/fisker/create-image-in-browser?branch=main
[license_badge]: https://img.shields.io/npm/l/prettier-format.svg?style=flat-square
[license_link]: https://github.com/fisker/create-image-in-browser/blob/main/license
[package_version_badge]: https://img.shields.io/npm/v/create-image-in-browser.svg?style=flat-square
[package_link]: https://www.npmjs.com/package/create-image-in-browser

> Create image with the `<canvas>` element

## Installation

```bash
yarn add create-image-in-browser
```

## Usage

```js
import createImage from 'create-image-in-browser'

const buffer = await createImage('path/to/paint-script.js')

console.log(result)
//=> <Buffer 89 50 4e 47 0d ...>
```

## API

### `createImage(script, data?, options?)`

#### `script`

- type: `string|URL`

Path to the paint script

#### `data`

- type: [`Serializable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description)

Data for the paint script

#### `options`

```ts
{
  type?: "image/png" | "image/jpeg" | "image/webp",
  quality: number,
}
```

Options for `Canvas#toBlob()`
