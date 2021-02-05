// Generated from /Users/tonywalmsley/work/num/grammar/antlr4/MODLParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MODLParserListener = require('./MODLParserListener').MODLParserListener;
var MODLParserVisitor = require('./MODLParserVisitor').MODLParserVisitor;

var grammarFileName = "MODLParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0013\u0085\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0005\u0002\u0018\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007",
    "\u0002\u001d\n\u0002\f\u0002\u000e\u0002 \u000b\u0002\u0003\u0002\u0005",
    "\u0002#\n\u0002\u0005\u0002%\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003,\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u00042\n\u0004\f\u0004\u000e\u00045\u000b",
    "\u0004\u0005\u00047\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005>\n\u0005\u0003\u0005\u0006\u0005A\n\u0005",
    "\r\u0005\u000e\u0005B\u0003\u0005\u0003\u0005\u0005\u0005G\n\u0005\u0003",
    "\u0005\u0007\u0005J\n\u0005\f\u0005\u000e\u0005M\u000b\u0005\u0007\u0005",
    "O\n\u0005\f\u0005\u000e\u0005R\u000b\u0005\u0005\u0005T\n\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0006\u0006Z\n\u0006\r\u0006",
    "\u000e\u0006[\u0006\u0006^\n\u0006\r\u0006\u000e\u0006_\u0003\u0006",
    "\u0007\u0006c\n\u0006\f\u0006\u000e\u0006f\u000b\u0006\u0003\u0006\u0005",
    "\u0006i\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007r\n\u0007\u0003\b\u0003\b",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t{\n\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0005\n\u0081\n\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0002\u0002\f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002",
    "\u0004\u0003\u0002\u0011\u0012\u0005\u0002\u0004\u0006\u000f\u000f\u0011",
    "\u0012\u0002\u0095\u0002$\u0003\u0002\u0002\u0002\u0004+\u0003\u0002",
    "\u0002\u0002\u0006-\u0003\u0002\u0002\u0002\b:\u0003\u0002\u0002\u0002",
    "\n]\u0003\u0002\u0002\u0002\fq\u0003\u0002\u0002\u0002\u000es\u0003",
    "\u0002\u0002\u0002\u0010z\u0003\u0002\u0002\u0002\u0012\u0080\u0003",
    "\u0002\u0002\u0002\u0014\u0082\u0003\u0002\u0002\u0002\u0016\u0018\u0005",
    "\u0004\u0003\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0017\u0018\u0003",
    "\u0002\u0002\u0002\u0018%\u0003\u0002\u0002\u0002\u0019\u001e\u0005",
    "\u0004\u0003\u0002\u001a\u001b\u0007\t\u0002\u0002\u001b\u001d\u0005",
    "\u0004\u0003\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001d \u0003",
    "\u0002\u0002\u0002\u001e\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003",
    "\u0002\u0002\u0002\u001f\"\u0003\u0002\u0002\u0002 \u001e\u0003\u0002",
    "\u0002\u0002!#\u0007\t\u0002\u0002\"!\u0003\u0002\u0002\u0002\"#\u0003",
    "\u0002\u0002\u0002#%\u0003\u0002\u0002\u0002$\u0017\u0003\u0002\u0002",
    "\u0002$\u0019\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&\'\u0007",
    "\u0002\u0002\u0003\'\u0003\u0003\u0002\u0002\u0002(,\u0005\u0006\u0004",
    "\u0002),\u0005\b\u0005\u0002*,\u0005\f\u0007\u0002+(\u0003\u0002\u0002",
    "\u0002+)\u0003\u0002\u0002\u0002+*\u0003\u0002\u0002\u0002,\u0005\u0003",
    "\u0002\u0002\u0002-6\u0007\u000b\u0002\u0002.3\u0005\f\u0007\u0002/",
    "0\u0007\t\u0002\u000202\u0005\f\u0007\u00021/\u0003\u0002\u0002\u0002",
    "25\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000234\u0003\u0002\u0002",
    "\u000247\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u00026.\u0003\u0002",
    "\u0002\u000267\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u000289\u0007",
    "\f\u0002\u00029\u0007\u0003\u0002\u0002\u0002:S\u0007\r\u0002\u0002",
    ";>\u0005\u0012\n\u0002<>\u0005\n\u0006\u0002=;\u0003\u0002\u0002\u0002",
    "=<\u0003\u0002\u0002\u0002>P\u0003\u0002\u0002\u0002?A\u0007\t\u0002",
    "\u0002@?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002B@\u0003\u0002",
    "\u0002\u0002BC\u0003\u0002\u0002\u0002CF\u0003\u0002\u0002\u0002DG\u0005",
    "\u0012\n\u0002EG\u0005\n\u0006\u0002FD\u0003\u0002\u0002\u0002FE\u0003",
    "\u0002\u0002\u0002GK\u0003\u0002\u0002\u0002HJ\u0007\t\u0002\u0002I",
    "H\u0003\u0002\u0002\u0002JM\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002",
    "\u0002KL\u0003\u0002\u0002\u0002LO\u0003\u0002\u0002\u0002MK\u0003\u0002",
    "\u0002\u0002N@\u0003\u0002\u0002\u0002OR\u0003\u0002\u0002\u0002PN\u0003",
    "\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QT\u0003\u0002\u0002\u0002",
    "RP\u0003\u0002\u0002\u0002S=\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002",
    "\u0002TU\u0003\u0002\u0002\u0002UV\u0007\u000e\u0002\u0002V\t\u0003",
    "\u0002\u0002\u0002WY\u0005\u0012\n\u0002XZ\u0007\u0007\u0002\u0002Y",
    "X\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002",
    "\u0002[\\\u0003\u0002\u0002\u0002\\^\u0003\u0002\u0002\u0002]W\u0003",
    "\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002",
    "_`\u0003\u0002\u0002\u0002`d\u0003\u0002\u0002\u0002ac\u0005\u0012\n",
    "\u0002ba\u0003\u0002\u0002\u0002cf\u0003\u0002\u0002\u0002db\u0003\u0002",
    "\u0002\u0002de\u0003\u0002\u0002\u0002eh\u0003\u0002\u0002\u0002fd\u0003",
    "\u0002\u0002\u0002gi\u0007\u0007\u0002\u0002hg\u0003\u0002\u0002\u0002",
    "hi\u0003\u0002\u0002\u0002i\u000b\u0003\u0002\u0002\u0002jk\t\u0002",
    "\u0002\u0002kl\u0007\b\u0002\u0002lr\u0005\u000e\b\u0002mn\u0007\u0012",
    "\u0002\u0002nr\u0005\u0006\u0004\u0002op\u0007\u0012\u0002\u0002pr\u0005",
    "\b\u0005\u0002qj\u0003\u0002\u0002\u0002qm\u0003\u0002\u0002\u0002q",
    "o\u0003\u0002\u0002\u0002r\r\u0003\u0002\u0002\u0002st\u0005\u0010\t",
    "\u0002t\u000f\u0003\u0002\u0002\u0002u{\u0005\u0006\u0004\u0002v{\u0005",
    "\b\u0005\u0002w{\u0005\n\u0006\u0002x{\u0005\f\u0007\u0002y{\u0005\u0014",
    "\u000b\u0002zu\u0003\u0002\u0002\u0002zv\u0003\u0002\u0002\u0002zw\u0003",
    "\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002zy\u0003\u0002\u0002\u0002",
    "{\u0011\u0003\u0002\u0002\u0002|\u0081\u0005\u0006\u0004\u0002}\u0081",
    "\u0005\f\u0007\u0002~\u0081\u0005\b\u0005\u0002\u007f\u0081\u0005\u0014",
    "\u000b\u0002\u0080|\u0003\u0002\u0002\u0002\u0080}\u0003\u0002\u0002",
    "\u0002\u0080~\u0003\u0002\u0002\u0002\u0080\u007f\u0003\u0002\u0002",
    "\u0002\u0081\u0013\u0003\u0002\u0002\u0002\u0082\u0083\t\u0003\u0002",
    "\u0002\u0083\u0015\u0003\u0002\u0002\u0002\u0016\u0017\u001e\"$+36=",
    "BFKPS[_dhqz\u0080"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "':'", "'='", "';'", 
                     "','", "'('", "')'", "'['", "']'" ];

