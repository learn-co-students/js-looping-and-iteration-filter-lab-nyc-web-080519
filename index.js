// Code your solution in this file



function findMatching(drivers, str){
    return drivers.filter(function (d) {
        return d.toLowerCase() === str.toLowerCase();
    });
}

function fuzzyMatch(drivers, str){
    return drivers.filter(function (d) {
        return d.slice(0, str.length) === str;
    });
}

function matchName(drivers, str) {
    return drivers.filter(function(d) {
        return d.name.toUpperCase() === str.toUpperCase();
    });
}