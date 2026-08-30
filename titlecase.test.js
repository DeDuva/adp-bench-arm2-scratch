import { test } from 'node:test';
import assert from 'node:assert';
import { titleCase } from './titlecase.js';

test('titleCase basic functionality', () => {
  assert.strictEqual(titleCase('hello world'), 'Hello World');
  assert.strictEqual(titleCase('HELLO WORLD'), 'Hello World');
  assert.strictEqual(titleCase('hello'), 'Hello');
  assert.strictEqual(titleCase('a'), 'A');
});

test('titleCase with multiple spaces', () => {
  assert.strictEqual(titleCase('hello   world'), 'Hello   World');
  assert.strictEqual(titleCase('hello\t\tworld'), 'Hello\t\tWorld');
});

test('titleCase preserves leading/trailing whitespace', () => {
  assert.strictEqual(titleCase('  hello world  '), '  Hello World  ');
  assert.strictEqual(titleCase('\thello\n'), '\tHello\n');
});

test('titleCase with empty string', () => {
  assert.strictEqual(titleCase(''), '');
});

test('titleCase with only whitespace', () => {
  assert.strictEqual(titleCase('   '), '   ');
  assert.strictEqual(titleCase('\t\n'), '\t\n');
});

test('titleCase throws TypeError for non-string', () => {
  assert.throws(() => titleCase(123), TypeError);
  assert.throws(() => titleCase(null), TypeError);
  assert.throws(() => titleCase(undefined), TypeError);
  assert.throws(() => titleCase({}), TypeError);
  assert.throws(() => titleCase([]), TypeError);
});

test('titleCase mixed case', () => {
  assert.strictEqual(titleCase('hELLo WoRLD'), 'Hello World');
  assert.strictEqual(titleCase('tHe QuIcK bRoWn FoX'), 'The Quick Brown Fox');
});
