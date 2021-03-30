// Generated from ../grammar/antlr4/MODLParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { ModlContext } from './MODLParser';
import { Modl_structureContext } from './MODLParser';
import { Modl_mapContext } from './MODLParser';
import { Modl_arrayContext } from './MODLParser';
import { Modl_pairContext } from './MODLParser';
import { Modl_valueContext } from './MODLParser';
import { Modl_primitiveContext } from './MODLParser';

/**
 * This interface defines a complete listener for a parse tree produced by
 * `MODLParser`.
 */
export interface MODLParserListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `MODLParser.modl`.
   * @param ctx the parse tree
   */
  enterModl?: (ctx: ModlContext) => void;
  /**
   * Exit a parse tree produced by `MODLParser.modl`.
   * @param ctx the parse tree
   */
  exitModl?: (ctx: ModlContext) => void;

  /**
   * Enter a parse tree produced by `MODLParser.modl_structure`.
   * @param ctx the parse tree
   */
  enterModl_structure?: (ctx: Modl_structureContext) => void;
  /**
   * Exit a parse tree produced by `MODLParser.modl_structure`.
   * @param ctx the parse tree
   */
  exitModl_structure?: (ctx: Modl_structureContext) => void;

  /**
   * Enter a parse tree produced by `MODLParser.modl_map`.
   * @param ctx the parse tree
   */
  enterModl_map?: (ctx: Modl_mapContext) => void;
  /**
   * Exit a parse tree produced by `MODLParser.modl_map`.
   * @param ctx the parse tree
   */
  exitModl_map?: (ctx: Modl_mapContext) => void;

  /**
   * Enter a parse tree produced by `MODLParser.modl_array`.
   * @param ctx the parse tree
   */
  enterModl_array?: (ctx: Modl_arrayContext) => void;
  /**
   * Exit a parse tree produced by `MODLParser.modl_array`.
   * @param ctx the parse tree
   */
  exitModl_array?: (ctx: Modl_arrayContext) => void;

  /**
   * Enter a parse tree produced by `MODLParser.modl_pair`.
   * @param ctx the parse tree
   */
  enterModl_pair?: (ctx: Modl_pairContext) => void;
  /**
   * Exit a parse tree produced by `MODLParser.modl_pair`.
   * @param ctx the parse tree
   */
  exitModl_pair?: (ctx: Modl_pairContext) => void;

  /**
   * Enter a parse tree produced by `MODLParser.modl_value`.
   * @param ctx the parse tree
   */
  enterModl_value?: (ctx: Modl_valueContext) => void;
  /**
   * Exit a parse tree produced by `MODLParser.modl_value`.
   * @param ctx the parse tree
   */
  exitModl_value?: (ctx: Modl_valueContext) => void;

  /**
   * Enter a parse tree produced by `MODLParser.modl_primitive`.
   * @param ctx the parse tree
   */
  enterModl_primitive?: (ctx: Modl_primitiveContext) => void;
  /**
   * Exit a parse tree produced by `MODLParser.modl_primitive`.
   * @param ctx the parse tree
   */
  exitModl_primitive?: (ctx: Modl_primitiveContext) => void;
}
