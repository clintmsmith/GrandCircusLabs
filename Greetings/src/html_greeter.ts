import {Greeter} from "./greeter";

class HTML_Greeter extends Greeter {

    Greet(name: string): string {
        return `console.log(<h1>Hello, ${name}!</h1>)`
    }
}

export {HTML_Greeter}