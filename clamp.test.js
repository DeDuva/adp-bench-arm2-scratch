import { test } from 'node:test';
import assert from 'node:assert';
import { clamp } from './clamp.js';

test('clamp returns value when in range', () => {
  assert.strictEqual(clamp(5, 0, 10), 5);
  assert.strictEqual(clamp(0, 0, 10), 0);
  assert.strictEqual(clamp(10, 0, 10), 10);
});

test('clamp returns min when value is below min', () => {
  assert.strictEqual(clamp(-5, 0, 10), 0);
  assert.strictEqual(clamp(-100, -50, 50), -50);
});

test('clamp returns max when value is above max', () => {
  assert.strictEqual(clamp(15, 0, 10), 10);
  assert.strictEqual(clamp(100, -50, 50), 50);
});

test('clamp throws RangeError when min > max', () => {
  assert.throws(() => clamp(5, 10, 0), RangeError);
});

test('clamp handles negative ranges', () => {
  assert.strictEqual(clamp(-25, -50, -10), -25);
  assert.strictEqual(clamp(-60, -50, -10), -50);
  assert.strictEqual(clamp(-5, -50, -10), -10);
});

test('clamp handles floating point numbers', () => {
  assert.strictEqual(clamp(5.5, 0, 10), 5.5);
  assert.strictEqual(clamp(-3.2, 0, 10), 0);
  assert.strictEqual(clamp(15.7, 0, 10), 10);
});
