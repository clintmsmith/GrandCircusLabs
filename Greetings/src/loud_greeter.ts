import { Greeter } from "./greeter";

class Loud_Greeter extends Greeter {
    private extra: string;

    constructor(greeting:string, extra:string = "!"){
        super(greeting);
        this.extra = extra;
    };

    Greet(name: string) : string {
        return `${this.greeting}, ${name}${this.extra}!`;
    };

    addVolume() : void {
        this.extra;
    };
}

export {Loud_Greeter}