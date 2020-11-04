import { fail } from 'assert';
import { expect } from 'chai';
import { readFileSync } from 'fs';
import { Interpreter } from '../lib/modl-interpreter/Interpreter';

type GrammarTest = {
  id: string;
  input: string;
  expected_output: string;
  compliance_level: number;
};

const tests = JSON.parse(
  readFileSync('../grammar/tests/level_0_tests.json', {}).toString()
) as GrammarTest[];

describe('Grammar - compliance level 0', () => {
  it('should be able to read the base_tests.json file', () => {
    expect(tests.length).to.be.greaterThan(0);
  });

  it('should be able to parse compliance level 0 MODL', () => {
    if (tests.length > 0) {
      tests.forEach((test) => {
        const result = new Interpreter().interpretToJsonString(test.input);
        expect(result).to.equal(test.expected_output);
      });
    } else {
      fail('There are no compliance level 0 tests');
    }
  });
});
