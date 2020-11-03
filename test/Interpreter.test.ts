// @modl-interpreter-ignore
import { Interpreter } from '../lib/modl-interpreter/classes/Interpreter';
// @modl-interpreter-ignore
let chai = require('chai');

const expect = chai.expect;
describe('TypeScript Interpreter', () => {
  it('should be able to parse a simple MODL string to a JSON String', () => {
    expect(new Interpreter().interpretToJsonString('a=b')).to.equal(
      '{"a": "b"}'
    );
  });

  it('should be able to parse a simple MODL string to a pretty JSON String', () => {
    expect(new Interpreter().interpretToPrettyJsonString('a=b')).to.equal(
      '{\n    "a": "b"\n}'
    );
  });

  it('should be able to parse a simple MODL string to a JSON object', () => {
    expect(new Interpreter().interpretToJsonObject('a=b')).to.equal(
      JSON.parse('{"a": "b"}')
    );
  });

  it('should be able to parse a simple MODL string to a Modl object', () => {
    const jsonObject = new Interpreter().interpretToJsonObject('a=b');
    expect(JSON.stringify(jsonObject)).to.eq('{"a":"b"}');
  });

  it('should be able to parse a simple MODL map to a Modl object', () => {
    const jsonObject = new Interpreter().interpretToJsonObject('a(b=c)');
    expect(JSON.stringify(jsonObject)).to.eq('{"a":{"b":"c"}}');
  });

  it('should be able to throw an Error on invalid MODL', () => {
    let interpreter = new Interpreter();
    expect(interpreter.interpretToJsonObject.bind(interpreter, 'a;b')).to.throw(
      "line 1:1 no viable alternative at input 'a;'"
    );
  });
});
