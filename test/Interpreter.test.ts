// @modl-interpreter-ignore
import {Modl} from "../src/modl-interpreter/Model";
import {Interpreter} from '../src/modl-interpreter/Interpreter';
// @modl-interpreter-ignore
let chai = require('chai');

const expect = chai.expect;
describe('TypeScript Interpreter', () => {

    it('should be able to parse a simple MODL string to a JSON String', () => {
        expect(new Interpreter().interpretToJsonString('a=b')).to.equal('{"a": "b"}');
    });

    it('should be able to parse a simple MODL string to a pretty JSON String', () => {
        expect(new Interpreter().interpretToPrettyJsonString('a=b')).to.equal('{\n' +
            '    "a": "b"\n' +
            '}');
    });

    it('should be able to parse a simple MODL string to a JSON object', () => {
        expect(new Interpreter().interpretToJsonObject('a=b')).to.equal(JSON.parse('{"a": "b"}'));
    });

    it('should be able to parse a simple MODL string to a Modl object', () => {
        expect(new Interpreter().interpretToJsonObject('a=b')).to.eq(new Modl());
    });

    it('should be able to throw an Error on invalid MODL', () => {
        let interpreter = new Interpreter();
        expect(interpreter.interpretToJsonObject.bind(interpreter, 'a;b')).to.throw("line 1:1 no viable alternative at input 'a;'");
    });

});
