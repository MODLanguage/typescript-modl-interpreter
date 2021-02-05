import { Parser } from 'antlr4';
import { ErrorListener } from 'antlr4/error/ErrorListener';

export declare class MODLParser implements Parser {
  constructor(stream: CommonTokenStream);
  addErrorListener(listener: ErrorListener): void;
  modl(): ModlContext;
}

export declare class ModlContext {}
