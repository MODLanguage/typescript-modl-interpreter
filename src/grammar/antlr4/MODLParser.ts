// Generated from ../grammar/antlr4/MODLParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { MODLParserListener } from './MODLParserListener';
import { MODLParserVisitor } from './MODLParserVisitor';

export class MODLParser extends Parser {
  public static readonly WS = 1;
  public static readonly NULL = 2;
  public static readonly TRUE = 3;
  public static readonly FALSE = 4;
  public static readonly EQUALS = 5;
  public static readonly STRUCT_SEP = 6;
  public static readonly ARR_SEP = 7;
  public static readonly LBRAC = 8;
  public static readonly RBRAC = 9;
  public static readonly LSBRAC = 10;
  public static readonly RSBRAC = 11;
  public static readonly NUMBER = 12;
  public static readonly QUOTED = 13;
  public static readonly STRING = 14;
  public static readonly RULE_modl = 0;
  public static readonly RULE_modl_structure = 1;
  public static readonly RULE_modl_map = 2;
  public static readonly RULE_modl_array = 3;
  public static readonly RULE_modl_pair = 4;
  public static readonly RULE_modl_value = 5;
  public static readonly RULE_modl_primitive = 6;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'modl',
    'modl_structure',
    'modl_map',
    'modl_array',
    'modl_pair',
    'modl_value',
    'modl_primitive',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "'='",
    "';'",
    "','",
    "'('",
    "')'",
    "'['",
    "']'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'WS',
    'NULL',
    'TRUE',
    'FALSE',
    'EQUALS',
    'STRUCT_SEP',
    'ARR_SEP',
    'LBRAC',
    'RBRAC',
    'LSBRAC',
    'RSBRAC',
    'NUMBER',
    'QUOTED',
    'STRING',
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    MODLParser._LITERAL_NAMES,
    MODLParser._SYMBOLIC_NAMES,
    []
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return MODLParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'MODLParser.g4';
  }

  // @Override
  public get ruleNames(): string[] {
    return MODLParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return MODLParser._serializedATN;
  }

  protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(MODLParser._ATN, this);
  }
  // @RuleVersion(0)
  public modl(): ModlContext {
    const _localctx: ModlContext = new ModlContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, MODLParser.RULE_modl);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 26;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
          case 1:
            {
              {
                {
                  this.state = 14;
                  this.modl_structure();
                  this.state = 19;
                  this._errHandler.sync(this);
                  _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                  while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                      {
                        {
                          this.state = 15;
                          this.match(MODLParser.STRUCT_SEP);
                          this.state = 16;
                          this.modl_structure();
                        }
                      }
                    }
                    this.state = 21;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                  }
                }
                this.state = 23;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === MODLParser.STRUCT_SEP) {
                  {
                    this.state = 22;
                    this.match(MODLParser.STRUCT_SEP);
                  }
                }
              }
            }
            break;

          case 2: {
            this.state = 25;
            this.modl_primitive();
          }
        }
        this.state = 28;
        this.match(MODLParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public modl_structure(): Modl_structureContext {
    const _localctx: Modl_structureContext = new Modl_structureContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, MODLParser.RULE_modl_structure);
    try {
      this.state = 33;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case MODLParser.LBRAC:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 30;
            this.modl_map();
          }
          break;
        case MODLParser.LSBRAC:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 31;
            this.modl_array();
          }
          break;
        case MODLParser.QUOTED:
        case MODLParser.STRING:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 32;
            this.modl_pair();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public modl_map(): Modl_mapContext {
    const _localctx: Modl_mapContext = new Modl_mapContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, MODLParser.RULE_modl_map);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 35;
        this.match(MODLParser.LBRAC);
        this.state = 44;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === MODLParser.QUOTED || _la === MODLParser.STRING) {
          {
            this.state = 36;
            this.modl_pair();
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === MODLParser.STRUCT_SEP) {
              {
                {
                  this.state = 37;
                  this.match(MODLParser.STRUCT_SEP);
                  this.state = 38;
                  this.modl_pair();
                }
              }
              this.state = 43;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }

        this.state = 46;
        this.match(MODLParser.RBRAC);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public modl_array(): Modl_arrayContext {
    const _localctx: Modl_arrayContext = new Modl_arrayContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, MODLParser.RULE_modl_array);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 48;
        this.match(MODLParser.LSBRAC);
        this.state = 57;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (_la & ~0x1F) === 0 &&
          ((1 << _la) &
            ((1 << MODLParser.NULL) |
              (1 << MODLParser.TRUE) |
              (1 << MODLParser.FALSE) |
              (1 << MODLParser.LBRAC) |
              (1 << MODLParser.LSBRAC) |
              (1 << MODLParser.NUMBER) |
              (1 << MODLParser.QUOTED) |
              (1 << MODLParser.STRING))) !==
            0
        ) {
          {
            this.state = 49;
            this.modl_value();
            this.state = 54;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === MODLParser.STRUCT_SEP) {
              {
                {
                  this.state = 50;
                  this.match(MODLParser.STRUCT_SEP);
                  this.state = 51;
                  this.modl_value();
                }
              }
              this.state = 56;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }

        this.state = 59;
        this.match(MODLParser.RSBRAC);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public modl_pair(): Modl_pairContext {
    const _localctx: Modl_pairContext = new Modl_pairContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, MODLParser.RULE_modl_pair);
    let _la: number;
    try {
      this.state = 68;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 61;
            _la = this._input.LA(1);
            if (!(_la === MODLParser.QUOTED || _la === MODLParser.STRING)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 62;
            this.match(MODLParser.EQUALS);
            this.state = 63;
            this.modl_value();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 64;
            this.match(MODLParser.STRING);
            this.state = 65;
            this.modl_map();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 66;
            this.match(MODLParser.STRING);
            this.state = 67;
            this.modl_array();
          }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public modl_value(): Modl_valueContext {
    const _localctx: Modl_valueContext = new Modl_valueContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, MODLParser.RULE_modl_value);
    try {
      this.state = 74;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 70;
            this.modl_map();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 71;
            this.modl_array();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 72;
            this.modl_pair();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 73;
            this.modl_primitive();
          }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public modl_primitive(): Modl_primitiveContext {
    const _localctx: Modl_primitiveContext = new Modl_primitiveContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, MODLParser.RULE_modl_primitive);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 76;
        _la = this._input.LA(1);
        if (
          !(
            (_la & ~0x1F) === 0 &&
            ((1 << _la) &
              ((1 << MODLParser.NULL) |
                (1 << MODLParser.TRUE) |
                (1 << MODLParser.FALSE) |
                (1 << MODLParser.NUMBER) |
                (1 << MODLParser.QUOTED) |
                (1 << MODLParser.STRING))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10Q\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x03\x02\x03\x02\x03\x02\x07\x02\x14\n\x02\f\x02\x0E\x02' +
    '\x17\v\x02\x03\x02\x05\x02\x1A\n\x02\x03\x02\x05\x02\x1D\n\x02\x03\x02' +
    '\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03$\n\x03\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x07\x04*\n\x04\f\x04\x0E\x04-\v\x04\x05\x04/\n\x04\x03\x04\x03' +
    '\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x057\n\x05\f\x05\x0E\x05:\v\x05' +
    '\x05\x05<\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06' +
    '\x03\x06\x03\x06\x05\x06G\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07' +
    'M\n\x07\x03\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04\x02\x06\x02\b\x02' +
    '\n\x02\f\x02\x0E\x02\x02\x04\x03\x02\x0F\x10\x04\x02\x04\x06\x0E\x10\x02' +
    'W\x02\x1C\x03\x02\x02\x02\x04#\x03\x02\x02\x02\x06%\x03\x02\x02\x02\b' +
    '2\x03\x02\x02\x02\nF\x03\x02\x02\x02\fL\x03\x02\x02\x02\x0EN\x03\x02\x02' +
    '\x02\x10\x15\x05\x04\x03\x02\x11\x12\x07\b\x02\x02\x12\x14\x05\x04\x03' +
    '\x02\x13\x11\x03\x02\x02\x02\x14\x17\x03\x02\x02\x02\x15\x13\x03\x02\x02' +
    '\x02\x15\x16\x03\x02\x02\x02\x16\x19\x03\x02\x02\x02\x17\x15\x03\x02\x02' +
    '\x02\x18\x1A\x07\b\x02\x02\x19\x18\x03\x02\x02\x02\x19\x1A\x03\x02\x02' +
    '\x02\x1A\x1D\x03\x02\x02\x02\x1B\x1D\x05\x0E\b\x02\x1C\x10\x03\x02\x02' +
    '\x02\x1C\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x1F\x07\x02\x02' +
    '\x03\x1F\x03\x03\x02\x02\x02 $\x05\x06\x04\x02!$\x05\b\x05\x02"$\x05' +
    '\n\x06\x02# \x03\x02\x02\x02#!\x03\x02\x02\x02#"\x03\x02\x02\x02$\x05' +
    "\x03\x02\x02\x02%.\x07\n\x02\x02&+\x05\n\x06\x02'(\x07\b\x02\x02(*\x05" +
    "\n\x06\x02)'\x03\x02\x02\x02*-\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03" +
    '\x02\x02\x02,/\x03\x02\x02\x02-+\x03\x02\x02\x02.&\x03\x02\x02\x02./\x03' +
    '\x02\x02\x02/0\x03\x02\x02\x0201\x07\v\x02\x021\x07\x03\x02\x02\x022;' +
    '\x07\f\x02\x0238\x05\f\x07\x0245\x07\b\x02\x0257\x05\f\x07\x0264\x03\x02' +
    '\x02\x027:\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02\x029<\x03\x02' +
    '\x02\x02:8\x03\x02\x02\x02;3\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x03\x02' +
    '\x02\x02=>\x07\r\x02\x02>\t\x03\x02\x02\x02?@\t\x02\x02\x02@A\x07\x07' +
    '\x02\x02AG\x05\f\x07\x02BC\x07\x10\x02\x02CG\x05\x06\x04\x02DE\x07\x10' +
    '\x02\x02EG\x05\b\x05\x02F?\x03\x02\x02\x02FB\x03\x02\x02\x02FD\x03\x02' +
    '\x02\x02G\v\x03\x02\x02\x02HM\x05\x06\x04\x02IM\x05\b\x05\x02JM\x05\n' +
    '\x06\x02KM\x05\x0E\b\x02LH\x03\x02\x02\x02LI\x03\x02\x02\x02LJ\x03\x02' +
    '\x02\x02LK\x03\x02\x02\x02M\r\x03\x02\x02\x02NO\t\x03\x02\x02O\x0F\x03' +
    '\x02\x02\x02\f\x15\x19\x1C#+.8;FL';
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!MODLParser.__ATN) {
      MODLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MODLParser._serializedATN));
    }

    return MODLParser.__ATN;
  }
}