var symbolicNames = [ null, "WS", "NULL", "TRUE", "FALSE", "COLON", "EQUALS", 
                      "STRUCT_SEP", "ARR_SEP", "LBRAC", "RBRAC", "LSBRAC", 
                      "RSBRAC", "NUMBER", "COMMENT", "QUOTED", "STRING", 
                      "HASH_PREFIX" ];

var ruleNames =  [ "modl", "modl_structure", "modl_map", "modl_array", "modl_nb_array", 
                   "modl_pair", "modl_value_item", "modl_value", "modl_array_value_item", 
                   "modl_primitive" ];

function MODLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

MODLParser.prototype = Object.create(antlr4.Parser.prototype);
MODLParser.prototype.constructor = MODLParser;

Object.defineProperty(MODLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

MODLParser.EOF = antlr4.Token.EOF;
MODLParser.WS = 1;
MODLParser.NULL = 2;
MODLParser.TRUE = 3;
MODLParser.FALSE = 4;
MODLParser.COLON = 5;
MODLParser.EQUALS = 6;
MODLParser.STRUCT_SEP = 7;
MODLParser.ARR_SEP = 8;
MODLParser.LBRAC = 9;
MODLParser.RBRAC = 10;
MODLParser.LSBRAC = 11;
MODLParser.RSBRAC = 12;
MODLParser.NUMBER = 13;
MODLParser.COMMENT = 14;
MODLParser.QUOTED = 15;
MODLParser.STRING = 16;
MODLParser.HASH_PREFIX = 17;

MODLParser.RULE_modl = 0;
MODLParser.RULE_modl_structure = 1;
MODLParser.RULE_modl_map = 2;
MODLParser.RULE_modl_array = 3;
MODLParser.RULE_modl_nb_array = 4;
MODLParser.RULE_modl_pair = 5;
MODLParser.RULE_modl_value_item = 6;
MODLParser.RULE_modl_value = 7;
MODLParser.RULE_modl_array_value_item = 8;
MODLParser.RULE_modl_primitive = 9;


function ModlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl;
    return this;
}

ModlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModlContext.prototype.constructor = ModlContext;

ModlContext.prototype.EOF = function() {
    return this.getToken(MODLParser.EOF, 0);
};

ModlContext.prototype.modl_structure = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Modl_structureContext);
    } else {
        return this.getTypedRuleContext(Modl_structureContext,i);
    }
};

ModlContext.prototype.STRUCT_SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MODLParser.STRUCT_SEP);
    } else {
        return this.getToken(MODLParser.STRUCT_SEP, i);
    }
};


ModlContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl(this);
	}
};

ModlContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl(this);
	}
};

ModlContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.ModlContext = ModlContext;

MODLParser.prototype.modl = function() {

    var localctx = new ModlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MODLParser.RULE_modl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.state = 21;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MODLParser.LBRAC) | (1 << MODLParser.LSBRAC) | (1 << MODLParser.QUOTED) | (1 << MODLParser.STRING))) !== 0)) {
                this.state = 20;
                this.modl_structure();
            }

            break;

        case 2:
            this.state = 23;
            this.modl_structure();
            this.state = 28;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 24;
                    this.match(MODLParser.STRUCT_SEP);
                    this.state = 25;
                    this.modl_structure(); 
                }
                this.state = 30;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
            }

            this.state = 32;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MODLParser.STRUCT_SEP) {
                this.state = 31;
                this.match(MODLParser.STRUCT_SEP);
            }

            break;

        }
        this.state = 36;
        this.match(MODLParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Modl_structureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl_structure;
    return this;
}

Modl_structureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_structureContext.prototype.constructor = Modl_structureContext;

Modl_structureContext.prototype.modl_map = function() {
    return this.getTypedRuleContext(Modl_mapContext,0);
};

Modl_structureContext.prototype.modl_array = function() {
    return this.getTypedRuleContext(Modl_arrayContext,0);
};

Modl_structureContext.prototype.modl_pair = function() {
    return this.getTypedRuleContext(Modl_pairContext,0);
};

Modl_structureContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl_structure(this);
	}
};

Modl_structureContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl_structure(this);
	}
};

