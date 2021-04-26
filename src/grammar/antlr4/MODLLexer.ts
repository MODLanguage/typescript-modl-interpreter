// Generated from /Users/tonywalmsley/work/num/grammar/antlr4/MODLLexer.g4 by ANTLR 4.7.3-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

export class MODLLexer extends Lexer {
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

  // tslint:disable:no-trailing-whitespace
  public static readonly channelNames: string[] = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN'];

  // tslint:disable:no-trailing-whitespace
  public static readonly modeNames: string[] = ['DEFAULT_MODE'];

  public static readonly ruleNames: string[] = [
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
    'INT',
    'EXP',
    'QUOTED',
    'INSIDE_QUOTES',
    'INSIDE_GRAVES',
    'STRING',
    'UNRESERVED',
    'RESERVED_CHARS',
    'ESCAPED',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    "'null'",
    "'true'",
    "'false'",
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
    MODLLexer._LITERAL_NAMES,
    MODLLexer._SYMBOLIC_NAMES,
    []
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return MODLLexer.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  constructor(input: CharStream) {
    super(input);
    this._interp = new LexerATNSimulator(MODLLexer._ATN, this);
  }

  // @Override
  public get grammarFileName(): string {
    return 'MODLLexer.g4';
  }

  // @Override
  public get ruleNames(): string[] {
    return MODLLexer.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return MODLLexer._serializedATN;
  }

  // @Override
  public get channelNames(): string[] {
    return MODLLexer.channelNames;
  }

  // @Override
  public get modeNames(): string[] {
    return MODLLexer.modeNames;
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x10\xB6\b\x01' +
    '\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06' +
    '\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r' +
    '\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t' +
    '\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x06' +
    '\x02/\n\x02\r\x02\x0E\x020\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03' +
    '\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03' +
    '\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03' +
    '\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x05\rT\n\r\x03' +
    '\r\x03\r\x03\r\x06\rY\n\r\r\r\x0E\rZ\x05\r]\n\r\x03\r\x05\r`\n\r\x03\x0E' +
    '\x03\x0E\x03\x0E\x07\x0Ee\n\x0E\f\x0E\x0E\x0Eh\v\x0E\x05\x0Ej\n\x0E\x03' +
    '\x0F\x03\x0F\x05\x0Fn\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03' +
    '\x10\x03\x10\x03\x10\x07\x10x\n\x10\f\x10\x0E\x10{\v\x10\x03\x10\x03\x10' +
    '\x03\x10\x03\x10\x03\x10\x05\x10\x82\n\x10\x03\x11\x03\x11\x03\x12\x07' +
    '\x12\x87\n\x12\f\x12\x0E\x12\x8A\v\x12\x03\x13\x03\x13\x05\x13\x8E\n\x13' +
    '\x03\x13\x03\x13\x06\x13\x92\n\x13\r\x13\x0E\x13\x93\x03\x13\x06\x13\x97' +
    '\n\x13\r\x13\x0E\x13\x98\x03\x13\x03\x13\x06\x13\x9D\n\x13\r\x13\x0E\x13' +
    '\x9E\x07\x13\xA1\n\x13\f\x13\x0E\x13\xA4\v\x13\x03\x14\x03\x14\x03\x15' +
    '\x03\x15\x03\x16\x03\x16\x05\x16\xAC\n\x16\x03\x16\x03\x16\x03\x16\x03' +
    '\x16\x03\x16\x05\x16\xB3\n\x16\x05\x16\xB5\n\x16\x02\x02\x02\x17\x03\x02' +
    '\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11' +
    '\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x02\x1D\x02\x02' +
    "\x1F\x02\x0F!\x02\x02#\x02\x02%\x02\x10'\x02\x02)\x02\x02+\x02\x02\x03" +
    '\x02\v\x05\x02\v\f\x0F\x0F""\x03\x022;\x03\x023;\x04\x02GGgg\x04\x02' +
    '--//\x03\x02$$\x03\x02bb\v\x02\n\f\x0E\x0F""$$*+==??]_\x80\x80\t\x02' +
    '11^^ddhhppttvw\x02\xC5\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02' +
    '\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02' +
    '\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02' +
    '\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02' +
    '\x19\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x03' +
    '.\x03\x02\x02\x02\x054\x03\x02\x02\x02\x079\x03\x02\x02\x02\t>\x03\x02' +
    '\x02\x02\vD\x03\x02\x02\x02\rF\x03\x02\x02\x02\x0FH\x03\x02\x02\x02\x11' +
    'J\x03\x02\x02\x02\x13L\x03\x02\x02\x02\x15N\x03\x02\x02\x02\x17P\x03\x02' +
    '\x02\x02\x19S\x03\x02\x02\x02\x1Bi\x03\x02\x02\x02\x1Dk\x03\x02\x02\x02' +
    '\x1F\x81\x03\x02\x02\x02!\x83\x03\x02\x02\x02#\x88\x03\x02\x02\x02%\x8D' +
    "\x03\x02\x02\x02'\xA5\x03\x02\x02\x02)\xA7\x03\x02\x02\x02+\xB4\x03\x02" +
    '\x02\x02-/\t\x02\x02\x02.-\x03\x02\x02\x02/0\x03\x02\x02\x020.\x03\x02' +
    '\x02\x0201\x03\x02\x02\x0212\x03\x02\x02\x0223\b\x02\x02\x023\x04\x03' +
    '\x02\x02\x0245\x07p\x02\x0256\x07w\x02\x0267\x07n\x02\x0278\x07n\x02\x02' +
    '8\x06\x03\x02\x02\x029:\x07v\x02\x02:;\x07t\x02\x02;<\x07w\x02\x02<=\x07' +
    'g\x02\x02=\b\x03\x02\x02\x02>?\x07h\x02\x02?@\x07c\x02\x02@A\x07n\x02' +
    '\x02AB\x07u\x02\x02BC\x07g\x02\x02C\n\x03\x02\x02\x02DE\x07?\x02\x02E' +
    '\f\x03\x02\x02\x02FG\x07=\x02\x02G\x0E\x03\x02\x02\x02HI\x07.\x02\x02' +
    'I\x10\x03\x02\x02\x02JK\x07*\x02\x02K\x12\x03\x02\x02\x02LM\x07+\x02\x02' +
    'M\x14\x03\x02\x02\x02NO\x07]\x02\x02O\x16\x03\x02\x02\x02PQ\x07_\x02\x02' +
    'Q\x18\x03\x02\x02\x02RT\x07/\x02\x02SR\x03\x02\x02\x02ST\x03\x02\x02\x02' +
    'TU\x03\x02\x02\x02U\\\x05\x1B\x0E\x02VX\x070\x02\x02WY\t\x03\x02\x02X' +
    'W\x03\x02\x02\x02YZ\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02' +
    '[]\x03\x02\x02\x02\\V\x03\x02\x02\x02\\]\x03\x02\x02\x02]_\x03\x02\x02' +
    '\x02^`\x05\x1D\x0F\x02_^\x03\x02\x02\x02_`\x03\x02\x02\x02`\x1A\x03\x02' +
    '\x02\x02aj\x072\x02\x02bf\t\x04\x02\x02ce\t\x03\x02\x02dc\x03\x02\x02' +
    '\x02eh\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02gj\x03\x02\x02' +
    '\x02hf\x03\x02\x02\x02ia\x03\x02\x02\x02ib\x03\x02\x02\x02j\x1C\x03\x02' +
    '\x02\x02km\t\x05\x02\x02ln\t\x06\x02\x02ml\x03\x02\x02\x02mn\x03\x02\x02' +
    '\x02no\x03\x02\x02\x02op\x05\x1B\x0E\x02p\x1E\x03\x02\x02\x02qy\x07$\x02' +
    '\x02rx\x05!\x11\x02st\x07\x80\x02\x02tx\x07$\x02\x02uv\x07^\x02\x02vx' +
    '\x07$\x02\x02wr\x03\x02\x02\x02ws\x03\x02\x02\x02wu\x03\x02\x02\x02x{' +
    '\x03\x02\x02\x02yw\x03\x02\x02\x02yz\x03\x02\x02\x02z|\x03\x02\x02\x02' +
    '{y\x03\x02\x02\x02|\x82\x07$\x02\x02}~\x07b\x02\x02~\x7F\x05#\x12\x02' +
    '\x7F\x80\x07b\x02\x02\x80\x82\x03\x02\x02\x02\x81q\x03\x02\x02\x02\x81' +
    '}\x03\x02\x02\x02\x82 \x03\x02\x02\x02\x83\x84\n\x07\x02\x02\x84"\x03' +
    '\x02\x02\x02\x85\x87\n\b\x02\x02\x86\x85\x03\x02\x02\x02\x87\x8A\x03\x02' +
    '\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89$\x03\x02' +
    '\x02\x02\x8A\x88\x03\x02\x02\x02\x8B\x8C\x07%\x02\x02\x8C\x8E\x07"\x02' +
    '\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x91\x03\x02\x02' +
    "\x02\x8F\x92\x05+\x16\x02\x90\x92\x05'\x14\x02\x91\x8F\x03\x02\x02\x02" +
    '\x91\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02' +
    '\x93\x94\x03\x02\x02\x02\x94\xA2\x03\x02\x02\x02\x95\x97\x07"\x02\x02' +
    '\x96\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02' +
    '\x98\x99\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02\x9A\x9D\x05+\x16\x02' +
    "\x9B\x9D\x05'\x14\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9B\x03\x02\x02\x02" +
    '\x9D\x9E\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02' +
    '\x9F\xA1\x03\x02\x02\x02\xA0\x96\x03\x02\x02\x02\xA1\xA4\x03\x02\x02\x02' +
    '\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3&\x03\x02\x02\x02' +
    '\xA4\xA2\x03\x02\x02\x02\xA5\xA6\n\t\x02\x02\xA6(\x03\x02\x02\x02\xA7' +
    '\xA8\t\t\x02\x02\xA8*\x03\x02\x02\x02\xA9\xAB\x07^\x02\x02\xAA\xAC\t\n' +
    '\x02\x02\xAB\xAA\x03\x02\x02\x02\xAC\xB5\x03\x02\x02\x02\xAD\xAE\x07^' +
    '\x02\x02\xAE\xB5\x05)\x15\x02\xAF\xB2\x07\x80\x02\x02\xB0\xB3\x05)\x15' +
    '\x02\xB1\xB3\x07w\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB1\x03\x02\x02' +
    '\x02\xB3\xB5\x03\x02\x02\x02\xB4\xA9\x03\x02\x02\x02\xB4\xAD\x03\x02\x02' +
    '\x02\xB4\xAF\x03\x02\x02\x02\xB5,\x03\x02\x02\x02\x19\x020SZ\\_fimwy\x81' +
    '\x88\x8D\x91\x93\x98\x9C\x9E\xA2\xAB\xB2\xB4\x03\b\x02\x02';
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!MODLLexer.__ATN) {
      MODLLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MODLLexer._serializedATN));
    }

    return MODLLexer.__ATN;
  }
}
