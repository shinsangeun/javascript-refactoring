// before
targetTemperature(aPlan)

function targetTemperature(aPlan) {
    currentTemperature = thermostat.currentTemperature;
    // ...
}



//after
targetTemperature(aPlan, thermostat.currentTemperature)

function targetTemperature(aPlan, currentTemperature) {
    // ...
}