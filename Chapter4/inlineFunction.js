// Before
function getRating(driver) {
    return moreThanFiveLateDelivers(driver) ? 2 : 1;
}

function moreThanFiveLateDelivers(driver) {
    return driver.numberOfLateDelivers > 5;
}

// After
function getRating(driver) {
    return (driver.numberOfLateDelivers > 5) ? 2 : 1;
}