import { Parser } from './Parser';

export class Interpreter {
  interpretToJsonString(s: string) {
    const modl = this.interpret(s);
    return JSON.stringify(modl);
  }

  interpretToPrettyJsonString(s: string) {
    const modl = new Parser().parse(s);
    return JSON.stringify(modl);
  }

  interpretToJsonObject(s: string): Object {
    const modl = new Parser().parse(s);
    return JSON.stringify(modl);
  }

  interpret(s: string) {
    return new Parser().parse(s);
  }
}
