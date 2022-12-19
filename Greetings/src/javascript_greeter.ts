import {Greeter} from "./greeter";

class JavaScript_Greeter extends Greeter {

    Greet(name: string) : string {
        return `console.log("Hello, ${name}!")`
    }
}

export {JavaScript_Greeter}