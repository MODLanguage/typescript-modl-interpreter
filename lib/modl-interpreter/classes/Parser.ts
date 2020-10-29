import * as antlr4 from 'antlr4';
import * as modlParser from '../../../gen/MODL/MODLParser';
import * as modlLexer from '../../../gen/MODL/MODLLexer';
import { Modl } from './Model';
import { ModlParsedVisitor } from './ModlParsedVisitor';
import { ErrorListener } from 'antlr4/error/ErrorListener';
import { Ancestry } from './Ancestry';

export class Parser {
  parse(s: string, ancestry: Ancestry): Modl {
    const inputStream = new antlr4.InputStream(s);
    const lexer = new modlLexer.MODLLexer(inputStream);
    const commonTokenStream = new antlr4.CommonTokenStream(lexer);
    const parser = new modlParser.MODLParser(commonTokenStream);

    lexer.addErrorListener(ThrowingErrorListener.INSTANCE);
    parser.addErrorListener(ThrowingErrorListener.INSTANCE);

    return new ModlParsedVisitor(parser.modl(), ancestry).modl;
  }
}

export class ParseCancellationException implements Error {
  constructor(readonly message: string, readonly name: string) { }
}

class ThrowingErrorListener extends ErrorListener {
  public static INSTANCE: ThrowingErrorListener = new ThrowingErrorListener();

  syntaxError(recognizer, offendingSymbol, line: number, column: number, msg: string, e) {
    throw new ParseCancellationException(
      'line ' + line + ':' + column + ' ' + msg + ' ' + offendingSymbol,
      'Syntax Error',
    );
  }
}
