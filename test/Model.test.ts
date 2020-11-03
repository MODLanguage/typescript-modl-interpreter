// @modl-interpreter-ignore
import {
  ModlPair,
  ModlQuoted,
  ModlString,
} from '../lib/modl-interpreter/Model';
// @modl-interpreter-ignore
// tslint:disable-next-line:no-var-requires
const chai = require('chai');

const expect = chai.expect;
describe('Model', () => {
  it('should be able to create a simple ModlPair', () => {
    const key = new ModlQuoted('key');
    const value = new ModlString('value');

    const expectedKey = new ModlQuoted('key');
    const expectedValue = new ModlString('value');

    const pair = new ModlPair(key, value);

    expect(pair.key).to.equal(expectedKey);
    expect(pair.value).to.equal(expectedValue);
  });
});
