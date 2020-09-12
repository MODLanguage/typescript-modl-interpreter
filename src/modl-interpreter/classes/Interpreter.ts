import * as modl from './Model';
import { Modl } from './Model';
import { Parser } from './Parser';

export class Interpreter {
  interpretToJsonString(s: string) {
    const modl = this.interpret(s);
    return 'fail';
  }

  interpretToPrettyJsonString(s: string) {
    const modl = new Parser().parse(s);
    return 'fail';
  }

  interpretToJsonObject(s: string): Object {
    const modl = new Parser().parse(s);
    return {};
  }

  interpret(s: string) {
    return new Parser().parse(s);
  }
}
