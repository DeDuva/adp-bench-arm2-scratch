import { test } from 'node:test';
import assert from 'node:assert';
import { clamp } from './clamp.js';

test('clamp returns min when value is below min', () => {
  assert.strictEqual(clamp(1, 5, 10), 5);
});

test('clamp returns max when value is above max', () => {
  assert.strictEqual(clamp(15, 5, 10), 10);
});

test('clamp returns value when it is within range', () => {
  assert.strictEqual(clamp(7, 5, 10), 7);
});

test('clamp returns value when it equals min', () => {
  assert.strictEqual(clamp(5, 5, 10), 5);
});

test('clamp returns value when it equals max', () => {
  assert.strictEqual(clamp(10, 5, 10), 10);
});

test('clamp throws RangeError when min > max', () => {
  assert.throws(
    () => clamp(7, 10, 5),
    RangeError
  );
});

test('clamp works with negative numbers', () => {
  assert.strictEqual(clamp(-1, -10, 0), -1);
  assert.strictEqual(clamp(-15, -10, 0), -10);
  assert.strictEqual(clamp(5, -10, 0), 0);
});

test('clamp works with floats', () => {
  assert.strictEqual(clamp(2.5, 1.5, 3.5), 2.5);
  assert.strictEqual(clamp(0.5, 1.5, 3.5), 1.5);
  assert.strictEqual(clamp(4.5, 1.5, 3.5), 3.5);
});
