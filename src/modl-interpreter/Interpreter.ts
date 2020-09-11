import * as modl from './Model';
import {Modl} from './Model';
import {Parser} from './Parser';

export class Interpreter {
  interpretToJsonString(s: string): string {
    let modl: Modl = this.interpret(s);
    return 'fail';
  }

  interpretToPrettyJsonString(s: string): string {
    new Parser().parse(s);
    return 'fail';
  }

  interpretToJsonObject(s: string): Object {
    new Parser().parse(s);
    return {};
  }

  interpret(s: string): modl.Modl {
    return new Parser().parse(s);
  }
}
