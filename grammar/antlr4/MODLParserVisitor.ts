// Generated from ../grammar/antlr4/MODLParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { ModlContext } from './MODLParser';
import { Modl_structureContext } from './MODLParser';
import { Modl_mapContext } from './MODLParser';
import { Modl_arrayContext } from './MODLParser';
import { Modl_pairContext } from './MODLParser';
import { Modl_valueContext } from './MODLParser';
import { Modl_primitiveContext } from './MODLParser';

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MODLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MODLParserVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `MODLParser.modl`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModl?: (ctx: ModlContext) => Result;

  /**
   * Visit a parse tree produced by `MODLParser.modl_structure`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModl_structure?: (ctx: Modl_structureContext) => Result;

  /**
   * Visit a parse tree produced by `MODLParser.modl_map`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModl_map?: (ctx: Modl_mapContext) => Result;

  /**
   * Visit a parse tree produced by `MODLParser.modl_array`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModl_array?: (ctx: Modl_arrayContext) => Result;

  /**
   * Visit a parse tree produced by `MODLParser.modl_pair`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModl_pair?: (ctx: Modl_pairContext) => Result;

  /**
   * Visit a parse tree produced by `MODLParser.modl_value`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModl_value?: (ctx: Modl_valueContext) => Result;

  /**
   * Visit a parse tree produced by `MODLParser.modl_primitive`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModl_primitive?: (ctx: Modl_primitiveContext) => Result;
}
