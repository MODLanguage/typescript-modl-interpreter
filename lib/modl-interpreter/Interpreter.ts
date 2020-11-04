import { modlToJson } from './ModlToJson';
import { Parser } from './Parser';

/**
 * Interpreter
 */
export class Interpreter {
  /**
   * Interprets to json string
   * @param s
   * @returns
   */
  interpretToJsonString(s: string) {
    const modl = this.interpret(s);
    const jsonObject = modlToJson(modl);
    return JSON.stringify(jsonObject);
  }

  /**
   * Interprets to pretty json string
   * @param s
   * @returns
   */
  interpretToPrettyJsonString(s: string) {
    const modl = this.interpret(s);
    const jsonObject = modlToJson(modl);
    return JSON.stringify(jsonObject, undefined, 4);
  }

  /**
   * Interprets to json object
   * @param s
   * @returns to json object
   */
  interpretToJsonObject(s: string): object {
    const modl = this.interpret(s);
    return modlToJson(modl);
  }

  /**
   * Interprets interpreter
   * @param s
   * @returns
   */
  interpret(s: string) {
    return new Parser().parse(s);
  }
}
