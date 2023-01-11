import {Racer} from "./racer"

export class GasCar implements Racer {
    team: string;
    speed: number;
    fuel: number;

    constructor(team: string, speed: number = 0, fuel: number = 10){
        this.team = team;
        this.speed = speed;
        this.fuel = fuel;
    }

    accelerate() : void {
        this.speed += 2
        this.fuel--;
    };
    
    isFuelEmpty() : boolean {
        return this.fuel <= 0;
    };
}