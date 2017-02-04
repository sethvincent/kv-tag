# kv-tag

Convert template tags with `key: value` statements to objects.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[npm-image]: https://img.shields.io/npm/v/kv-tag.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/kv-tag
[travis-image]: https://img.shields.io/travis/sethvincent/kv-tag.svg?style=flat-square
[travis-url]: https://travis-ci.org/sethvincent/kv-tag
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CONDUCT.md

## About

This module is primarily a demonstration of creating a function to use as a tagged template literal.

You can use it convert a config-file like multiline string with `key: value` statements to an object.

## Install

```sh
npm install --save kv-tag
```

## Usage

```js
var kv = require('kv-tag')

var a = 1
var b = 'hello hi hey'
var c = 3

var obj = kv`
  a: ${a}
  b: ${b}
  c: ${c}
`

console.log(obj)
```

The logged value is an object:

```js
{
  a: 1,
  b: 'hello hi hey',
  c: 3
}
```

## Contact

- **chat** – You can chat about this project at [http://gitter.im/sethvincent/ask](http://gitter.im/sethvincent/ask)
- **issues** – Please open issues in the [issues queue](https://github.com/sethvincent/kv-tag/issues)

## License

[ISC](LICENSE.md)
