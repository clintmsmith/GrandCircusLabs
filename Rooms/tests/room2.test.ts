import { Room2 } from "../src/room2";

describe("Room2 Class", () => {
    test("Room2 isAvailable default = false", () => {
        let newRoom1 = new Room2("Sun", 30, 20);
        expect(newRoom1.isAvailable).toBe(false);
    });

    test("Room2 isAvailable = true", () => {
        let newRoom2 = new Room2("Green", 15, 40, true);
        expect(newRoom2.isAvailable).toBe(true);
    });

});