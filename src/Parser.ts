import antlr4 = require("antlr4");
import modlParser = require("./gen/MODL/MODLParser");
import modlLexer = require("./gen/MODL/MODLLexer");
import {Modl} from "./Model";
import {ModlParsedVisitor} from "./ModlParsedVisitor";

export class Parser {
    parse(s: string): Modl {
        const inputStream = new antlr4.InputStream(s);
        const lexer = new modlLexer.MODLLexer(inputStream);
        const commonTokenStream = new antlr4.CommonTokenStream(lexer);
        const parser = new modlParser.MODLParser(commonTokenStream);

        lexer.addErrorListener(ThrowingErrorListener.INSTANCE);
        parser.addErrorListener(ThrowingErrorListener.INSTANCE);

        return new ModlParsedVisitor(parser.modl()).getModl();
    }
}

export class ParseCancellationException implements Error {
    message: string;
    name: string;

    constructor(s: string) {
        this.message = s;
    }
}

class ThrowingErrorListener extends antlr4.error.ErrorListener {

    public static INSTANCE: ThrowingErrorListener = new ThrowingErrorListener();

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        throw new ParseCancellationException("line " + line + ":" + column + " " + msg);
    }

}