Modl_structureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl_structure(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.Modl_structureContext = Modl_structureContext;

MODLParser.prototype.modl_structure = function() {

    var localctx = new Modl_structureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MODLParser.RULE_modl_structure);
    try {
        this.state = 41;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MODLParser.LBRAC:
            this.enterOuterAlt(localctx, 1);
            this.state = 38;
            this.modl_map();
            break;
        case MODLParser.LSBRAC:
            this.enterOuterAlt(localctx, 2);
            this.state = 39;
            this.modl_array();
            break;
        case MODLParser.QUOTED:
        case MODLParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 40;
            this.modl_pair();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Modl_mapContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl_map;
    return this;
}

Modl_mapContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_mapContext.prototype.constructor = Modl_mapContext;

Modl_mapContext.prototype.LBRAC = function() {
    return this.getToken(MODLParser.LBRAC, 0);
};

Modl_mapContext.prototype.RBRAC = function() {
    return this.getToken(MODLParser.RBRAC, 0);
};

Modl_mapContext.prototype.modl_pair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Modl_pairContext);
    } else {
        return this.getTypedRuleContext(Modl_pairContext,i);
    }
};

Modl_mapContext.prototype.STRUCT_SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MODLParser.STRUCT_SEP);
    } else {
        return this.getToken(MODLParser.STRUCT_SEP, i);
    }
};


Modl_mapContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl_map(this);
	}
};

Modl_mapContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl_map(this);
	}
};

Modl_mapContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl_map(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.Modl_mapContext = Modl_mapContext;

MODLParser.prototype.modl_map = function() {

    var localctx = new Modl_mapContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, MODLParser.RULE_modl_map);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this.match(MODLParser.LBRAC);
        this.state = 52;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MODLParser.QUOTED || _la===MODLParser.STRING) {
            this.state = 44;
            this.modl_pair();
            this.state = 49;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MODLParser.STRUCT_SEP) {
                this.state = 45;
                this.match(MODLParser.STRUCT_SEP);
                this.state = 46;
                this.modl_pair();
                this.state = 51;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 54;
        this.match(MODLParser.RBRAC);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Modl_arrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl_array;
    return this;
}

Modl_arrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_arrayContext.prototype.constructor = Modl_arrayContext;

Modl_arrayContext.prototype.LSBRAC = function() {
    return this.getToken(MODLParser.LSBRAC, 0);
};

Modl_arrayContext.prototype.RSBRAC = function() {
    return this.getToken(MODLParser.RSBRAC, 0);
};

Modl_arrayContext.prototype.modl_array_value_item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Modl_array_value_itemContext);
    } else {
        return this.getTypedRuleContext(Modl_array_value_itemContext,i);
    }
};

Modl_arrayContext.prototype.modl_nb_array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Modl_nb_arrayContext);
    } else {
        return this.getTypedRuleContext(Modl_nb_arrayContext,i);
    }
};

Modl_arrayContext.prototype.STRUCT_SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MODLParser.STRUCT_SEP);
    } else {
        return this.getToken(MODLParser.STRUCT_SEP, i);
    }
};


Modl_arrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl_array(this);
	}
};

Modl_arrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl_array(this);
	}
};

Modl_arrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl_array(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.Modl_arrayContext = Modl_arrayContext;

MODLParser.prototype.modl_array = function() {

    var localctx = new Modl_arrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MODLParser.RULE_modl_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(MODLParser.LSBRAC);
        this.state = 81;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MODLParser.NULL) | (1 << MODLParser.TRUE) | (1 << MODLParser.FALSE) | (1 << MODLParser.LBRAC) | (1 << MODLParser.LSBRAC) | (1 << MODLParser.NUMBER) | (1 << MODLParser.QUOTED) | (1 << MODLParser.STRING))) !== 0)) {
            this.state = 59;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
            switch(la_) {
            case 1:
                this.state = 57;
                this.modl_array_value_item();
                break;

            case 2:
                this.state = 58;
                this.modl_nb_array();
                break;

            }
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MODLParser.STRUCT_SEP) {
                this.state = 62; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 61;
                    this.match(MODLParser.STRUCT_SEP);
                    this.state = 64; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===MODLParser.STRUCT_SEP);
                this.state = 68;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 66;
                    this.modl_array_value_item();
                    break;

                case 2:
                    this.state = 67;
                    this.modl_nb_array();
                    break;

                }
                this.state = 73;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 70;
                        this.match(MODLParser.STRUCT_SEP); 
                    }
                    this.state = 75;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
                }

                this.state = 80;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 83;
        this.match(MODLParser.RSBRAC);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Modl_nb_arrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl_nb_array;
    return this;
}

