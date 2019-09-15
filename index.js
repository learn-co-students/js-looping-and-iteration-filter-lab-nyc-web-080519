function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch(drivers, str) {
    let first = str.length
    return drivers.filter(function(driver) {
        return driver.slice(0, first) === str;
    })
}

function matchName(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}