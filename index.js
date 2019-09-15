function findMatching(drivers, name) {
    return drivers.filter(function (n) {
        return n.toLowerCase() === name.toLowerCase(); 
    });
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function (name) {
        return name.slice(0, letters.length) === letters;
    });
}

function matchName(drivers, name) {
    return drivers.filter(function (n) {
        return n.name === name;
    });
}