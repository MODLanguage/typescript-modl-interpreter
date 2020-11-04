import {
  Modl,
  ModlArray,
  ModlArrayValueItem,
  ModlBoolNull,
  ModlMap,
  ModlMapItem,
  ModlNbArray,
  ModlNumber,
  ModlPair,
  ModlPrimitive,
  ModlString,
  ModlStructure,
  ModlValue,
  ModlValueItem,
} from './Model';

export function visitModl(ctx: any): Modl {
  const structures = ctx.children.filter(nonTerminal).map(visitModl_structure);

  return new Modl(structures);
}

function nonTerminal(ctx): boolean {
  return ctx.__proto__.constructor.name !== 'TerminalNodeImpl';
}

// Visit a parse tree produced by MODLParser#modl_structure.
function visitModl_structure(ctx): ModlStructure {
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

// Visit a parse tree produced by MODLParser#modl_map.
function visitModl_map(ctx): ModlMap {
  const children = ctx.children.filter(nonTerminal).map(visitChild);

  return new ModlMap(children);
}

// Visit a parse tree produced by MODLParser#modl_array.
function visitModl_array(ctx): ModlArray {
  const children = ctx.children.filter(nonTerminal).map(visitChild);
  return new ModlArray(children);
}

// Visit a parse tree produced by MODLParser#modl_nb_array.
function visitModl_nb_array(ctx): ModlNbArray {
  const children = ctx.children.filter(nonTerminal).map(visitChild);
  return new ModlNbArray(children);
}

// Visit a parse tree produced by MODLParser#modl_pair.
function visitModl_pair(ctx): ModlPair {
  const key = ctx.children[0].getText();

  validateKey(key);

  const value =
    ctx.children[1].__proto__.constructor.name === 'TerminalNodeImpl'
      ? ctx.children[2]
      : ctx.children[1];

  const pairValue: ModlValueItem | ModlMap | ModlArray = visitChild(value);

  return new ModlPair(key, pairValue);
}

// Visit a parse tree produced by MODLParser#modl_value_item.
function visitModl_value_item(ctx): ModlValueItem {
  return visitChild(ctx.children[0]);
}

// Visit a parse tree produced by MODLParser#modl_value.
function visitModl_value(ctx): ModlValue {
  return visitChild(ctx.children[0]);
}

// Visit a parse tree produced by MODLParser#modl_array_value_item.
function visitModl_array_value_item(ctx): ModlArrayValueItem {
  return visitChild(ctx.children[0]) as ModlArrayValueItem;
}

// Visit a parse tree produced by MODLParser#modl_primitive.
function visitModl_primitive(ctx): ModlPrimitive {
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

function visitChild(child) {
  const childClassName = child.__proto__.constructor.name;

  switch (childClassName) {
    case 'Modl_structureContext':
      return visitModl_structure(child);
    case 'Modl_mapContext':
      return visitModl_map(child);
    case 'Modl_arrayContext':
      return visitModl_array(child);
    case 'Modl_nb_arrayContext':
      return visitModl_nb_array(child);
    case 'Modl_pairContext':
      return visitModl_pair(child);
    case 'Modl_value_itemContext':
      return visitModl_value_item(child);
    case 'Modl_valueContext':
      return visitModl_value(child);
    case 'Modl_array_value_itemContext':
      return visitModl_array_value_item(child);
    case 'Modl_primitiveContext':
      return visitModl_primitive(child);
    default:
      console.error(`Unknown object: ${childClassName}`);
      return new ModlString(`Unknown object: ${childClassName}`);
  }
}

function validateKey(k: string) {
  const key = k && k.startsWith('_') ? k.substr(1) : k;
  if (
    Number.parseInt(key, 10).toString() === key ||
    Number.parseFloat(key).toString() === key
  ) {
    throw new Error(
      `Interpreter Error: Invalid key - "${key}" - entirely numeric keys are not allowed: ${k}`
    );
  }

  if (key.includes('%')) {
    throw new Error(
      `Interpreter Error: Invalid key - spaces and % characters are not allowed: ${k}`
    );
  }
}
