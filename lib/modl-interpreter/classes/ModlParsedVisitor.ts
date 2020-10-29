import { Modl, ModlArray, ModlArrayValueItem, ModlMap, ModlMapItem, ModlNbArray, ModlPair, ModlPrimitive, ModlString, ModlStructure, ModlValue, ModlValueItem } from './Model';

export class ModlParsedVisitor {

  constructor() { }

  // Visit a parse tree produced by MODLParser#modl.
  visitModl(ctx) {
    const structures = ctx.children.filter(nonTerminal).map(visitModl_structure);

    return new Modl(structures);
  }

}

function nonTerminal(ctx): boolean {
  return (ctx.__proto__.constructor.name !== 'TerminalNodeImpl');
}

// Visit a parse tree produced by MODLParser#modl_structure.
function visitModl_structure(ctx): ModlStructure {
  const ctxClassName = ctx.__proto__.constructor.name;
  if (ctxClassName === 'Modl_mapContext') {
    return visitModl_map(ctx);
  } else if (ctxClassName === 'Modl_arrayContext') {
    return visitModl_array(ctx);
  } else if (ctxClassName === 'Modl_pairContext') {
    return visitModl_pair(ctx);
  } else if (ctxClassName === 'Modl_structureContext' && ctx.children.length === 1) {
    return visitModl_structure(ctx.children[0]);
  } else {
    console.error(`Unknown object: ${ctxClassName}`);
  }
  return new ModlMap(new Array<ModlMapItem>());
}


// Visit a parse tree produced by MODLParser#modl_map.
function visitModl_map(ctx): ModlMap {
  const ctxClassName = ctx.__proto__.constructor.name;
  return new ModlMap(new Array<ModlMapItem>());
}


// Visit a parse tree produced by MODLParser#modl_array.
function visitModl_array(ctx): ModlArray {
  const ctxClassName = ctx.__proto__.constructor.name;
  return new ModlArray(new Array<ModlPrimitive>());
}


// Visit a parse tree produced by MODLParser#modl_nb_array.
function visitModl_nb_array(ctx): ModlNbArray {
  const ctxClassName = ctx.__proto__.constructor.name;
  return new ModlNbArray(new Array<ModlPrimitive>());
}


// Visit a parse tree produced by MODLParser#modl_pair.
function visitModl_pair(ctx): ModlPair {
  const key = ctx.children[0].getText();

  var value;
  if (ctx.children[1].__proto__.constructor.name === 'TerminalNodeImpl') {
    value = ctx.children[2];
  } else {
    value = ctx.children[1];
  }

  var pairValue: ModlValueItem | ModlMap | ModlArray = visitChild(value);

  return new ModlPair(key, pairValue);
}


// Visit a parse tree produced by MODLParser#modl_value_item.
function visitModl_value_item(ctx): ModlValueItem {
  const ctxClassName = ctx.__proto__.constructor.name;
  return new ModlString('Dummy Modl_value_item');
}


// Visit a parse tree produced by MODLParser#modl_value.
function visitModl_value(ctx): ModlValue {
  const ctxClassName = ctx.__proto__.constructor.name;
  return new ModlString('Dummy Modl_value');
}


// Visit a parse tree produced by MODLParser#modl_array_value_item.
function visitModl_array_value_item(ctx): ModlArrayValueItem {
  const ctxClassName = ctx.__proto__.constructor.name;
  return new ModlString('Dummy Modl_array_value_item');
}


// Visit a parse tree produced by MODLParser#modl_primitive.
function visitModl_primitive(ctx): ModlPrimitive {
  const ctxClassName = ctx.__proto__.constructor.name;
  return new ModlString('Dummy Modl_primitive');
}

function visitChildren(ctx) {
  if (ctx) {
    return ctx.children.map(visitChild);
  }
}

function visitChild(child) {
  const childClassName = child.__proto__.constructor.name;
  if (child.__proto__.constructor.name === 'Modl_structureContext') {
    return visitModl_structure(child);
  } else if (child.__proto__.constructor.name === 'Modl_mapContext') {
    return visitModl_map(child);
  } else if (child.__proto__.constructor.name === 'Modl_arrayContext') {
    return visitModl_array(child);
  } else if (child.__proto__.constructor.name === 'Modl_nb_arrayContext') {
    return visitModl_nb_array(child);
  } else if (child.__proto__.constructor.name === 'Modl_pairContext') {
    return visitModl_pair(child);
  } else if (child.__proto__.constructor.name === 'Modl_value_itemContext') {
    return visitModl_value_item(child);
  } else if (child.__proto__.constructor.name === 'Modl_valueContext') {
    return visitModl_value(child);
  } else if (child.__proto__.constructor.name === 'Modl_array_value_itemContext') {
    return visitModl_array_value_item(child);
  } else if (childClassName === 'Modl_primitiveContext') {
    return visitModl_primitive(child);
  } else {
    console.error(`Unknown object: ${childClassName}`);
    return new ModlString(`Unknown object: ${childClassName}`);
  }
}
