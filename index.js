// Code your solution in this file
const findMatching = (drivers, name) => {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  
};

const fuzzyMatch = (drivers, str) => {
  return drivers.filter(driver => driver.slice(0, str.length) === str);
};

const matchName = (drivers, str) => {
  return drivers.filter(driver => driver["name"].toLowerCase() === str.toLowerCase());
};