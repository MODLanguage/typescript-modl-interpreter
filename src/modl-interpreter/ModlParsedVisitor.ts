import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import {
  ModlContext,
  Modl_arrayContext,
  Modl_mapContext,
  Modl_pairContext,
  Modl_primitiveContext,
  Modl_valueContext,
} from '../grammar/antlr4/MODLParser';
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
export function visitModl(ctx: ModlContext): Modl {
  // Check for a single primitive value at the root.
  const children = ctx.children?.filter(nonTerminal) as any[];
  if (children.length === 1 && children[0].__proto__.constructor.name === 'Modl_primitiveContext') {
    return new Modl(visitModl_primitive(children[0]));
  }

  // No primitive so it must be a list of structures
  const structures = children.map(visitModl_structure);
  if (structures) {
    return new Modl(structures as Array<ModlStructure>);
  }
  return new Modl(new Array<ModlStructure>());
}

/**
 * Non terminal
 * @param ctx
 * @returns true if terminal
 */
function nonTerminal(ctx: any): boolean {
  return ctx.__proto__.constructor.name !== 'TerminalNode';
}

/**
 * Visits modl structure
 * @param ctx
 * @returns modl structure
 */
function visitModl_structure(ctx: any): ModlStructure | undefined {
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
function visitModl_map(ctx: Modl_mapContext): ModlMap | undefined {
  const children = ctx.children?.filter(nonTerminal).map(visitChild);

  if (children) {
    return new ModlMap(children as ModlPair[]);
  }
  return;
}

/**
 * Visits modl array
 * @param ctx
 * @returns modl array
 */
function visitModl_array(ctx: Modl_arrayContext): ModlArray | undefined {
  const children = ctx.children?.filter(nonTerminal).map(visitChild);
  if (children) {
    return new ModlArray(children as ModlValue[]);
  }
  return;
}

/**
 * Visits modl pair
 * @param ctx
 * @returns modl pair
 */
function visitModl_pair(ctx: Modl_pairContext): ModlPair | undefined {
  if (!ctx.children) {
    return;
  }
  const key = ctx.children[0].text;

  validateKey(key);

  const value = ctx.children[1] instanceof TerminalNode ? ctx.children[2] : ctx.children[1];

  const pairValue: ModlValue = visitChild(value) as ModlValue;

  return new ModlPair(key, pairValue);
}

/**
 * Visits modl value
 * @param ctx
 * @returns modl value
 */
function visitModl_value(ctx: Modl_valueContext): ModlValue | undefined {
  const children = ctx.children;
  if (children) {
    return visitChild(children[0]);
  }
  return;
}

/**
 * Visits modl primitive
 * @param ctx
 * @returns modl primitive
 */
function visitModl_primitive(ctx: Modl_primitiveContext): ModlPrimitive {
  const text = ctx.text;

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
