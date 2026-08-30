import { test } from 'node:test';
import assert from 'node:assert';
import { titleCase } from './titlecase.js';

test('titleCase - basic single word', () => {
  assert.strictEqual(titleCase('hello'), 'Hello');
});

test('titleCase - already capitalized word', () => {
  assert.strictEqual(titleCase('Hello'), 'Hello');
});

test('titleCase - all caps word', () => {
  assert.strictEqual(titleCase('HELLO'), 'Hello');
});

test('titleCase - multiple words with single space', () => {
  assert.strictEqual(titleCase('hello world'), 'Hello World');
});

test('titleCase - multiple words with multiple spaces', () => {
  assert.strictEqual(titleCase('hello  world'), 'Hello  World');
});

test('titleCase - multiple words with mixed whitespace', () => {
  assert.strictEqual(titleCase('hello\tworld'), 'Hello\tWorld');
  assert.strictEqual(titleCase('hello\nworld'), 'Hello\nWorld');
});

test('titleCase - leading whitespace preserved', () => {
  assert.strictEqual(titleCase('  hello world'), '  Hello World');
});

test('titleCase - trailing whitespace preserved', () => {
  assert.strictEqual(titleCase('hello world  '), 'Hello World  ');
});

test('titleCase - leading and trailing whitespace preserved', () => {
  assert.strictEqual(titleCase('  hello world  '), '  Hello World  ');
});

test('titleCase - multiple spaces between words', () => {
  assert.strictEqual(titleCase('hello   world   test'), 'Hello   World   Test');
});

test('titleCase - tab and space combination', () => {
  assert.strictEqual(titleCase('hello \t world'), 'Hello \t World');
});

test('titleCase - empty string', () => {
  assert.strictEqual(titleCase(''), '');
});

test('titleCase - only whitespace', () => {
  assert.strictEqual(titleCase('   '), '   ');
});

test('titleCase - single character', () => {
  assert.strictEqual(titleCase('a'), 'A');
});

test('titleCase - non-string throws TypeError', () => {
  assert.throws(() => titleCase(123), TypeError);
  assert.throws(() => titleCase(null), TypeError);
  assert.throws(() => titleCase(undefined), TypeError);
  assert.throws(() => titleCase({}), TypeError);
  assert.throws(() => titleCase([]), TypeError);
});

test('titleCase - mixed case word', () => {
  assert.strictEqual(titleCase('hElLo WoRlD'), 'Hello World');
});

test('titleCase - sentence with punctuation', () => {
  assert.strictEqual(titleCase('hello world!'), 'Hello World!');
  assert.strictEqual(titleCase('hello, world'), 'Hello, World');
});

test('titleCase - numbers in words', () => {
  assert.strictEqual(titleCase('hello123 world456'), 'Hello123 World456');
});

test('titleCase - single space', () => {
  assert.strictEqual(titleCase(' '), ' ');
});

test('titleCase - newline between words', () => {
  assert.strictEqual(titleCase('hello\n\nworld'), 'Hello\n\nWorld');
});
