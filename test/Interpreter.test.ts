// @ts-ignore
let mocha = require('mocha');
// @ts-ignore
let chai = require('chai');

// let interpreter = require('../src/Interpreter.ts');
import {Interpreter} from '../src/Interpreter';

const expect = chai.expect;
describe('TypeScript Interpreter', () => {

    it('should be able to parse a simple MODL string', () => {
        expect(new Interpreter().interpret('a=b'));
    });

});
