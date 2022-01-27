# lezer-tasl

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme) [![license](https://img.shields.io/github/license/underlay/lezer-tasl)](https://opensource.org/licenses/MIT) [![NPM version](https://img.shields.io/npm/v/lezer-tasl)](https://www.npmjs.com/package/lezer-tasl) ![TypeScript types](https://img.shields.io/npm/types/lezer-tasl)

A Lezer grammar for the tasl schema language.

> ⚠️ This is a low-level library for parsing the **AST** of the schema language - if you want to parse .tasl files into proper `tasl.Schema` objects, you want to use the main [`tasl`](https://github.com/underlay/tasl) package instead.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Install

```
npm i lezer-tasl
```

## Usage

```ts
import { parser } from "lezer-tasl"

const tree = parser.parse(`# hello world
namespace s http://schema.org/

class s:Person {
  s:name -> string
}
`)

// do something with tree.cursor() or tree.topNode ...
```

You can find documentation for the LR parser interface [on the Lezer website](https://lezer.codemirror.net/docs/ref/).

## API

```ts
import type { LRParser } from "@lezer/lr"

export const parser: LRParser
```

## Testing

Tests use [AVA 4](https://github.com/avajs/ava) and live in the [test](./test/) directory.

```
npm run test
```

## Contributing

This library is just intended to export the compiled lezer grammar, so I don't expect to add any features or functionality beyond that. If you find issues with the grammar definition itself please open an issue to discuss them!

## License

MIT © 2021 Joel Gustafson
