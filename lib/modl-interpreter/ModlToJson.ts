import {
  Modl,
  ModlArray,
  ModlMap,
  ModlPair,
  ModlQuoted,
  ModlString,
  ModlValueItem,
  ModlNbArray,
  ModlNumber,
  ModlBoolNull,
} from './Model';

export const modlToJson = (modl: Modl): object => {
  if (modl.s.length === 1 && modl.s[0] instanceof ModlArray) {
    return arrayToJson(modl.s[0]);
  } else {
    const result = {};
    modl.s.forEach((structure) => {
      if (structure instanceof ModlPair) {
        pairToJson(structure, result);
      }
      if (structure instanceof ModlArray) {
        arrayToJson(structure);
      }
    });
    return result;
  }
};

const toJson = (x: ModlValueItem): any => {
  if (x instanceof ModlArray) {
    return arrayToJson(x);
  }
  if (x instanceof ModlMap) {
    return mapToJson(x);
  }
  if (x instanceof ModlPair) {
    return pairToJson(x, {});
  }
  if (x instanceof ModlNbArray) {
    return arrayToJson(x);
  }
  if (x instanceof ModlQuoted) {
    return x.value;
  }
  if (x instanceof ModlNumber) {
    return x.value;
  }
  if (x instanceof ModlString) {
    return x.value;
  }
  if (x === ModlBoolNull.ModlFalse) {
    return false;
  }
  if (x === ModlBoolNull.ModlTrue) {
    return true;
  }
  if (x === ModlBoolNull.ModlNull) {
    return undefined;
  }
  return x;
};

function pairToJson(p: ModlPair, result: object) {
  if (p.key instanceof ModlQuoted) {
    result[p.key.value] = toJson(p.value);
  } else {
    result[p.key] = toJson(p.value);
  }
  return result;
}

function mapToJson(m: ModlMap): object {
  const result = {};
  m.items.forEach((i) => {
    pairToJson(i, result);
  });
  return result;
}

function arrayToJson(a: ModlArray | ModlNbArray): object {
  const result = new Array();
  a.items.forEach((x) => {
    if (x instanceof ModlArray) {
      result.push(arrayToJson(x));
    } else if (x instanceof ModlMap) {
      result.push(mapToJson(x));
    } else if (x instanceof ModlPair) {
      result.push(pairToJson(x, {}));
    } else if (x instanceof ModlNbArray) {
      result.push(arrayToJson(x));
    } else if (x instanceof ModlQuoted) {
      result.push(x.value);
    } else if (x instanceof ModlNumber) {
      result.push(x.value);
    } else if (x instanceof ModlString) {
      result.push(x.value);
    } else if (x === ModlBoolNull.ModlFalse) {
      result.push(false);
    } else if (x === ModlBoolNull.ModlTrue) {
      result.push(true);
    } else if (x === ModlBoolNull.ModlNull) {
      result.push(undefined);
    } else {
      result.push(x);
    }
  });
  return result;
}
