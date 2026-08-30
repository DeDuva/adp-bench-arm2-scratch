import { test } from 'node:test';
import assert from 'node:assert';
import { clamp } from './clamp.js';

test('clamp returns value unchanged when within range', () => {
  assert.strictEqual(clamp(5, 0, 10), 5);
  assert.strictEqual(clamp(0, 0, 10), 0);
  assert.strictEqual(clamp(10, 0, 10), 10);
});

test('clamp returns min when value is below range', () => {
  assert.strictEqual(clamp(-5, 0, 10), 0);
  assert.strictEqual(clamp(-100, -50, 50), -50);
});

test('clamp returns max when value is above range', () => {
  assert.strictEqual(clamp(15, 0, 10), 10);
  assert.strictEqual(clamp(100, -50, 50), 50);
});

test('clamp throws RangeError when min > max', () => {
  assert.throws(() => clamp(5, 10, 0), RangeError);
  assert.throws(() => clamp(0, 1, -1), RangeError);
});

test('clamp works with negative ranges', () => {
  assert.strictEqual(clamp(-5, -10, 0), -5);
  assert.strictEqual(clamp(-15, -10, 0), -10);
  assert.strictEqual(clamp(5, -10, 0), 0);
});

test('clamp works with decimal values', () => {
  assert.strictEqual(clamp(5.5, 0, 10), 5.5);
  assert.strictEqual(clamp(10.5, 0, 10), 10);
  assert.strictEqual(clamp(-0.5, 0, 10), 0);
});
