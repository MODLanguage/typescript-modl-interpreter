import { expect } from 'chai';
import { createStringEscapeReplacer } from '../src/modl-interpreter/Utils';

describe('Unicode', () => {
  it('should be able to convert unicode correctly with slashes', () => {
    expect(createStringEscapeReplacer().replace('\\u0022b\\u0022')).to.equal('"b"');
  });
  it('should be able to convert unicode correctly with tilde', () => {
    expect(createStringEscapeReplacer().replace('~u0022b~u0022')).to.equal('"b"');
  });
  it('should be able to convert unicode correctly', () => {
    expect(createStringEscapeReplacer().replace('\\u022b\\u022b')).to.equal('ȫȫ');
  });
});
