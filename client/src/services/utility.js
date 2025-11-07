// Utility to convert camelCase keys (used in form state) back to snake_case (expected by backend)
const camelToSnake = (s) => s.replace(/([A-Z])/g, "_$1").toLowerCase();

export const convertKeysToSnakeCase = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const newKey = camelToSnake(key);
      newObj[newKey] = obj[key];
    }
  }
  return newObj;
};