Modl_nb_arrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_nb_arrayContext.prototype.constructor = Modl_nb_arrayContext;

Modl_nb_arrayContext.prototype.modl_array_value_item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Modl_array_value_itemContext);
    } else {
        return this.getTypedRuleContext(Modl_array_value_itemContext,i);
    }
};

Modl_nb_arrayContext.prototype.COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MODLParser.COLON);
    } else {
        return this.getToken(MODLParser.COLON, i);
    }
};


Modl_nb_arrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl_nb_array(this);
	}
};

Modl_nb_arrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl_nb_array(this);
	}
};

Modl_nb_arrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl_nb_array(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.Modl_nb_arrayContext = Modl_nb_arrayContext;

MODLParser.prototype.modl_nb_array = function() {

    var localctx = new Modl_nb_arrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, MODLParser.RULE_modl_nb_array);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 85;
        		this.modl_array_value_item();
        		this.state = 87; 
        		this._errHandler.sync(this);
        		var _alt = 1;
        		do {
        			switch (_alt) {
        			case 1:
        				this.state = 86;
        				this.match(MODLParser.COLON);
        				break;
        			default:
        				throw new antlr4.error.NoViableAltException(this);
        			}
        			this.state = 89; 
        			this._errHandler.sync(this);
        			_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
        		} while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 93; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 98;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 95;
                this.modl_array_value_item(); 
            }
            this.state = 100;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

        this.state = 102;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 101;
            this.match(MODLParser.COLON);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Modl_pairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl_pair;
    return this;
}

Modl_pairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_pairContext.prototype.constructor = Modl_pairContext;

Modl_pairContext.prototype.EQUALS = function() {
    return this.getToken(MODLParser.EQUALS, 0);
};

Modl_pairContext.prototype.modl_value_item = function() {
    return this.getTypedRuleContext(Modl_value_itemContext,0);
};

Modl_pairContext.prototype.STRING = function() {
    return this.getToken(MODLParser.STRING, 0);
};

Modl_pairContext.prototype.QUOTED = function() {
    return this.getToken(MODLParser.QUOTED, 0);
};

Modl_pairContext.prototype.modl_map = function() {
    return this.getTypedRuleContext(Modl_mapContext,0);
};

Modl_pairContext.prototype.modl_array = function() {
    return this.getTypedRuleContext(Modl_arrayContext,0);
};

Modl_pairContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl_pair(this);
	}
};

Modl_pairContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl_pair(this);
	}
};

Modl_pairContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl_pair(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.Modl_pairContext = Modl_pairContext;

MODLParser.prototype.modl_pair = function() {

    var localctx = new Modl_pairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MODLParser.RULE_modl_pair);
    var _la = 0; // Token type
    try {
        this.state = 111;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 104;
            _la = this._input.LA(1);
            if(!(_la===MODLParser.QUOTED || _la===MODLParser.STRING)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 105;
            this.match(MODLParser.EQUALS);
            this.state = 106;
            this.modl_value_item();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 107;
            this.match(MODLParser.STRING);
            this.state = 108;
            this.modl_map();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 109;
            this.match(MODLParser.STRING);
            this.state = 110;
            this.modl_array();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Modl_value_itemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl_value_item;
    return this;
}

Modl_value_itemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_value_itemContext.prototype.constructor = Modl_value_itemContext;

Modl_value_itemContext.prototype.modl_value = function() {
    return this.getTypedRuleContext(Modl_valueContext,0);
};

Modl_value_itemContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl_value_item(this);
	}
};

Modl_value_itemContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl_value_item(this);
	}
};

