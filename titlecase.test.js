import { test } from 'node:test';
import assert from 'node:assert/strict';
import { titleCase } from './titlecase.js';

test('titleCase with basic words', () => {
  assert.equal(titleCase('hello world'), 'Hello World');
});

test('titleCase with mixed case', () => {
  assert.equal(titleCase('HELLO WORLD'), 'Hello World');
});

test('titleCase with single word', () => {
  assert.equal(titleCase('hello'), 'Hello');
});

test('titleCase with empty string', () => {
  assert.equal(titleCase(''), '');
});

test('titleCase preserves leading whitespace', () => {
  assert.equal(titleCase('  hello world'), '  Hello World');
});

test('titleCase preserves trailing whitespace', () => {
  assert.equal(titleCase('hello world  '), 'Hello World  ');
});

test('titleCase preserves multiple spaces between words', () => {
  assert.equal(titleCase('hello   world'), 'Hello   World');
});

test('titleCase with tabs and newlines', () => {
  assert.equal(titleCase('hello\tworld\nfoo'), 'Hello\tWorld\nFoo');
});

test('titleCase throws TypeError for non-string input', () => {
  assert.throws(() => titleCase(null), TypeError);
  assert.throws(() => titleCase(123), TypeError);
  assert.throws(() => titleCase(undefined), TypeError);
  assert.throws(() => titleCase([]), TypeError);
  assert.throws(() => titleCase({}), TypeError);
});

test('titleCase with single character', () => {
  assert.equal(titleCase('a'), 'A');
});

test('titleCase with whitespace only', () => {
  assert.equal(titleCase('   '), '   ');
});
