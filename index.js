function findMatching (list, name) {
    return list.filter(function (driverName) {
      return driverName.toLowerCase() === name.toLowerCase();
    });
  }

//   1. Define a function called findMatching, which will match a name to a name in a list. 
//   2. Pass in a list and a name into the function as arguements. 
//   3. We want the function to filter the list that we provided by calling another method (i.e.a callback method). 
//   4. The callback method will validate that the name matches the name on the list. 

function fuzzyMatch (list, partialName) {
    let lengthOfName = partialName.length;
    return list.filter(function (driverName) {
      return driverName.slice(0, lengthOfName) === partialName;
    });
  }

// 1. Create a function called fuzzyMatchm which will match a partial name to a name on a list. 
// 2. The functin should take the argument of a list and a partial name. 
// 3. Create a variable called length of name, which takes the partial name and counts the lenght of the string. 
// 4. Use the filter method on list and pass in a callback function with an argument call (drivername). 
// 4. The function will compare the driver name with the partial name. 

function matchName (list, name) {
    return list.filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
  }

// 1. Create a function called matchName with an array and a name. 
// 2. Use the filter method to go through each driver object on the list. 
// 3. Take each driver on the list with the name provided. 
// 4. Return true or false if ther is or isnt a matchName. 
