import { findRacersWithEmptyFuel } from "../src/functions";
import { findAverageSpeed } from "../src/functions";
import { getFasterRacer } from "../src/functions";
import { GasCar } from "../src/gascar";
import { Racer } from "../src/racer";
import { SolarCar } from "../src/solarcar";

// findRacersWithEmptyFuel
describe("findRacersWithEmptyFuel function tests", () => {
    test("GasCar isFuelEmpty some", () => {
        let gasCar1 = new GasCar("Team Speed Racer", 10, 0);
        let gasCar2 = new GasCar("Team Racer X", 5, 5);
        let gasCar3 = new GasCar("Team Trixie", 0, 10);
        let gasCarArray = [gasCar1, gasCar2, gasCar3];
        let emptyFuelCars = findRacersWithEmptyFuel(gasCarArray);
        expect(emptyFuelCars).toBe(gasCar1);
    });

    test("GasCar isFuelEmpty all", () => {
        let gasCar1 = new GasCar("Team Speed Racer", 10, 0);
        let gasCar2 = new GasCar("Team Racer X", 5, 0);
        let gasCar3 = new GasCar("Team Trixie", 0, 0);
        let gasCarArray = [gasCar1, gasCar2, gasCar3];
        let emptyFuelCars = findRacersWithEmptyFuel(gasCarArray);
        expect(emptyFuelCars).toBe(gasCar1);
        expect(emptyFuelCars).toBe(gasCar2);
        expect(emptyFuelCars).toBe(gasCar3);
    });

    test("GasCar isFuelEmpty none", () => {
        let gasCar1 = new GasCar("Team Speed Racer", 5, 10);
        let gasCar2 = new GasCar("Team Racer X", 5, 8);
        let gasCar3 = new GasCar("Team Trixie", 0, 7);
        let gasCarArray = [gasCar1, gasCar2, gasCar3];
        let emptyFuelCars = findRacersWithEmptyFuel(gasCarArray);
        expect(emptyFuelCars).toBe("");
    });

    test("SolarCar isFuelEmpty none", () => {
        let solarCar1 = new SolarCar("Team Speed Racer", 5);
        let solarCar2 = new SolarCar("Team Racer X", 5);
        let solarCar3 = new SolarCar("Team Trixie", 0);
        let solarCarArray = [solarCar1, solarCar2, solarCar3];
        let emptyFuelCars = findRacersWithEmptyFuel(solarCarArray);
        expect(emptyFuelCars).toBe("");
    });

    test("GasCar + SolarCar isFuelEmpty mixed", () => {
        let gasCar1 = new GasCar("Team Speed Racer", 5, 10);
        let solarCar1 = new SolarCar("Team Racer X", 5);
        let gasCar2 = new GasCar("Team Pops Racer", 3, 0);
        let solarCar2 = new SolarCar("Team Trixie", 0);
        let mixedCarArray = [gasCar1, solarCar1, gasCar2, solarCar2];
        let emptyFuelCars = findRacersWithEmptyFuel(mixedCarArray);
        expect(emptyFuelCars).toBe(gasCar2);
    });

    test("GasCar + SolarCar isFuelEmpty empty array", () => {
        let gasCar1 = new GasCar("Team Speed Racer", 5, 10);
        let solarCar1 = new SolarCar("Team Racer X", 5);
        let gasCar2 = new GasCar("Team Pops Racer", 3, 0);
        let solarCar2 = new SolarCar("Team Trixie", 0);
        let emptyCarArray: Racer[] = [];
        let emptyFuelCars = findRacersWithEmptyFuel(emptyCarArray);
        expect(emptyFuelCars).toBe("");
    });
});


// findAverageSpeed
describe("findAverageSpeed function tests", () => {
    test("GasCar speed various", () => {
        let gasCar1 = new GasCar("Team Speed Racer", 10, 1);
        let gasCar2 = new GasCar("Team Racer X", 5, 4);
        let gasCar3 = new GasCar("Team Trixie", 0, 10);
        let gasCarArray = [gasCar1, gasCar2, gasCar3];
        let averageSpeed = findAverageSpeed(gasCarArray);
        expect(averageSpeed).toBe(5);
    });

    test("GasCar + SolarCar speed various", () => {
        let gasCar1 = new GasCar("Team Speed Racer", 10, 1);
        let solarCar1 = new SolarCar("Team Racer X", 8);
        let gasCar2 = new GasCar("Team Trixie", 2, 8);
        let solarCar2 = new SolarCar("Team Pops Racer", 4);
        let gasCarArray = [gasCar1, solarCar1, gasCar2, solarCar2];
        let averageSpeed = findAverageSpeed(gasCarArray);
        expect(averageSpeed).toBe(6);
    });

    test("GasCar + SolarCar speed 0", () => {
        let gasCar1 = new GasCar("Team Speed Racer", 0, 10);
        let solarCar1 = new SolarCar("Team Racer X", 0);
        let gasCar2 = new GasCar("Team Trixie", 0, 8);
        let solarCar2 = new SolarCar("Team Pops Racer", 0);
        let gasCarArray = [gasCar1, solarCar1, gasCar2, solarCar2];
        let averageSpeed = findAverageSpeed(gasCarArray);
        expect(averageSpeed).toBe(0);
    });

    test("GasCar + SolarCar speed various", () => {
        let gasCar1 = new GasCar("Team Speed Racer", 10, 1);
        let solarCar1 = new SolarCar("Team Racer X", 8);
        let gasCar2 = new GasCar("Team Trixie", 2, 8);
        let solarCar2 = new SolarCar("Team Pops Racer", 4);
        let gasCarArray: Racer[] = [];
        let averageSpeed = findAverageSpeed(gasCarArray);
        expect(averageSpeed).toBe(0);
    });
});


// getFasterRacer
describe("getFasterRacer function tests", () => {
    test("GasCar speed racerA faster", () => {
        let racerA = new GasCar("Team Speed Racer", 10, 1);
        let racerB = new GasCar("Team Racer X", 5, 4);
        let fasterRacer = getFasterRacer(racerA, racerB);
        expect(fasterRacer).toBe(racerA);
    });

    test("GasCar speed racerB faster", () => {
        let racerA = new GasCar("Team Speed Racer", 7, 4);
        let racerB = new GasCar("Team Racer X", 10, 1);
        let fasterRacer = getFasterRacer(racerA, racerB);
        expect(fasterRacer).toBe(racerB);
    });

    test("GasCar speed equal", () => {
        let racerA = new GasCar("Team Speed Racer", 7, 4);
        let racerB = new GasCar("Team Racer X", 7, 3);
        let fasterRacer = getFasterRacer(racerA, racerB);
        expect(fasterRacer).toBe(null);
    });

    test("GasCar speed equal", () => {
        let racerA = new GasCar("Team Speed Racer", 7, 4);
        let racerB = new SolarCar("Team Racer X", 5);
        let fasterRacer = getFasterRacer(racerA, racerB);
        expect(fasterRacer).toBe(racerA);
    });
});
