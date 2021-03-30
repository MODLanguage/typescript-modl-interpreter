import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ModlContext } from './MODLParser';
import { Modl_structureContext } from './MODLParser';
import { Modl_mapContext } from './MODLParser';
import { Modl_arrayContext } from './MODLParser';
import { Modl_pairContext } from './MODLParser';
import { Modl_valueContext } from './MODLParser';
import { Modl_primitiveContext } from './MODLParser';
export interface MODLParserListener extends ParseTreeListener {
    enterModl?: (ctx: ModlContext) => void;
    exitModl?: (ctx: ModlContext) => void;
    enterModl_structure?: (ctx: Modl_structureContext) => void;
    exitModl_structure?: (ctx: Modl_structureContext) => void;
    enterModl_map?: (ctx: Modl_mapContext) => void;
    exitModl_map?: (ctx: Modl_mapContext) => void;
    enterModl_array?: (ctx: Modl_arrayContext) => void;
    exitModl_array?: (ctx: Modl_arrayContext) => void;
    enterModl_pair?: (ctx: Modl_pairContext) => void;
    exitModl_pair?: (ctx: Modl_pairContext) => void;
    enterModl_value?: (ctx: Modl_valueContext) => void;
    exitModl_value?: (ctx: Modl_valueContext) => void;
    enterModl_primitive?: (ctx: Modl_primitiveContext) => void;
    exitModl_primitive?: (ctx: Modl_primitiveContext) => void;
}
