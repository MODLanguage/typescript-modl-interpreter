import { CommonTokenStream, InputStream, Lexer, Recognizer } from 'antlr4';
import { ErrorListener } from 'antlr4/error/ErrorListener';
import { MODLLexer } from '../../dist/gen/MODL/MODLLexer';
import { MODLParser } from '../../dist/gen/MODL/MODLParser';
import { Modl } from './Model';
import { visitModl } from './ModlParsedVisitor';

/**
 * Parser
 */
export class Parser {
  /**
   * Parses parser
   * @param s
   * @returns parse
   */
  parse(s: string): Modl {
    const inputStream = new InputStream(s);
    const lexer = new MODLLexer(inputStream) as Lexer;
    const commonTokenStream = new CommonTokenStream(lexer);
    const parser = new MODLParser(commonTokenStream);

    lexer.addErrorListener(ThrowingErrorListener.INSTANCE);
    parser.addErrorListener(ThrowingErrorListener.INSTANCE);

    const context = parser.modl();
    return visitModl(context);
  }
}

/**
 * Parse cancellation exception
 */
export class ParseCancellationException implements Error {
  /**
   * Creates an instance of parse cancellation exception.
   * @param message
   * @param name
   */
  constructor(readonly message: string, readonly name: string) { }
}

/**
 * Throwing error listener
 */
class ThrowingErrorListener extends ErrorListener {
  public static INSTANCE: ThrowingErrorListener = new ThrowingErrorListener();

  /**
   * Syntaxs error
   * @param recognizer
   * @param offendingSymbol
   * @param line
   * @param column
   * @param msg
   */
  syntaxError(recognizer: Recognizer, offendingSymbol: any, line: number, column: number, msg: string) {
    if (recognizer) {
      const message = `line ${line}:${column} ${msg} ${offendingSymbol}`;
      throw new ParseCancellationException(message, 'Syntax Error');
    } else {
      throw new ParseCancellationException("'recognizer' parameter not present", 'Bad Parameter');
    }
  }
}
