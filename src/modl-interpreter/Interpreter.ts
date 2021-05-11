import { parser } from 'modl-parser';
import { modlToJson } from './ModlToJson';

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
    const jsonObject = this.interpretToJsonObject(s);
    return JSON.stringify(jsonObject);
  }

  /**
   * Interprets to pretty json string
   * @param s
   * @returns
   */
  interpretToPrettyJsonString(s: string) {
    const jsonObject = this.interpretToJsonObject(s);
    return JSON.stringify(jsonObject, undefined, 4);
  }

  /**
   * Interprets to json object
   * @param s
   * @returns to json object
   */
  interpretToJsonObject(s: string): object | null {
    const modl = this.interpret(s);
    return modlToJson(modl);
  }

  /**
   * Interprets interpreter
   * @param s
   * @returns
   */
  interpret(s: string) {
    return parser(s);
  }
}
