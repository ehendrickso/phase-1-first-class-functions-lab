const driversArray = (['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnFirstTwoDrivers = function(driversArray) {
    let drivers = [...driversArray.slice(0, 2)];
    return drivers
}

const returnLastTwoDrivers = function(driversArray) {
    let drivers2 = [...driversArray.slice(2, 4)];
    return drivers2
}

const selectingDrivers = [ returnFirstTwoDrivers , returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare=5) {
        return fare * multiplier;
    }
}

function fareDoubler(fare) {
    return fare + fare;
}

function fareTripler(fare) {
    return (fare + fare) + fare;
}

 function selectDifferentDrivers(driversArray, diff) {
     return diff(driversArray);
 }