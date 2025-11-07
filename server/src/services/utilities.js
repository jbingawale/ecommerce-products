/**
 * Utility function to convert snake_case strings to camelCase.
 */
function snakeToCamel(s) {
  return s.replace(/(_\w)/g, (m) => m[1].toUpperCase());
}

/**
 * Converts the keys of a single object from snake_case to camelCase.
 */
function keysToCamelCase(obj) {
  const newObj = {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const newKey = snakeToCamel(key);
      newObj[newKey] = obj[key];
    }
  }
  return newObj;
}

module.exports = {
  keysToCamelCase
}
