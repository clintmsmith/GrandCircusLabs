// Heating/Cooling

let actualTemp = 75;
let desiredTemp = 72;

if (actualTemp > desiredTemp) {
    console.log (`Run A/C`);
}
else if (actualTemp < desiredTemp) {
    console.log (`Run heat`);
}
else {
    console.log (`Standby`);
}

// Extended Challenge

let tempCelsius = 50;
let targetUnit = "F";
let tempFahrenheit = (tempCelsius * (9 / 5) + 32);
let tempKelvin = (tempCelsius + 273.15);

switch (expr = targetUnit) {
    case "C":
        console.log (`The current temperature is ${tempCelsius}° ${targetUnit}`);
        break;
    case "F":
        console.log (`The current temperature is ${tempFahrenheit}° ${targetUnit}`);
        break;
    case "K":
        console.log (`The current temperature is ${tempKelvin}° ${targetUnit}`);
        break; 
}