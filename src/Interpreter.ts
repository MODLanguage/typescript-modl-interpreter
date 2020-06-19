import antlr4 = require("antlr4");
import modlParser = require("./gen/MODL/MODLParser");
import modlLexer = require("./gen/MODL/MODLLexer");

const inputStream = new antlr4.InputStream("a=b");
const lexer = new modlLexer.MODLLexer(inputStream);
const commonTokenStream = new antlr4.CommonTokenStream(lexer);
const parser = new modlParser.MODLParser(commonTokenStream);
const parseTree = parser.modl();

