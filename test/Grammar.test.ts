import { fail } from 'assert';
import { expect } from 'chai';
import { readFileSync } from 'fs';
import { Interpreter } from '../src/modl-interpreter/Interpreter';

const deepEql = require('deep-eql');

type GrammarTest = {
  id: string;
  input: string;
  expected_output: string;
  compliance_level: number;
};

const tests = JSON.parse(readFileSync('../grammar/tests/base_tests.json', {}).toString()) as GrammarTest[];

const extra = JSON.parse(readFileSync('../grammar/tests/extra_tests.json', {}).toString()) as GrammarTest[];

describe('Grammar - compliance level 0', () => {
  it('should be able to read the base_tests.json file', () => {
    expect(tests.length).to.be.greaterThan(0);
  });

  it('should be able to read the extra_tests.json file', () => {
    expect(extra.length).to.be.greaterThan(0);
  });

  it('should be able to parse compliance level 0 MODL', () => {
    if (tests.length > 0) {
      let overallResult = true;

      tests.forEach((test) => {
        try {
          const result = new Interpreter().interpretToJsonString(test.input);

          const same = deepEql(JSON.parse(test.expected_output), JSON.parse(result)) as boolean;

          if (!same) {
            console.log(`Error for test : ${test.id}`);
            console.log('expected: ' + test.expected_output);
            console.log('received: ' + result);
          }
          overallResult &&= same;
        } catch (e) {
          console.log(`Error for test : ${test.id} : ${e.message}`);
          overallResult = false;
        }
      });
      expect(overallResult).to.be.true;
    } else {
      fail('There are no compliance level 0 tests');
    }
  });

  it('should be able to parse compliance level 0 MODL extra tests', () => {
    if (extra.length > 0) {
      let overallResult = true;

      extra.forEach((test) => {
        try {
          const result = new Interpreter().interpretToJsonString(test.input);

          const same = deepEql(JSON.parse(test.expected_output), JSON.parse(result)) as boolean;

          if (!same) {
            console.log(`Error for test : ${test.id}`);
            console.log('expected: ' + test.expected_output);
            console.log('received: ' + result);
          }
          overallResult &&= same;
        } catch (e) {
          console.log(`Error for test : ${test.id} : ${e.message}`);
          overallResult = false;
        }
      });
      expect(overallResult).to.be.true;
    } else {
      fail('There are no compliance level 0 extra tests');
    }
  });
});
