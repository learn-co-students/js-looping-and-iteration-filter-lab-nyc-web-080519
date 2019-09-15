// Code your solution in this file
function findMatching(drivers, nameInput) {
    return drivers.filter(
        function(name) {
            return name.toLowerCase() === nameInput.toLowerCase();
        }
    );
}

function fuzzyMatch(drivers, firstFewLetters) {
    const searchLength = firstFewLetters.length;
    return drivers.filter(
        function(name) {
            return name.toLowerCase().slice(0, searchLength) === firstFewLetters.toLowerCase();
        }
    );
}

function matchName(drivers, nameInput) {
    return drivers.filter(
        function(driver) {
            return driver.name.toLowerCase() === nameInput.toLowerCase();
        }
    );
}