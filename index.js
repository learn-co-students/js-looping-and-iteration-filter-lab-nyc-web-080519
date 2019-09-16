function findMatching(drivers, string) {
    let namedDrivers = []

    for (const driver of drivers) {
        if (driver.toUpperCase() === string.toUpperCase()) {
            namedDrivers.push(driver)
        }
    }
    return namedDrivers
}

function fuzzyMatch(drivers, segment) {
    //determine how long the start of the name is
    let nameLength = segment.length;
    //returns just the names taht start with the section
    return drivers.filter(function (driverName) {
        // the section is determined using a slice method and the found length
        return driverName.slice(0, nameLength) === segment;
    });
}

function matchName(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.name.toUpperCase() === name.toUpperCase();
    });
}