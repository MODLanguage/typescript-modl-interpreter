import {
  Modl,
  ModlArray,
  ModlBoolNull,
  ModlMap,
  ModlMapItem,
  ModlNumber,
  ModlPair,
  ModlPrimitive,
  ModlString,
  ModlStructure,
  ModlValue,
} from './Model';

/**
 * Visits modl
 * @param ctx
 * @returns modl
 */
export function visitModl(ctx: any): Modl {
  const structures = ctx.children.filter(nonTerminal).map(visitModl_structure);

  return new Modl(structures);
}

/**
 * Nons terminal
 * @param ctx
 * @returns true if terminal
 */
function nonTerminal(ctx: any): boolean {
  return ctx.__proto__.constructor.name !== 'TerminalNodeImpl';
}

/**
 * Visits modl structure
 * @param ctx
 * @returns modl structure
 */
function visitModl_structure(ctx: any): ModlStructure {
  const ctxClassName = ctx.__proto__.constructor.name;

  switch (ctxClassName) {
    case 'Modl_mapContext':
      return visitModl_map(ctx);
    case 'Modl_arrayContext':
      return visitModl_array(ctx);
    case 'Modl_pairContext':
      return visitModl_pair(ctx);
    case 'Modl_structureContext':
      if (ctx.children.length === 1) {
        return visitModl_structure(ctx.children[0]);
      }
      break;
    default: // fall through
  }
  return new ModlMap(new Array<ModlMapItem>());
}

/**
 * Visits modl map
 * @param ctx
 * @returns modl map
 */
function visitModl_map(ctx: any): ModlMap {
  const children = ctx.children.filter(nonTerminal).map(visitChild);

  return new ModlMap(children);
}

/**
 * Visits modl array
 * @param ctx
 * @returns modl array
 */
function visitModl_array(ctx: any): ModlArray {
  const children = ctx.children.filter(nonTerminal).map(visitChild);
  return new ModlArray(children);
}

/**
 * Visits modl pair
 * @param ctx
 * @returns modl pair
 */
function visitModl_pair(ctx: any): ModlPair {
  const key = ctx.children[0].getText();

  validateKey(key);

  const value = ctx.children[1].__proto__.constructor.name === 'TerminalNodeImpl' ? ctx.children[2] : ctx.children[1];

  const pairValue: ModlValue = visitChild(value);

  return new ModlPair(key, pairValue);
}

/**
 * Visits modl value
 * @param ctx
 * @returns modl value
 */
function visitModl_value(ctx: any): ModlValue {
  return visitChild(ctx.children[0]);
}

/**
 * Visits modl primitive
 * @param ctx
 * @returns modl primitive
 */
function visitModl_primitive(ctx: any): ModlPrimitive {
  const text = ctx.getText();
  if (!text || text === 'null' || text === '000') {
    return ModlBoolNull.ModlNull;
  }
  if (text === 'false' || text === '00') {
    return ModlBoolNull.ModlFalse;
  }
  if (text === 'true' || text === '01') {
    return ModlBoolNull.ModlTrue;
  }
  const intValue = Number.parseInt(text, 10);
  if (intValue.toString() === text) {
    return new ModlNumber(intValue);
  }
  const floatValue = Number.parseFloat(text);
  if (floatValue.toString() === text) {
    return new ModlNumber(floatValue);
  }
  return new ModlString(text);
}

/**
 * Visits child
 * @param child
 * @returns
 */
function visitChild(child: any) {
  const childClassName = child.__proto__.constructor.name;

  switch (childClassName) {
    case 'Modl_structureContext':
      return visitModl_structure(child);
    case 'Modl_mapContext':
      return visitModl_map(child);
    case 'Modl_arrayContext':
      return visitModl_array(child);
    case 'Modl_pairContext':
      return visitModl_pair(child);
    case 'Modl_valueContext':
      return visitModl_value(child);
    case 'Modl_primitiveContext':
      return visitModl_primitive(child);
    default:
      console.error(`Unknown object: ${childClassName}`);
      return new ModlString(`Unknown object: ${childClassName}`);
  }
}

/**
 * Validates key
 * @param k
 */
function validateKey(k: string) {
  if (k.includes('%')) {
    throw new Error(`Interpreter Error: Invalid key - spaces and % characters are not allowed: ${k}`);
  }
}
