import { test } from 'node:test';
import assert from 'node:assert';
import { titleCase } from './titlecase.js';

test('titleCase: basic capitalization', () => {
  assert.strictEqual(titleCase('hello world'), 'Hello World');
});

test('titleCase: single word', () => {
  assert.strictEqual(titleCase('hello'), 'Hello');
});

test('titleCase: already capitalized', () => {
  assert.strictEqual(titleCase('HELLO WORLD'), 'Hello World');
});

test('titleCase: mixed case', () => {
  assert.strictEqual(titleCase('HeLLo WoRLd'), 'Hello World');
});

test('titleCase: empty string', () => {
  assert.strictEqual(titleCase(''), '');
});

test('titleCase: multiple spaces between words', () => {
  assert.strictEqual(titleCase('hello   world'), 'Hello   World');
});

test('titleCase: tabs and mixed whitespace', () => {
  assert.strictEqual(titleCase('hello\tworld\n'), 'Hello\tWorld\n');
});

test('titleCase: leading whitespace preserved', () => {
  assert.strictEqual(titleCase('  hello world'), '  Hello World');
});

test('titleCase: trailing whitespace preserved', () => {
  assert.strictEqual(titleCase('hello world  '), 'Hello World  ');
});

test('titleCase: leading and trailing whitespace preserved', () => {
  assert.strictEqual(titleCase('  hello world  '), '  Hello World  ');
});

test('titleCase: throws on non-string input (number)', () => {
  assert.throws(() => titleCase(123), TypeError);
});

test('titleCase: throws on non-string input (null)', () => {
  assert.throws(() => titleCase(null), TypeError);
});

test('titleCase: throws on non-string input (undefined)', () => {
  assert.throws(() => titleCase(undefined), TypeError);
});

test('titleCase: throws on non-string input (object)', () => {
  assert.throws(() => titleCase({}), TypeError);
});

test('titleCase: single letter words', () => {
  assert.strictEqual(titleCase('a b c'), 'A B C');
});

test('titleCase: words with special characters are not split', () => {
  assert.strictEqual(titleCase('hello-world foo_bar'), 'Hello-world Foo_bar');
});

test('titleCase: only whitespace', () => {
  assert.strictEqual(titleCase('   '), '   ');
});
