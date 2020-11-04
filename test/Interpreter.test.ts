import { Interpreter } from '../lib/modl-interpreter/Interpreter';
import { expect } from 'chai';

describe('TypeScript Interpreter', () => {
  it('should be able to parse a simple MODL string to a JSON String', () => {
    expect(new Interpreter().interpretToJsonString('a=b')).to.equal('{"a":"b"}');
  });

  it('should be able to parse a simple MODL string to a pretty JSON String', () => {
    expect(new Interpreter().interpretToPrettyJsonString('a=b')).to.equal('{\n    "a": "b"\n}');
  });

  it('should be able to parse a simple MODL string to a JSON object', () => {
    expect(JSON.stringify(new Interpreter().interpretToJsonObject('a=b'))).to.eq('{"a":"b"}');
  });

  it('should be able to parse a simple MODL string to a Modl object', () => {
    const jsonObject = new Interpreter().interpretToJsonObject('a=b');
    expect(JSON.stringify(jsonObject)).to.eq('{"a":"b"}');
  });

  it('should be able to parse a simple MODL map to a Modl object', () => {
    const jsonObject = new Interpreter().interpretToJsonObject('a(b=c)');
    expect(JSON.stringify(jsonObject)).to.eq('{"a":{"b":"c"}}');
  });

  it('should be able to parse a simple MODL array to a Modl object', () => {
    const jsonObject = new Interpreter().interpretToJsonObject('[a=b]');
    expect(JSON.stringify(jsonObject)).to.eq('[{"a":"b"}]');
  });

  it('should be able to throw an Error on invalid MODL', () => {
    let interpreter = new Interpreter();
    expect(interpreter.interpretToJsonObject.bind(interpreter, 'a;b')).to.throw();
  });
});
