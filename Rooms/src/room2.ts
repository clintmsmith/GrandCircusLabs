export class Room2 {
    name: string;
    length: number;
    width: number;
    isAvailable: boolean;

    constructor(name: string, length: number, width: number, isAvailable: boolean = true){
        this.name = name;
        this.length = length;
        this.width = width;
        this.isAvailable = isAvailable;
    }

    getArea() : number {
        return this.length * this.width;
    };

    getPerimeter() : number {
        return this.length * 2 + this.width * 2
    };
};