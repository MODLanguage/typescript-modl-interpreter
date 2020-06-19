"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mocha = require('mocha');
let chai = require('chai');
const Interpreter_1 = require("../src/Interpreter");
const expect = chai.expect;
describe('TypeScript Interpreter', () => {
    it('should be able to parse a simple MODL string', () => {
        expect(new Interpreter_1.Interpreter().interpret('a=b'));
    });
});
//# sourceMappingURL=Interpreter.test.js.map