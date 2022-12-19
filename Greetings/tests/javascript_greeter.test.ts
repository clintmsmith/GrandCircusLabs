import { JavaScript_Greeter } from "../src/javascript_greeter"

describe('JavaScript Greeter Tests', () => {
    test('JavaScript Greeter 1 Test', () => {
        let javascriptGreeter1 = new JavaScript_Greeter("Carold");
        let javascriptGreet1 = javascriptGreeter1.Greet("Carold");
        expect(javascriptGreet1).toBe(`console.log("Hello, Carold!")`)
    })
    test('JavaScript Greeter 2 Test', () => {
        let javascriptGreeter2 = new JavaScript_Greeter("Karold");
        let javascriptGreet2 = javascriptGreeter2.Greet("Karold");
        expect(javascriptGreet2).toBe(`console.log("Hello, Karold!")`)
    })
})