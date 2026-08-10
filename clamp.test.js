import { test } from 'node:test';
import assert from 'node:assert';
import { clamp } from './clamp.js';

test('clamp returns value when within range', () => {
  assert.strictEqual(clamp(5, 0, 10), 5);
});

test('clamp returns min when value is below min', () => {
  assert.strictEqual(clamp(-5, 0, 10), 0);
});

test('clamp returns max when value is above max', () => {
  assert.strictEqual(clamp(15, 0, 10), 10);
});

test('clamp returns value when equal to min', () => {
  assert.strictEqual(clamp(0, 0, 10), 0);
});

test('clamp returns value when equal to max', () => {
  assert.strictEqual(clamp(10, 0, 10), 10);
});

test('clamp throws RangeError when min > max', () => {
  assert.throws(() => {
    clamp(5, 10, 0);
  }, RangeError);
});

test('clamp works with negative numbers', () => {
  assert.strictEqual(clamp(-5, -10, 0), -5);
  assert.strictEqual(clamp(-15, -10, 0), -10);
  assert.strictEqual(clamp(5, -10, 0), 0);
});

test('clamp works with floats', () => {
  assert.strictEqual(clamp(5.5, 0, 10), 5.5);
  assert.strictEqual(clamp(-0.5, 0, 10), 0);
  assert.strictEqual(clamp(10.5, 0, 10), 10);
});
