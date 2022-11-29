import { expect } from 'chai';
import { Interpreter } from '../src/modl-interpreter/Interpreter';

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

  it('should be able to parse telephone numbers to strings instead of numbers', () => {
    const jsonObject = new Interpreter().interpretToJsonObject('a=+441270123456');
    expect(JSON.stringify(jsonObject)).to.eq('{"a":"+441270123456"}');
  });

  it('should be able to parse zero-prefixed numbers to strings instead of numbers', () => {
    const jsonObject = new Interpreter().interpretToJsonObject('a=0441270123456');
    expect(JSON.stringify(jsonObject)).to.eq('{"a":"0441270123456"}');
  });

  it('should be able to parse integers', () => {
    const jsonObject = new Interpreter().interpretToJsonObject('a=441270123456');
    expect(JSON.stringify(jsonObject)).to.eq('{"a":441270123456}');
  });

  it('should be able to parse floats', () => {
    const jsonObject = new Interpreter().interpretToJsonObject('a=4.41270123E6');
    expect(JSON.stringify(jsonObject)).to.eq('{"a":4412701.23}');
  });

  it('should be able to throw an Error on invalid MODL', () => {
    let interpreter = new Interpreter();
    expect(interpreter.interpretToJsonObject.bind(interpreter, 'a;b')).to.throw();
  });

  it('should be able to parse brace-strings - 1', () => {
    const jsonObject = new Interpreter().interpretToJsonObject('a={4.41270123E6}');
    expect(JSON.stringify(jsonObject)).to.eq('{"a":"{4.41270123E6}"}');
  });

  it('should be able to parse brace-strings - 2', () => {
    const jsonObject = new Interpreter().interpretToJsonObject('a={4.41~}270123E6}');
    expect(JSON.stringify(jsonObject)).to.eq('{"a":"{4.41}270123E6}"}');
  });

  it('should be able to parse brace-strings - 3', () => {
    const jsonObject = new Interpreter().interpretToJsonObject('a={4.41\\}270123E6}');
    expect(JSON.stringify(jsonObject)).to.eq('{"a":"{4.41}270123E6}"}');
  });

  it('should be able to parse brace-strings - 4', () => {
    const jsonObject = new Interpreter().interpretToJsonObject('a={{{{4.41270123E6}');
    expect(JSON.stringify(jsonObject)).to.eq('{"a":"{{{{4.41270123E6}"}');
  });

  it('should be able to parse brace-strings - 5', () => {
    const jsonObject = new Interpreter().interpretToJsonObject(
      "a={?(typeof($n.l)=='array' {['record' $n.l[2]] ['locale' $locale] ['settings' $settings]~} -> process_contacts {['record' $n.l.c] ['locale' $locale] ['settings' $settings]~} -> process_contacts) }"
    );
    expect(JSON.stringify(jsonObject)).to.eq(
      "{\"a\":\"{?(typeof($n.l)=='array' {['record' $n.l[2]] ['locale' $locale] ['settings' $settings]} -> process_contacts {['record' $n.l.c] ['locale' $locale] ['settings' $settings]} -> process_contacts) }\"}"
    );
  });

  it('should be able to parse brace-strings - 6', () => {
    const jsonObject = new Interpreter().interpretToJsonObject('a={}');
    expect(JSON.stringify(jsonObject)).to.eq('{"a":"{}"}');
  });

  it('should be able to parse brace-strings - 7', () => {
    const jsonObject = new Interpreter().interpretToJsonObject('a={~~}');
    expect(JSON.stringify(jsonObject)).to.eq('{"a":"{~}"}');
  });

  it('should be able to parse brace-strings - 8', () => {
    const jsonObject = new Interpreter().interpretToJsonObject('a={\\\\}');
    expect(JSON.stringify(jsonObject)).to.eq('{"a":"{\\\\}"}');
  });

  it('should be able to throw an Error on invalid brace-strings - 1', () => {
    let interpreter = new Interpreter();
    expect(interpreter.interpretToJsonObject.bind(interpreter, 'a={;b=c')).to.throw();
  });
});
