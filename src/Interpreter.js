"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var antlr4 = require("antlr4");
var modlParser = require("./gen/MODL/MODLParser");
var modlLexer = require("./gen/MODL/MODLLexer");
var inputStream = new antlr4.InputStream("a=b");
var lexer = new modlLexer.MODLLexer(inputStream);
var commonTokenStream = new antlr4.CommonTokenStream(lexer);
var parser = new modlParser.MODLParser(commonTokenStream);
var parseTree = parser.modl();
//# sourceMappingURL=Interpreter.js.map
