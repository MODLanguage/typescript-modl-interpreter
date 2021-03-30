import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { ModlContext } from './MODLParser';
import { Modl_structureContext } from './MODLParser';
import { Modl_mapContext } from './MODLParser';
import { Modl_arrayContext } from './MODLParser';
import { Modl_pairContext } from './MODLParser';
import { Modl_valueContext } from './MODLParser';
import { Modl_primitiveContext } from './MODLParser';
export interface MODLParserVisitor<Result> extends ParseTreeVisitor<Result> {
    visitModl?: (ctx: ModlContext) => Result;
    visitModl_structure?: (ctx: Modl_structureContext) => Result;
    visitModl_map?: (ctx: Modl_mapContext) => Result;
    visitModl_array?: (ctx: Modl_arrayContext) => Result;
    visitModl_pair?: (ctx: Modl_pairContext) => Result;
    visitModl_value?: (ctx: Modl_valueContext) => Result;
    visitModl_primitive?: (ctx: Modl_primitiveContext) => Result;
}
