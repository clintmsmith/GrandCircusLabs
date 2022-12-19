class Greeter {
    greeting: string;

    constructor(greeting:string){
        this.greeting = greeting;
    }

    Greet(name: string) : string {
        return `${this.greeting}, ${name}!`
    }
}

export {Greeter}