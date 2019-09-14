// Code your solution in this file

function findMatching(drivers, arg){
  let filteredDrivers = drivers.filter(name => name.toUpperCase() === arg.toUpperCase()); 
  return filteredDrivers; 
}

function fuzzyMatch(drivers, arg){
  let filteredDrivers = 
  drivers.filter(name => name.charAt(0) === arg.charAt(0)); 
  return filteredDrivers; 
}

//go through each object in the array (traits), if the value of the key name matches the string, push that object into the matches array 

function matchName(drivers, string){
  let matches = []
  for(const traits of drivers){
   if(traits['name'] === string){
     matches.push(traits)
   }
  }
  return matches 
}