import antlr4 = require("antlr4");
import modlParser = require("./gen/MODL/MODLParser");
import modlLexer = require("./gen/MODL/MODLLexer");
import * as modl from './Model';

export class Interpreter {
    parse(s: string): modlParser.MODLParser {
        const inputStream = new antlr4.InputStream(s);
        const lexer = new modlLexer.MODLLexer(inputStream);
        const commonTokenStream = new antlr4.CommonTokenStream(lexer);
        const parser = new modlParser.MODLParser(commonTokenStream);
        return parser.modl();
    }

    interpretToJsonString(s: string): string {
        this.parse(s);
        let parser = this.interpret(s);
        return "fail";
    }

    interpretToPrettyJsonString(s: string): string {
        this.parse(s);
        return "fail";
    }

    interpretToJsonObject(s: string): Object {
        this.parse(s);
        return {};
    }

    interpret(s: string): modl.Modl {
        this.parse(s);
        return new modl.Modl();
    }
}
