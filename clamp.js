export function clamp(value, min, max) {
  if (min > max) {
    throw new RangeError('min must be less than or equal to max');
  }
  if (value < min) return min;
  if (value > max) return max;
  return value;
}
