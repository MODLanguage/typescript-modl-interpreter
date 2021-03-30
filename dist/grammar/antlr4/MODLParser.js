"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modl_primitiveContext = exports.Modl_valueContext = exports.Modl_pairContext = exports.Modl_arrayContext = exports.Modl_mapContext = exports.Modl_structureContext = exports.ModlContext = exports.MODLParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class MODLParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(MODLParser._ATN, this);
    }
    get vocabulary() {
        return MODLParser.VOCABULARY;
    }
    get grammarFileName() {
        return 'MODLParser.g4';
    }
    get ruleNames() {
        return MODLParser.ruleNames;
    }
    get serializedATN() {
        return MODLParser._serializedATN;
    }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    modl() {
        const _localctx = new ModlContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, MODLParser.RULE_modl);
        let _la;
        try {
            let _alt;
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
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    modl_structure() {
        const _localctx = new Modl_structureContext(this._ctx, this.state);
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    modl_map() {
        const _localctx = new Modl_mapContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, MODLParser.RULE_modl_map);
        let _la;
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
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    modl_array() {
        const _localctx = new Modl_arrayContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, MODLParser.RULE_modl_array);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 48;
                this.match(MODLParser.LSBRAC);
                this.state = 57;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((_la & ~0x1F) === 0 &&
                    ((1 << _la) &
                        ((1 << MODLParser.NULL) |
                            (1 << MODLParser.TRUE) |
                            (1 << MODLParser.FALSE) |
                            (1 << MODLParser.LBRAC) |
                            (1 << MODLParser.LSBRAC) |
                            (1 << MODLParser.NUMBER) |
                            (1 << MODLParser.QUOTED) |
                            (1 << MODLParser.STRING))) !==
                        0) {
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
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    modl_pair() {
        const _localctx = new Modl_pairContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, MODLParser.RULE_modl_pair);
        let _la;
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
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
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
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    modl_value() {
        const _localctx = new Modl_valueContext(this._ctx, this.state);
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
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    modl_primitive() {
        const _localctx = new Modl_primitiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, MODLParser.RULE_modl_primitive);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 76;
                _la = this._input.LA(1);
                if (!((_la & ~0x1F) === 0 &&
                    ((1 << _la) &
                        ((1 << MODLParser.NULL) |
                            (1 << MODLParser.TRUE) |
                            (1 << MODLParser.FALSE) |
                            (1 << MODLParser.NUMBER) |
                            (1 << MODLParser.QUOTED) |
                            (1 << MODLParser.STRING))) !==
                        0)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!MODLParser.__ATN) {
            MODLParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(MODLParser._serializedATN));
        }
        return MODLParser.__ATN;
    }
}
exports.MODLParser = MODLParser;
MODLParser.WS = 1;
MODLParser.NULL = 2;
MODLParser.TRUE = 3;
MODLParser.FALSE = 4;
MODLParser.EQUALS = 5;
MODLParser.STRUCT_SEP = 6;
MODLParser.ARR_SEP = 7;
MODLParser.LBRAC = 8;
MODLParser.RBRAC = 9;
MODLParser.LSBRAC = 10;
MODLParser.RSBRAC = 11;
MODLParser.NUMBER = 12;
MODLParser.QUOTED = 13;
MODLParser.STRING = 14;
MODLParser.RULE_modl = 0;
MODLParser.RULE_modl_structure = 1;
MODLParser.RULE_modl_map = 2;
MODLParser.RULE_modl_array = 3;
MODLParser.RULE_modl_pair = 4;
MODLParser.RULE_modl_value = 5;
MODLParser.RULE_modl_primitive = 6;
MODLParser.ruleNames = [
    'modl',
    'modl_structure',
    'modl_map',
    'modl_array',
    'modl_pair',
    'modl_value',
    'modl_primitive',
];
MODLParser._LITERAL_NAMES = [
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
MODLParser._SYMBOLIC_NAMES = [
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
MODLParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(MODLParser._LITERAL_NAMES, MODLParser._SYMBOLIC_NAMES, []);
MODLParser._serializedATN = '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10Q\x04\x02' +
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
class ModlContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() {
        return this.getToken(MODLParser.EOF, 0);
    }
    modl_primitive() {
        return this.tryGetRuleContext(0, Modl_primitiveContext);
    }
    modl_structure(i) {
        if (i === undefined) {
            return this.getRuleContexts(Modl_structureContext);
        }
        else {
            return this.getRuleContext(i, Modl_structureContext);
        }
    }
    STRUCT_SEP(i) {
        if (i === undefined) {
            return this.getTokens(MODLParser.STRUCT_SEP);
        }
        else {
            return this.getToken(MODLParser.STRUCT_SEP, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return MODLParser.RULE_modl;
    }
    enterRule(listener) {
        if (listener.enterModl) {
            listener.enterModl(this);
        }
    }
    exitRule(listener) {
        if (listener.exitModl) {
            listener.exitModl(this);
        }
    }
    accept(visitor) {
        if (visitor.visitModl) {
            return visitor.visitModl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModlContext = ModlContext;
class Modl_structureContext extends ParserRuleContext_1.ParserRuleContext {
    modl_map() {
        return this.tryGetRuleContext(0, Modl_mapContext);
    }
    modl_array() {
        return this.tryGetRuleContext(0, Modl_arrayContext);
    }
    modl_pair() {
        return this.tryGetRuleContext(0, Modl_pairContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return MODLParser.RULE_modl_structure;
    }
    enterRule(listener) {
        if (listener.enterModl_structure) {
            listener.enterModl_structure(this);
        }
    }
    exitRule(listener) {
        if (listener.exitModl_structure) {
            listener.exitModl_structure(this);
        }
    }
    accept(visitor) {
        if (visitor.visitModl_structure) {
            return visitor.visitModl_structure(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Modl_structureContext = Modl_structureContext;
class Modl_mapContext extends ParserRuleContext_1.ParserRuleContext {
    LBRAC() {
        return this.getToken(MODLParser.LBRAC, 0);
    }
    RBRAC() {
        return this.getToken(MODLParser.RBRAC, 0);
    }
    modl_pair(i) {
        if (i === undefined) {
            return this.getRuleContexts(Modl_pairContext);
        }
        else {
            return this.getRuleContext(i, Modl_pairContext);
        }
    }
    STRUCT_SEP(i) {
        if (i === undefined) {
            return this.getTokens(MODLParser.STRUCT_SEP);
        }
        else {
            return this.getToken(MODLParser.STRUCT_SEP, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return MODLParser.RULE_modl_map;
    }
    enterRule(listener) {
        if (listener.enterModl_map) {
            listener.enterModl_map(this);
        }
    }
    exitRule(listener) {
        if (listener.exitModl_map) {
            listener.exitModl_map(this);
        }
    }
    accept(visitor) {
        if (visitor.visitModl_map) {
            return visitor.visitModl_map(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Modl_mapContext = Modl_mapContext;
class Modl_arrayContext extends ParserRuleContext_1.ParserRuleContext {
    LSBRAC() {
        return this.getToken(MODLParser.LSBRAC, 0);
    }
    RSBRAC() {
        return this.getToken(MODLParser.RSBRAC, 0);
    }
    modl_value(i) {
        if (i === undefined) {
            return this.getRuleContexts(Modl_valueContext);
        }
        else {
            return this.getRuleContext(i, Modl_valueContext);
        }
    }
    STRUCT_SEP(i) {
        if (i === undefined) {
            return this.getTokens(MODLParser.STRUCT_SEP);
        }
        else {
            return this.getToken(MODLParser.STRUCT_SEP, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return MODLParser.RULE_modl_array;
    }
    enterRule(listener) {
        if (listener.enterModl_array) {
            listener.enterModl_array(this);
        }
    }
    exitRule(listener) {
        if (listener.exitModl_array) {
            listener.exitModl_array(this);
        }
    }
    accept(visitor) {
        if (visitor.visitModl_array) {
            return visitor.visitModl_array(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Modl_arrayContext = Modl_arrayContext;
class Modl_pairContext extends ParserRuleContext_1.ParserRuleContext {
    EQUALS() {
        return this.tryGetToken(MODLParser.EQUALS, 0);
    }
    modl_value() {
        return this.tryGetRuleContext(0, Modl_valueContext);
    }
    STRING() {
        return this.tryGetToken(MODLParser.STRING, 0);
    }
    QUOTED() {
        return this.tryGetToken(MODLParser.QUOTED, 0);
    }
    modl_map() {
        return this.tryGetRuleContext(0, Modl_mapContext);
    }
    modl_array() {
        return this.tryGetRuleContext(0, Modl_arrayContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return MODLParser.RULE_modl_pair;
    }
    enterRule(listener) {
        if (listener.enterModl_pair) {
            listener.enterModl_pair(this);
        }
    }
    exitRule(listener) {
        if (listener.exitModl_pair) {
            listener.exitModl_pair(this);
        }
    }
    accept(visitor) {
        if (visitor.visitModl_pair) {
            return visitor.visitModl_pair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Modl_pairContext = Modl_pairContext;
class Modl_valueContext extends ParserRuleContext_1.ParserRuleContext {
    modl_map() {
        return this.tryGetRuleContext(0, Modl_mapContext);
    }
    modl_array() {
        return this.tryGetRuleContext(0, Modl_arrayContext);
    }
    modl_pair() {
        return this.tryGetRuleContext(0, Modl_pairContext);
    }
    modl_primitive() {
        return this.tryGetRuleContext(0, Modl_primitiveContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return MODLParser.RULE_modl_value;
    }
    enterRule(listener) {
        if (listener.enterModl_value) {
            listener.enterModl_value(this);
        }
    }
    exitRule(listener) {
        if (listener.exitModl_value) {
            listener.exitModl_value(this);
        }
    }
    accept(visitor) {
        if (visitor.visitModl_value) {
            return visitor.visitModl_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Modl_valueContext = Modl_valueContext;
class Modl_primitiveContext extends ParserRuleContext_1.ParserRuleContext {
    QUOTED() {
        return this.tryGetToken(MODLParser.QUOTED, 0);
    }
    NUMBER() {
        return this.tryGetToken(MODLParser.NUMBER, 0);
    }
    STRING() {
        return this.tryGetToken(MODLParser.STRING, 0);
    }
    TRUE() {
        return this.tryGetToken(MODLParser.TRUE, 0);
    }
    FALSE() {
        return this.tryGetToken(MODLParser.FALSE, 0);
    }
    NULL() {
        return this.tryGetToken(MODLParser.NULL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return MODLParser.RULE_modl_primitive;
    }
    enterRule(listener) {
        if (listener.enterModl_primitive) {
            listener.enterModl_primitive(this);
        }
    }
    exitRule(listener) {
        if (listener.exitModl_primitive) {
            listener.exitModl_primitive(this);
        }
    }
    accept(visitor) {
        if (visitor.visitModl_primitive) {
            return visitor.visitModl_primitive(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Modl_primitiveContext = Modl_primitiveContext;
//# sourceMappingURL=MODLParser.js.map