import { ATN } from 'antlr4ts/atn/ATN';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { MODLParserListener } from './MODLParserListener';
import { MODLParserVisitor } from './MODLParserVisitor';
export declare class MODLParser extends Parser {
    static readonly WS = 1;
    static readonly NULL = 2;
    static readonly TRUE = 3;
    static readonly FALSE = 4;
    static readonly EQUALS = 5;
    static readonly STRUCT_SEP = 6;
    static readonly ARR_SEP = 7;
    static readonly LBRAC = 8;
    static readonly RBRAC = 9;
    static readonly LSBRAC = 10;
    static readonly RSBRAC = 11;
    static readonly NUMBER = 12;
    static readonly QUOTED = 13;
    static readonly STRING = 14;
    static readonly RULE_modl = 0;
    static readonly RULE_modl_structure = 1;
    static readonly RULE_modl_map = 2;
    static readonly RULE_modl_array = 3;
    static readonly RULE_modl_pair = 4;
    static readonly RULE_modl_value = 5;
    static readonly RULE_modl_primitive = 6;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    modl(): ModlContext;
    modl_structure(): Modl_structureContext;
    modl_map(): Modl_mapContext;
    modl_array(): Modl_arrayContext;
    modl_pair(): Modl_pairContext;
    modl_value(): Modl_valueContext;
    modl_primitive(): Modl_primitiveContext;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class ModlContext extends ParserRuleContext {
    EOF(): TerminalNode;
    modl_primitive(): Modl_primitiveContext | undefined;
    modl_structure(): Modl_structureContext[];
    modl_structure(i: number): Modl_structureContext;
    STRUCT_SEP(): TerminalNode[];
    STRUCT_SEP(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MODLParserListener): void;
    exitRule(listener: MODLParserListener): void;
    accept<Result>(visitor: MODLParserVisitor<Result>): Result;
}
export declare class Modl_structureContext extends ParserRuleContext {
    modl_map(): Modl_mapContext | undefined;
    modl_array(): Modl_arrayContext | undefined;
    modl_pair(): Modl_pairContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MODLParserListener): void;
    exitRule(listener: MODLParserListener): void;
    accept<Result>(visitor: MODLParserVisitor<Result>): Result;
}
export declare class Modl_mapContext extends ParserRuleContext {
    LBRAC(): TerminalNode;
    RBRAC(): TerminalNode;
    modl_pair(): Modl_pairContext[];
    modl_pair(i: number): Modl_pairContext;
    STRUCT_SEP(): TerminalNode[];
    STRUCT_SEP(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MODLParserListener): void;
    exitRule(listener: MODLParserListener): void;
    accept<Result>(visitor: MODLParserVisitor<Result>): Result;
}
export declare class Modl_arrayContext extends ParserRuleContext {
    LSBRAC(): TerminalNode;
    RSBRAC(): TerminalNode;
    modl_value(): Modl_valueContext[];
    modl_value(i: number): Modl_valueContext;
    STRUCT_SEP(): TerminalNode[];
    STRUCT_SEP(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MODLParserListener): void;
    exitRule(listener: MODLParserListener): void;
    accept<Result>(visitor: MODLParserVisitor<Result>): Result;
}
export declare class Modl_pairContext extends ParserRuleContext {
    EQUALS(): TerminalNode | undefined;
    modl_value(): Modl_valueContext | undefined;
    STRING(): TerminalNode | undefined;
    QUOTED(): TerminalNode | undefined;
    modl_map(): Modl_mapContext | undefined;
    modl_array(): Modl_arrayContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MODLParserListener): void;
    exitRule(listener: MODLParserListener): void;
    accept<Result>(visitor: MODLParserVisitor<Result>): Result;
}
export declare class Modl_valueContext extends ParserRuleContext {
    modl_map(): Modl_mapContext | undefined;
    modl_array(): Modl_arrayContext | undefined;
    modl_pair(): Modl_pairContext | undefined;
    modl_primitive(): Modl_primitiveContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MODLParserListener): void;
    exitRule(listener: MODLParserListener): void;
    accept<Result>(visitor: MODLParserVisitor<Result>): Result;
}
export declare class Modl_primitiveContext extends ParserRuleContext {
    QUOTED(): TerminalNode | undefined;
    NUMBER(): TerminalNode | undefined;
    STRING(): TerminalNode | undefined;
    TRUE(): TerminalNode | undefined;
    FALSE(): TerminalNode | undefined;
    NULL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MODLParserListener): void;
    exitRule(listener: MODLParserListener): void;
    accept<Result>(visitor: MODLParserVisitor<Result>): Result;
}
