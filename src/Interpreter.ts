import antlr4 = require("antlr4");
import modlParser = require("./gen/MODL/MODLParser");
import modlLexer = require("./gen/MODL/MODLLexer");

export class Interpreter {
    interpret(s: string) {
        const inputStream = new antlr4.InputStream(s);
        const lexer = new modlLexer.MODLLexer(inputStream);
        const commonTokenStream = new antlr4.CommonTokenStream(lexer);
        const parser = new modlParser.MODLParser(commonTokenStream);
        return parser.modl();
    }
}
