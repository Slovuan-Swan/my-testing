const get = (obj, key, defaultValue = undefined) => {
  if (key in obj) {
    return obj[key];
  }
  return defaultValue;
};
export default get;
