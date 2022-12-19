import { HTML_Greeter } from "../src/html_greeter"

describe('HTML Greeter Tests', () => {
    test('HTML Greeter 1 greeting', () => {
        let htmlGreeter1 = new HTML_Greeter("Jarold");
        let htmlGreet1 = htmlGreeter1.Greet("Jarold");
        expect(htmlGreet1).toBe(`console.log(<h1>Hello, Jarold!</h1>)`)
    });
    test('HTML Greeter 1 greeting', () => {
        let htmlGreeter2 = new HTML_Greeter("Yarold");
        let htmlGreet2 =
        htmlGreeter2.Greet("Yarold");
        expect(htmlGreet2).toBe(`console.log(<h1>Hello, Yarold!</h1>)`)
    });
})