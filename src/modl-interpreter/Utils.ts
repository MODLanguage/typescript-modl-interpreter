export interface StringEscapeReplacer {
  replace(stringToTransform: string): string;
}

export const createStringEscapeReplacer = (): StringEscapeReplacer => {
  return new StringEscapeReplacerImpl();
};

class StringEscapeReplacerImpl implements StringEscapeReplacer {
  replace(stringToTransform: string): string {
    let result = convertUnicodeSequences(stringToTransform);

    for (let i = 0; i < result.length; i++) {
      replacements.forEach((v, k) => {
        if (result.startsWith(k, i)) {
          result = result.substring(0, i) + v + result.substring(i + k.length);
        }
      });
    }
    return result;
  }
}

const replacements: Map<string, string> = new Map([
  ['\\%', '%'],
  ['~%', '%'],
  ['~\\', '\\'],
  ['\\\\', '\\'],
  ['~~', '~'],
  ['\\~', '~'],
  ['~(', '('],
  ['\\(', '('],
  ['~)', ')'],
  ['\\)', ')'],
  ['~[', '['],
  ['\\[', '['],
  ['~]', ']'],
  ['\\]', ']'],
  ['~{', '{'],
  ['\\{', '{'],
  ['~}', '}'],
  ['\\}', '}'],
  ['~;', ';'],
  ['\\;', ';'],
  ['~:', ':'],
  ['\\:', ':'],
  ['~`', '`'],
  ['\\`', '`'],
  ['~"', '"'],
  ['\\"', '"'],
  ['~=', '='],
  ['\\=', '='],
  ['~/', '/'],
  ['\\/', '/'],
  ['<', '<'],
  ['\\<', '<'],
  ['~>', '>'],
  ['\\>', '>'],
  ['~&', '&'],
  ['\\&', '&'],
  ['!', '!'],
  ['\\!', '!'],
  ['~|', '|'],
  ['\\|', '|'],
  ['\\t', '\t'],
  ['\\n', '\n'],
  ['\\b', '\b'],
  ['\\f', '\f'],
  ['\\r', '\r'],
]);

const BACKSLASH_U = '\\u';

const TILDE_U = '~u';

const TILDE = '~';

const BACKSLASH = '\\';

const HEX = 16;

const digits = '0123456789';

/**
 * Convert explicit unicode escape sequences to unicode characters.
 * (non-recursive implementation)
 *
 * @param str a String possible containing escape sequences.
 * @return the string with escape sequences converted to unicode characters.
 */
const convertUnicodeSequences = (str: string): string => {
  let start = 0;
  let result = str;
  while (start < result.length) {
    // We could have a backslash-u escape sequence or a ~u escape sequence
    const backslashUIndex = result.indexOf(BACKSLASH_U, start);
    const tildeUIndex = result.indexOf(TILDE_U, start);

    // Filter out cases with no escape sequences.
    let unicodeStrIdx: number;
    if (tildeUIndex < 0 && backslashUIndex < 0) {
      break;
    } else if (tildeUIndex < 0) {
      unicodeStrIdx = backslashUIndex; // No ~? Must be backslash
    } else if (backslashUIndex < 0) {
      unicodeStrIdx = tildeUIndex; // No backslash? Must be ~
    } else {
      // Pick the first escaped character and proceed with that one.
      unicodeStrIdx = Math.min(backslashUIndex, tildeUIndex);
    }

    const tryParseResult = tryParse(result, unicodeStrIdx + 2);

    // Next time round the loop we start searching after the current escape sequence.
    start = unicodeStrIdx + 1;

    // If the escape sequence is itself escaped then don't replace it
    if (!escapeSequenceIsEscaped(result, unicodeStrIdx)) {
      // Get the codepoint value and replace the escape sequence
      if (tryParseResult.codePoint > 0) {
        const chars = String.fromCodePoint(tryParseResult.codePoint);
        result = replace(result, chars, unicodeStrIdx, tryParseResult.length + 2);
      }
    }
  }
  return result;
};

const escapeSequenceIsEscaped = (result: string, unicodeStrIdx: number): boolean => {
  return (
    unicodeStrIdx > 0 && (result.charAt(unicodeStrIdx - 1) === TILDE || result.charAt(unicodeStrIdx - 1) === BACKSLASH)
  );
};

/**
 * Replace a unicode value in a String
 *
 * @param s             the String with the unicode value to be replaced.
 * @param value         the replacement character
 * @param unicodeStrIdx the index of the unicode escape sequence
 * @param length        the number of characters to be replaced.
 * @return a String with the unicode escape sequence replaced by the replacement character
 */
const replace = (s: string, value: string, unicodeStrIdx: number, length: number): string => {
  const left = s.substring(0, unicodeStrIdx);
  const end = Math.min(s.length, unicodeStrIdx + length);
  const right = s.substring(end);
  return left + value + right;
};

/**
 * Check whether the value is a valid unicode codepoint
 *
 * @param value the int to check
 * @return true if the value is a valid unicode codepoint
 */
const isValidRange = (value: number): boolean => {
  return (
    (value >= 0x100000 && value <= 0x10ffff) ||
    (value >= 0x10000 && value <= 0xfffff) ||
    (value >= 0 && value <= 0xd7ff) ||
    (value >= 0xe000 && value <= 0xffff)
  );
};

/**
 * Can we get `n` hex digits from the string at the `idx` location?
 *
 * @param s   the String to check
 * @param idx the index to start searching in the string
 * @param n   the number of digits needed
 * @return true if enough digits are available
 */
const hasEnoughDigits = (s: string, idx: number, n: number): boolean => {
  let i = 0;
  while (i < n && idx + i < s.length) {
    const c = s[idx + i];
    if (!digits.includes(c) && 'abcdefABCDEF'.indexOf(c) <= -1) {
      return false;
    }
    i++;
  }
  return i === n;
};

/**
 * Attempt to parse a unicode character starting at `idx` in `str`
 *
 * @param str the String to parse
 * @param idx the starting index
 * @return a TryParseResult with codepoint set to 0 on failure.
 */
const tryParse = (str: string, idx: number): TryParseResult => {
  // Check for a 6-digit unicode value
  if (hasEnoughDigits(str, idx, 6)) {
    const value = getPossibleUnicodeValue(str, idx, 6);
    if (isValidRange(value)) {
      return new TryParseResult(value, 6);
    }
  }

  // Check for a 5-digit unicode value
  if (hasEnoughDigits(str, idx, 5)) {
    const value = getPossibleUnicodeValue(str, idx, 5);
    if (isValidRange(value)) {
      return new TryParseResult(value, 5);
    }
  }

  // Check for a 4-digit unicode value
  if (hasEnoughDigits(str, idx, 4)) {
    const value = getPossibleUnicodeValue(str, idx, 4);
    if (isValidRange(value)) {
      return new TryParseResult(value, 4);
    }
  }

  // Failed
  return new TryParseResult(0, 4);
};

const getPossibleUnicodeValue = (str: string, idx: number, i: number): number => {
  return Number.parseInt(str.substring(idx, idx + i), HEX);
};

/**
 * Class to hold the result of the tryParse method
 */
class TryParseResult {
  readonly codePoint: number;

  readonly length: number;

  /**
   * Constructor
   *
   * @param codePoint the codepoint that was found, or zero
   * @param length    the number of characters used by the codepoint.
   */
  constructor(codePoint: number, length: number) {
    this.codePoint = codePoint;
    this.length = length;
  }
}
