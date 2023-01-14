import { Room3 } from "../src/room3";

describe("Room2 Class", () => {
    test("Room2 capacity default = 15", () => {
        let newRoom1 = new Room3("Sun", 30, 20, false);
        expect(newRoom1.capacity).toBe(15);
    });

    test("Room2 capacity value entered", () => {
        let newRoom2 = new Room3("Sun", 30, 20, true, 50);
        expect(newRoom2.capacity).toBe(50);
    });

});