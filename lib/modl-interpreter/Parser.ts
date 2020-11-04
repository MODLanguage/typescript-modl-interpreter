import * as antlr4 from 'antlr4';
import * as modlParser from '../gen/MODL/MODLParser';
import * as modlLexer from '../gen/MODL/MODLLexer';
import { Modl } from './Model';
import { visitModl } from './ModlParsedVisitor';
import { ErrorListener } from 'antlr4/error/ErrorListener';
import { Recognizer } from 'antlr4';

export class Parser {
  parse(s: string): Modl {
    const inputStream = new antlr4.InputStream(s);
    const lexer = new modlLexer.MODLLexer(inputStream);
    const commonTokenStream = new antlr4.CommonTokenStream(lexer);
    const parser = new modlParser.MODLParser(commonTokenStream);

    lexer.addErrorListener(ThrowingErrorListener.INSTANCE);
    parser.addErrorListener(ThrowingErrorListener.INSTANCE);

    const context = parser.modl();
    return visitModl(context);
  }
}

export class ParseCancellationException implements Error {
  constructor(readonly message: string, readonly name: string) {}
}

class ThrowingErrorListener extends ErrorListener {
  public static INSTANCE: ThrowingErrorListener = new ThrowingErrorListener();

  syntaxError(
    recognizer: Recognizer,
    offendingSymbol,
    line: number,
    column: number,
    msg: string
  ) {
    if (recognizer) {
      const message = `line ${line}:${column} ${msg} ${offendingSymbol}`;
      throw new ParseCancellationException(message, 'Syntax Error');
    } else {
      throw new ParseCancellationException(
        "'recognizer' parameter not present",
        'Bad Parameter'
      );
    }
  }
}
