// Code your solution in this file
const findMatching = (drivers, name) => {
  const result = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  return result;
};

const fuzzyMatch = (drivers, str) => {
  const result = drivers.filter(driver => driver.slice(0, str.length) === str);
  return result;
};

const matchName = (drivers, str) => {
  const result = drivers.filter(driver => driver["name"].toLowerCase() === str.toLowerCase());
  return result;
};