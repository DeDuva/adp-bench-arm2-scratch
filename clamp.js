export function clamp(value, min, max) {
  if (min > max) {
    throw new RangeError('min must be less than or equal to max');
  }
  return Math.max(min, Math.min(value, max));
}