export class ModlContext extends ParserRuleContext {
  public EOF(): TerminalNode {
    return this.getToken(MODLParser.EOF, 0);
  }
  public modl_primitive(): Modl_primitiveContext | undefined {
    return this.tryGetRuleContext(0, Modl_primitiveContext);
  }
  public modl_structure(): Modl_structureContext[];
  public modl_structure(i: number): Modl_structureContext;
  public modl_structure(i?: number): Modl_structureContext | Modl_structureContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Modl_structureContext);
    } else {
      return this.getRuleContext(i, Modl_structureContext);
    }
  }
  public STRUCT_SEP(): TerminalNode[];
  public STRUCT_SEP(i: number): TerminalNode;
  public STRUCT_SEP(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(MODLParser.STRUCT_SEP);
    } else {
      return this.getToken(MODLParser.STRUCT_SEP, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return MODLParser.RULE_modl;
  }
  // @Override
  public enterRule(listener: MODLParserListener): void {
    if (listener.enterModl) {
      listener.enterModl(this);
    }
  }
  // @Override
  public exitRule(listener: MODLParserListener): void {
    if (listener.exitModl) {
      listener.exitModl(this);
    }
  }
  // @Override
  public accept<Result>(visitor: MODLParserVisitor<Result>): Result {
    if (visitor.visitModl) {
      return visitor.visitModl(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Modl_structureContext extends ParserRuleContext {
  public modl_map(): Modl_mapContext | undefined {
    return this.tryGetRuleContext(0, Modl_mapContext);
  }
  public modl_array(): Modl_arrayContext | undefined {
    return this.tryGetRuleContext(0, Modl_arrayContext);
  }
  public modl_pair(): Modl_pairContext | undefined {
    return this.tryGetRuleContext(0, Modl_pairContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return MODLParser.RULE_modl_structure;
  }
  // @Override
  public enterRule(listener: MODLParserListener): void {
    if (listener.enterModl_structure) {
      listener.enterModl_structure(this);
    }
  }
  // @Override
  public exitRule(listener: MODLParserListener): void {
    if (listener.exitModl_structure) {
      listener.exitModl_structure(this);
    }
  }
  // @Override
  public accept<Result>(visitor: MODLParserVisitor<Result>): Result {
    if (visitor.visitModl_structure) {
      return visitor.visitModl_structure(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Modl_mapContext extends ParserRuleContext {
  public LBRAC(): TerminalNode {
    return this.getToken(MODLParser.LBRAC, 0);
  }
  public RBRAC(): TerminalNode {
    return this.getToken(MODLParser.RBRAC, 0);
  }
  public modl_pair(): Modl_pairContext[];
  public modl_pair(i: number): Modl_pairContext;
  public modl_pair(i?: number): Modl_pairContext | Modl_pairContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Modl_pairContext);
    } else {
      return this.getRuleContext(i, Modl_pairContext);
    }
  }
  public STRUCT_SEP(): TerminalNode[];
  public STRUCT_SEP(i: number): TerminalNode;
  public STRUCT_SEP(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(MODLParser.STRUCT_SEP);
    } else {
      return this.getToken(MODLParser.STRUCT_SEP, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return MODLParser.RULE_modl_map;
  }
  // @Override
  public enterRule(listener: MODLParserListener): void {
    if (listener.enterModl_map) {
      listener.enterModl_map(this);
    }
  }
  // @Override
  public exitRule(listener: MODLParserListener): void {
    if (listener.exitModl_map) {
      listener.exitModl_map(this);
    }
  }
  // @Override
  public accept<Result>(visitor: MODLParserVisitor<Result>): Result {
    if (visitor.visitModl_map) {
      return visitor.visitModl_map(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Modl_arrayContext extends ParserRuleContext {
  public LSBRAC(): TerminalNode {
    return this.getToken(MODLParser.LSBRAC, 0);
  }
  public RSBRAC(): TerminalNode {
    return this.getToken(MODLParser.RSBRAC, 0);
  }
  public modl_value(): Modl_valueContext[];
  public modl_value(i: number): Modl_valueContext;
  public modl_value(i?: number): Modl_valueContext | Modl_valueContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Modl_valueContext);
    } else {
      return this.getRuleContext(i, Modl_valueContext);
    }
  }
  public STRUCT_SEP(): TerminalNode[];
  public STRUCT_SEP(i: number): TerminalNode;
  public STRUCT_SEP(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(MODLParser.STRUCT_SEP);
    } else {
      return this.getToken(MODLParser.STRUCT_SEP, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return MODLParser.RULE_modl_array;
  }
  // @Override
  public enterRule(listener: MODLParserListener): void {
    if (listener.enterModl_array) {
      listener.enterModl_array(this);
    }
  }
  // @Override
  public exitRule(listener: MODLParserListener): void {
    if (listener.exitModl_array) {
      listener.exitModl_array(this);
    }
  }
  // @Override
  public accept<Result>(visitor: MODLParserVisitor<Result>): Result {
    if (visitor.visitModl_array) {
      return visitor.visitModl_array(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Modl_pairContext extends ParserRuleContext {
  public EQUALS(): TerminalNode | undefined {
    return this.tryGetToken(MODLParser.EQUALS, 0);
  }
  public modl_value(): Modl_valueContext | undefined {
    return this.tryGetRuleContext(0, Modl_valueContext);
  }
  public STRING(): TerminalNode | undefined {
    return this.tryGetToken(MODLParser.STRING, 0);
  }
  public QUOTED(): TerminalNode | undefined {
    return this.tryGetToken(MODLParser.QUOTED, 0);
  }
  public modl_map(): Modl_mapContext | undefined {
    return this.tryGetRuleContext(0, Modl_mapContext);
  }
  public modl_array(): Modl_arrayContext | undefined {
    return this.tryGetRuleContext(0, Modl_arrayContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return MODLParser.RULE_modl_pair;
  }
  // @Override
  public enterRule(listener: MODLParserListener): void {
    if (listener.enterModl_pair) {
      listener.enterModl_pair(this);
    }
  }
  // @Override
  public exitRule(listener: MODLParserListener): void {
    if (listener.exitModl_pair) {
      listener.exitModl_pair(this);
    }
  }
  // @Override
  public accept<Result>(visitor: MODLParserVisitor<Result>): Result {
    if (visitor.visitModl_pair) {
      return visitor.visitModl_pair(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Modl_valueContext extends ParserRuleContext {
  public modl_map(): Modl_mapContext | undefined {
    return this.tryGetRuleContext(0, Modl_mapContext);
  }
  public modl_array(): Modl_arrayContext | undefined {
    return this.tryGetRuleContext(0, Modl_arrayContext);
  }
  public modl_pair(): Modl_pairContext | undefined {
    return this.tryGetRuleContext(0, Modl_pairContext);
  }
  public modl_primitive(): Modl_primitiveContext | undefined {
    return this.tryGetRuleContext(0, Modl_primitiveContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return MODLParser.RULE_modl_value;
  }
  // @Override
  public enterRule(listener: MODLParserListener): void {
    if (listener.enterModl_value) {
      listener.enterModl_value(this);
    }
  }
  // @Override
  public exitRule(listener: MODLParserListener): void {
    if (listener.exitModl_value) {
      listener.exitModl_value(this);
    }
  }
  // @Override
  public accept<Result>(visitor: MODLParserVisitor<Result>): Result {
    if (visitor.visitModl_value) {
      return visitor.visitModl_value(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class Modl_primitiveContext extends ParserRuleContext {
  public QUOTED(): TerminalNode | undefined {
    return this.tryGetToken(MODLParser.QUOTED, 0);
  }
  public NUMBER(): TerminalNode | undefined {
    return this.tryGetToken(MODLParser.NUMBER, 0);
  }
  public STRING(): TerminalNode | undefined {
    return this.tryGetToken(MODLParser.STRING, 0);
  }
  public TRUE(): TerminalNode | undefined {
    return this.tryGetToken(MODLParser.TRUE, 0);
  }
  public FALSE(): TerminalNode | undefined {
    return this.tryGetToken(MODLParser.FALSE, 0);
  }
  public NULL(): TerminalNode | undefined {
    return this.tryGetToken(MODLParser.NULL, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return MODLParser.RULE_modl_primitive;
  }
  // @Override
  public enterRule(listener: MODLParserListener): void {
    if (listener.enterModl_primitive) {
      listener.enterModl_primitive(this);
    }
  }
  // @Override
  public exitRule(listener: MODLParserListener): void {
    if (listener.exitModl_primitive) {
      listener.exitModl_primitive(this);
    }
  }
  // @Override
  public accept<Result>(visitor: MODLParserVisitor<Result>): Result {
    if (visitor.visitModl_primitive) {
      return visitor.visitModl_primitive(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
