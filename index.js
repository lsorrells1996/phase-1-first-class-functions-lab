// Code your solution in this file!
const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multi) {
    return function (fare) {
        return fare * multi;
    };
}

const fareTotal = createFareMultiplier();

function fareDoubler (fareTotal) {
    return fareTotal * 2;
}

function fareTripler (fareTotal) {
    return fareTotal * 3;
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}