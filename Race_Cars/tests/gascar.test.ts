import { GasCar } from "../src/gascar";

describe("GasCar Class", () => {
    test("GasCar constructor test 1", () => {
        let gasCar1 = new GasCar("Team Grumpy Bear", 3, 8);
        expect(gasCar1.team).toBe("Team Grumpy Bear");
        expect(gasCar1.speed).toBe(3);
        expect(gasCar1.fuel).toBe(8);
    });

    test("GasCar constructor test 2, default fuel", () => {
        let gasCar2 = new GasCar("Team Tenderheart Bear", 5);
        expect(gasCar2.team).toBe("Team Tenderheart Bear");
        expect(gasCar2.speed).toBe(5);
        expect(gasCar2.fuel).toBe(10);
    });

    test("GasCar constructor test 4, default speed", () => {
        let gasCar3 = new GasCar("Team Cheer Bear");
        expect(gasCar3.team).toBe("Team Cheer Bear");
        expect(gasCar3.speed).toBe(0);
        expect(gasCar3.fuel).toBe(10);
    });

    test("GasCar accelerate*1 speed", () => {
        let gasCar4 = new GasCar("Team Share Bear", 0, 10);
        gasCar4.accelerate();
        expect(gasCar4.speed).toBe(2);
    });

    test("GasCar accelerate*2 speed", () => {
        let gasCar5 = new GasCar("Team Funshine Bear", 0, 10);
        gasCar5.accelerate();
        gasCar5.accelerate();
        expect(gasCar5.speed).toBe(4);
    });

    test("GasCar accelerate*1 fuel", () => {
        let gasCar6 = new GasCar("Team Love-A-Lot Bear", 0, 10);
        gasCar6.accelerate();
        expect(gasCar6.fuel).toBe(9);
    });

    test("GasCar accelerate*2 fuel", () => {
        let gasCar7 = new GasCar("Team Brave Heart Lion", 0, 10);
        gasCar7.accelerate();
        gasCar7.accelerate();
        expect(gasCar7.fuel).toBe(8);
    });

    test("GasCar isFuelEmpty = true", () => {
        let gasCar8 = new GasCar("Team Swift Heart Rabbit", 8, 2);
        gasCar8.accelerate();
        gasCar8.accelerate();
        expect(gasCar8.isFuelEmpty()).toBe(true);
    });

    test("GasCar isFuelEmpty = false", () => {
        let gasCar9 = new GasCar("Team Lotsa Heart Elephant", 0, 8);
        gasCar9.accelerate();
        gasCar9.accelerate();
        expect(gasCar9.isFuelEmpty()).toBe(false);
    });

});