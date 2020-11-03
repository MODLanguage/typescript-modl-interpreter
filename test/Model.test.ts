// @modl-interpreter-ignore
import {
  ModlPair,
  ModlQuoted,
  ModlString,
} from '../lib/modl-interpreter/Model';
// @modl-interpreter-ignore

import { expect } from 'chai';

describe('Model', () => {
  it('should be able to create a simple ModlPair', () => {
    const key = new ModlQuoted('key');
    const value = new ModlString('value');

    const pair = new ModlPair(key, value);

    expect((pair.key as ModlQuoted).value).to.equal('key');
    expect((pair.value as ModlString).value).to.equal('value');
  });
});
