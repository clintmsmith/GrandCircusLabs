import {Greeter} from "../src/greeter"


describe('Greeter Tests', () => {
    test('Greeter 1 greeting', () => {
        let testGreeter1 = new Greeter("Good morning");
        let testGreet1 = testGreeter1.Greet("Harold");
        expect(testGreet1).toBe("Good morning, Harold!");
    });
    test('Greeter 2 greeting', () => {
        let testGreeter2 = new Greeter("Good afternoon");
        let testGreet2 = testGreeter2.Greet("Farold");
        expect(testGreet2).toBe("Good afternoon, Farold!");
    })
})