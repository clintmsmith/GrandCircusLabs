import { Loud_Greeter } from "../src/loud_greeter"

describe('Loud Greeter Tests', () => {
    test('Loud Greeter 1 Test', () => {
        let loudGreeter1 = new Loud_Greeter("Good morning", "!");
        let loudGreet1 = loudGreeter1.Greet("Rarold");
        expect(loudGreet1).toBe("Good morning, Rarold!!");
    })
    test('Loud Greeter 2 Test', () => {
        let loudGreeter2 = new Loud_Greeter("Hello", "!");
        loudGreeter2.addVolume();
        let loudGreet2 = loudGreeter2.Greet("Sharold");
        expect(loudGreet2).toBe("Hello, Sharold!!!");
    })
})