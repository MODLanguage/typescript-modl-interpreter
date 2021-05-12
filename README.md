# MODL Interpreter in TypeScript

This repository contains an implementation of a [MODL](https://www.modl.uk/) interpreter in TypeScript.

## Installation With NPM

Use `npm install --save modl-interpreter`

## TypeScript Example

```TypeScript
import { Interpreter } from './modl-interpreter/Interpreter';

const interpreter = new Interpreter();

const jsonString = interpreter.interpretToJsonString('x = a MODL string');

console.log(jsonString);
```

This example produces the output:
```json
{"x":"a MODL string"}
```

## JavaScript Example

```JavaScript
const modl = require('modl-interpreter');

const jsonString = modl.interpreter.interpretToJsonString('x = a MODL string');

console.log(jsonString);
```
This example produces the same output as above.