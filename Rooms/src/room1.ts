export class Room1 {
    name: string;
    length: number;
    width: number;

    constructor(name: string, length: number, width: number){
        this.name = name;
        this.length = length;
        this.width = width;
    }

    getArea() : number {
        return this.length * this.width;
    };

    getPerimeter() : number {
        return this.length * 2 + this.width * 2
    };
};