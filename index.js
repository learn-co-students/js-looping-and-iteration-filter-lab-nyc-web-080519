// Code your solution in this file


function findMatching(arr, stringtomatch) {
  let outputarr = [];
  outputarr = arr.filter(function (driver) { return driver.toLowerCase() === stringtomatch.toLowerCase() ;});
  return outputarr;
}

function fuzzyMatch(arr, stringtomatch) {
  let outputarr = [];
  outputarr = arr.filter(function (driver) { return driver.startsWith(stringtomatch);});
  return outputarr;
}


function matchName(arr, stringtomatch) {
  let outputarr = [];
  outputarr = arr.filter(function (driver) { return driver.name === stringtomatch;});
  return outputarr;
}