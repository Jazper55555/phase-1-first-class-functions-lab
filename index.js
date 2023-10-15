const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2)
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(fare) {
    return integer * fare
    }
}
createFareMultiplier(5)

const fareDoubler = createFareMultiplier(2)
fareDoubler(10)

const fareTripler = createFareMultiplier(3)
fareTripler(12)

function selectDifferentDrivers(drivers, functions) {
    return functions(drivers)
}
selectDifferentDrivers(drivers, returnFirstTwoDrivers)
selectDifferentDrivers(drivers, returnLastTwoDrivers)