Modl_value_itemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl_value_item(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.Modl_value_itemContext = Modl_value_itemContext;

MODLParser.prototype.modl_value_item = function() {

    var localctx = new Modl_value_itemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MODLParser.RULE_modl_value_item);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.modl_value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Modl_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl_value;
    return this;
}

Modl_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_valueContext.prototype.constructor = Modl_valueContext;

Modl_valueContext.prototype.modl_map = function() {
    return this.getTypedRuleContext(Modl_mapContext,0);
};

Modl_valueContext.prototype.modl_array = function() {
    return this.getTypedRuleContext(Modl_arrayContext,0);
};

Modl_valueContext.prototype.modl_nb_array = function() {
    return this.getTypedRuleContext(Modl_nb_arrayContext,0);
};

Modl_valueContext.prototype.modl_pair = function() {
    return this.getTypedRuleContext(Modl_pairContext,0);
};

Modl_valueContext.prototype.modl_primitive = function() {
    return this.getTypedRuleContext(Modl_primitiveContext,0);
};

Modl_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl_value(this);
	}
};

Modl_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl_value(this);
	}
};

Modl_valueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl_value(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.Modl_valueContext = Modl_valueContext;

MODLParser.prototype.modl_value = function() {

    var localctx = new Modl_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, MODLParser.RULE_modl_value);
    try {
        this.state = 120;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 115;
            this.modl_map();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 116;
            this.modl_array();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 117;
            this.modl_nb_array();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 118;
            this.modl_pair();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 119;
            this.modl_primitive();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Modl_array_value_itemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl_array_value_item;
    return this;
}

Modl_array_value_itemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_array_value_itemContext.prototype.constructor = Modl_array_value_itemContext;

Modl_array_value_itemContext.prototype.modl_map = function() {
    return this.getTypedRuleContext(Modl_mapContext,0);
};

Modl_array_value_itemContext.prototype.modl_pair = function() {
    return this.getTypedRuleContext(Modl_pairContext,0);
};

Modl_array_value_itemContext.prototype.modl_array = function() {
    return this.getTypedRuleContext(Modl_arrayContext,0);
};

Modl_array_value_itemContext.prototype.modl_primitive = function() {
    return this.getTypedRuleContext(Modl_primitiveContext,0);
};

Modl_array_value_itemContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl_array_value_item(this);
	}
};

Modl_array_value_itemContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl_array_value_item(this);
	}
};

Modl_array_value_itemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl_array_value_item(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.Modl_array_value_itemContext = Modl_array_value_itemContext;

MODLParser.prototype.modl_array_value_item = function() {

    var localctx = new Modl_array_value_itemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, MODLParser.RULE_modl_array_value_item);
    try {
        this.state = 126;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 122;
            this.modl_map();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 123;
            this.modl_pair();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 124;
            this.modl_array();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 125;
            this.modl_primitive();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Modl_primitiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl_primitive;
    return this;
}

Modl_primitiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_primitiveContext.prototype.constructor = Modl_primitiveContext;

Modl_primitiveContext.prototype.QUOTED = function() {
    return this.getToken(MODLParser.QUOTED, 0);
};

Modl_primitiveContext.prototype.NUMBER = function() {
    return this.getToken(MODLParser.NUMBER, 0);
};

Modl_primitiveContext.prototype.STRING = function() {
    return this.getToken(MODLParser.STRING, 0);
};

Modl_primitiveContext.prototype.TRUE = function() {
    return this.getToken(MODLParser.TRUE, 0);
};

Modl_primitiveContext.prototype.FALSE = function() {
    return this.getToken(MODLParser.FALSE, 0);
};

Modl_primitiveContext.prototype.NULL = function() {
    return this.getToken(MODLParser.NULL, 0);
};

Modl_primitiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl_primitive(this);
	}
};

Modl_primitiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl_primitive(this);
	}
};

Modl_primitiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl_primitive(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.Modl_primitiveContext = Modl_primitiveContext;

MODLParser.prototype.modl_primitive = function() {

    var localctx = new Modl_primitiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, MODLParser.RULE_modl_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MODLParser.NULL) | (1 << MODLParser.TRUE) | (1 << MODLParser.FALSE) | (1 << MODLParser.NUMBER) | (1 << MODLParser.QUOTED) | (1 << MODLParser.STRING))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.MODLParser = MODLParser;
