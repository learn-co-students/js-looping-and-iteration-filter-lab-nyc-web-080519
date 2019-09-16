// Code your solution in this file
function findMatching(drivers, driverName) {
    return drivers.filter(function (name) {
        return driverName.toLowerCase() === name.toLowerCase();
    } )
}

function fuzzyMatch(drivers, lettersString) {
    return drivers.filter(function (name) {
        return name.slice(0, lettersString.length) === lettersString;
    })
}

function matchName(drivers, driverName) {
    return drivers.filter(function (driver) {
        return driver.name.toLowerCase() === driverName.toLowerCase();
    })
}