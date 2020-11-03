import {
  Modl,
  ModlArray,
  ModlArrayValueItem,
  ModlMap,
  ModlMapItem,
  ModlNbArray,
  ModlPair,
  ModlPrimitive,
  ModlString,
  ModlStructure,
  ModlValue,
  ModlValueItem,
} from './Model';

export class ModlParsedVisitor {
  // Visit a parse tree produced by MODLParser#modl.
  visitModl(ctx) {
    const structures = ctx.children
      .filter(nonTerminal)
      .map(visitModl_structure);

    return new Modl(structures);
  }
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
  return new ModlString(ctx.getText());
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
