"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const antlr4 = require("antlr4");
const modlParser = require("./gen/MODL/MODLParser");
const modlLexer = require("./gen/MODL/MODLLexer");

class Interpreter {
    interpret(s) {
        const inputStream = new antlr4.InputStream(s);
        const lexer = new modlLexer.MODLLexer(inputStream);
        const commonTokenStream = new antlr4.CommonTokenStream(lexer);
        const parser = new modlParser.MODLParser(commonTokenStream);
        return parser.modl();
    }
}

exports.Interpreter = Interpreter;
//# sourceMappingURL=Interpreter.js.map
