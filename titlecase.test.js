import { test } from 'node:test';
import assert from 'node:assert';
import { titleCase } from './titlecase.js';

test('titleCase basic functionality', () => {
  assert.strictEqual(titleCase('hello world'), 'Hello World');
});

test('titleCase single word', () => {
  assert.strictEqual(titleCase('hello'), 'Hello');
});

test('titleCase already mixed case', () => {
  assert.strictEqual(titleCase('hELLO wORLD'), 'Hello World');
});

test('titleCase empty string', () => {
  assert.strictEqual(titleCase(''), '');
});

test('titleCase preserves multiple spaces', () => {
  assert.strictEqual(titleCase('hello    world'), 'Hello    World');
});

test('titleCase preserves leading whitespace', () => {
  assert.strictEqual(titleCase('  hello world'), '  Hello World');
});

test('titleCase preserves trailing whitespace', () => {
  assert.strictEqual(titleCase('hello world  '), 'Hello World  ');
});

test('titleCase with tabs and mixed whitespace', () => {
  assert.strictEqual(titleCase('hello\tworld\n  test'), 'Hello\tWorld\n  Test');
});

test('titleCase throws TypeError for non-string input', () => {
  assert.throws(() => titleCase(123), TypeError);
  assert.throws(() => titleCase(null), TypeError);
  assert.throws(() => titleCase(undefined), TypeError);
  assert.throws(() => titleCase({}), TypeError);
});
