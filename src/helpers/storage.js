export const setStorage = (key, value) => {
  localStorage.setItem(key.toLowerCase(), JSON.stringify(value));
};

export const getStorage = (key) => {
  const data = localStorage.getItem(key.toLowerCase());
  return JSON.parse(data);
};

export const removeStorage = (key) => {
  return localStorage.removeItem(key.toLowerCase());
};
