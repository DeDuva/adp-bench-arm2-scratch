export function titleCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError();
  }

  if (str === '') {
    return '';
  }

  return str.replace(/\S+/g, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}
