"use strict";
exports.__esModule = true;
// @modl-interpreter-ignore
var Model_1 = require("../lib/modl-interpreter/Model");
// @modl-interpreter-ignore
// tslint:disable-next-line:no-var-requires
var chai = require('chai');
var expect = chai.expect;
describe('Model', function () {
    it('should be able to create a simple ModlPair', function () {
        var key = new Model_1.ModlQuoted('key');
        var value = new Model_1.ModlString('value');
        var expectedKey = new Model_1.ModlQuoted('key');
        var expectedValue = new Model_1.ModlString('value');
        var pair = new Model_1.ModlPair(key, value);
        expect(pair.key).to.equal(expectedKey);
        expect(pair.value).to.equal(expectedValue);
    });
});
