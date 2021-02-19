import {
  Modl,
  ModlArray,
  ModlBoolNull,
  ModlMap,
  ModlNumber,
  ModlPair,
  ModlQuoted,
  ModlString,
  ModlValue,
} from './Model';
import { createStringEscapeReplacer } from './Utils';

/**
 * Modls to json
 * @param modl
 * @returns to json
 */
export function modlToJson(modl: Modl): object | null {
  if (modl.s.length === 1 && modl.s[0] instanceof ModlArray) {
    return arrayToJson(modl.s[0]);
  } else {
    const result = {};

    modl.s.forEach((structure) => {
      if (structure instanceof ModlPair) {
        pairToJson(structure, result);
      }
      if (structure instanceof ModlMap) {
        mapToJson(structure, result);
      }
      if (structure instanceof ModlArray) {
        throw new Error('Array cannot be stored directly in a map, it must be a pair');
      }
    });

    return Object.keys(result).length === 0 ? null : result;
  }
}

/**
 * To json
 * @param x
 * @returns json
 */
function toJson(x: ModlValue): any {
  if (x instanceof ModlArray) {
    return arrayToJson(x);
  }
  if (x instanceof ModlMap) {
    return mapToJson(x, {});
  }
  if (x instanceof ModlPair) {
    return pairToJson(x, {});
  }
  if (x instanceof ModlQuoted) {
    return stringEscapeReplacer.replace(unquote(x.value));
  }
  if (x instanceof ModlNumber) {
    return x.value;
  }
  if (x instanceof ModlString) {
    return stringEscapeReplacer.replace(unquote(x.value));
  }
  if (x === ModlBoolNull.ModlFalse) {
    return false;
  }
  if (x === ModlBoolNull.ModlTrue) {
    return true;
  }
  if (x === ModlBoolNull.ModlNull) {
    return null;
  }
  return x;
}

const stringEscapeReplacer = createStringEscapeReplacer();

/**
 * Pairs to json
 * @param p
 * @param result
 * @returns
 */
function pairToJson(p: ModlPair, result: any) {
  const key = stringEscapeReplacer.replace(p.key instanceof ModlQuoted ? unquote(p.key.value) : unquote(p.key));
  result[key] = toJson(p.value);
  return result;
}

/**
 * Maps to json
 * @param m
 * @param result
 * @returns to json
 */
function mapToJson(m: ModlMap, result: object): object {
  m.items.forEach((i) => {
    pairToJson(i, result);
  });
  return result;
}

/**
 * Arrays to json
 * @param a
 * @returns to json
 */
function arrayToJson(a: ModlArray): object {
  const result = new Array();
  a.items.forEach((x) => {
    if (x instanceof ModlArray) {
      result.push(arrayToJson(x));
    } else if (x instanceof ModlMap) {
      result.push(mapToJson(x, {}));
    } else if (x instanceof ModlPair) {
      result.push(pairToJson(x, {}));
    } else if (x instanceof ModlQuoted) {
      result.push(stringEscapeReplacer.replace(unquote(x.value)));
    } else if (x instanceof ModlNumber) {
      result.push(x.value);
    } else if (x instanceof ModlString) {
      result.push(stringEscapeReplacer.replace(unquote(x.value)));
    } else if (x === ModlBoolNull.ModlFalse) {
      result.push(false);
    } else if (x === ModlBoolNull.ModlTrue) {
      result.push(true);
    } else if (x === ModlBoolNull.ModlNull) {
      result.push(null);
    } else {
      result.push(x);
    }
  });
  return result;
}

function unquote(s: string): string {
  return (s.startsWith('`') && s.endsWith('`')) || (s.startsWith('"') && s.endsWith('"'))
    ? s.substring(1, s.length - 1)
    : s;
}
