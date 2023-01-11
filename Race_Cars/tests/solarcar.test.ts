import { SolarCar } from "../src/solarcar";

describe("SolarCar Class", () => {
    test("SolarCar constructor test", () => {
        let solarCar1 = new SolarCar("Team Edward", 2);
        expect(solarCar1.team).toBe("Team Edward");
        expect(solarCar1.speed).toBe(2);
    });
    
    test("SolarCar speed test", () => {
        let solarCar2 = new SolarCar("Team Jacob");
        expect(solarCar2.speed).toBe(0);
    });

    test("SolarCar accelerate method x 1", () => {
        let solarCar3 = new SolarCar("Team Bella", 0);
        solarCar3.accelerate();
        expect(solarCar3.speed).toBe(1);
    });

    test("SolarCar accelerate method x 2", () => {
        let solarCar4 = new SolarCar("Team Volturi", 0);
        solarCar4.accelerate();
        solarCar4.accelerate();
        expect(solarCar4.speed).toBe(2);
    });

});