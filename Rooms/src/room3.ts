export class Room3 {
    name: string;
    length: number;
    width: number;
    isAvailable: boolean;
    capacity? : number;

    constructor(name: string, length: number, width: number, isAvailable: boolean = true, capacity: number = 15){
        this.name = name;
        this.length = length;
        this.width = width;
        this.isAvailable = isAvailable;
        this.capacity = capacity;
    }

    getArea() : number {
        return this.length * this.width;
    };

    getPerimeter() : number {
        return this.length * 2 + this.width * 2
    };
};