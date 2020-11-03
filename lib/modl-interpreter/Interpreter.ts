import { modlToJson } from './ModlToJson';
import { Parser } from './Parser';

export class Interpreter {
  interpretToJsonString(s: string) {
    const modl = this.interpret(s);
    const jsonObject = modlToJson(modl);
    return JSON.stringify(jsonObject);
  }

  interpretToPrettyJsonString(s: string) {
    const modl = this.interpret(s);
    const jsonObject = modlToJson(modl);
    return JSON.stringify(jsonObject, undefined, 4);
  }

  interpretToJsonObject(s: string): object {
    const modl = this.interpret(s);
    return modlToJson(modl);
  }

  interpret(s: string) {
    return new Parser().parse(s);
  }
}
