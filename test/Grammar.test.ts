import { fail } from 'assert';
import { expect } from 'chai';
import { readFileSync } from 'fs';
import { Interpreter } from '../src/modl-interpreter/Interpreter';

type GrammarTest = {
  id: string;
  input: string;
  expected_output: string;
  compliance_level: number;
};

const tests = JSON.parse(readFileSync('./test/level_0_tests.json', {}).toString()) as GrammarTest[];

const errors = JSON.parse(readFileSync('./test/level_0_errors.json', {}).toString()) as GrammarTest[];

describe('Grammar - compliance level 0', () => {
  it('should be able to read the level_0_tests.json file', () => {
    expect(tests.length).to.be.greaterThan(0);
  });

  it('should be able to read the level_0_errors.json file', () => {
    expect(errors.length).to.be.greaterThan(0);
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

  it('should be able to detect compliance level 0 MODL errors', () => {
    if (errors.length > 0) {
      errors.forEach((test) => {
        const interpreter = new Interpreter();

        expect(interpreter.interpretToJsonString.bind(interpreter, test.input)).to.throw(test.expected_output);
      });
    } else {
      fail('There are no compliance level 0 error tests');
    }
  });
});
