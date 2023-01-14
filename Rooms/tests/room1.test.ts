import { Room1 } from "../src/room1";

describe("Room1 Class", () => {
    test("Room1 constructor test", () => {
        let newRoom1 = new Room1("Sun", 30, 20);
        expect(newRoom1.name).toBe("Sun");
        expect(newRoom1.length).toBe(30);
        expect(newRoom1.width).toBe(20);
    });

    test("Room1 getArea test", () => {
        let newRoom2 = new Room1("Green", 15, 20);
        expect(newRoom2.getArea).toBe(300);
    });

    test("Room1 getPerimeter test", () => {
        let newRoom3 = new Room1("Blue", 13, 15);
        expect(newRoom3.getPerimeter).toBe(56);
    });

});