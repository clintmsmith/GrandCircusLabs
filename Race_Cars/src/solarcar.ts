import {Racer} from "./racer"

export class SolarCar implements Racer {
    team: string;
    speed: number;

    constructor(team: string, speed: number = 0){
        this.team = team;
        this.speed = speed;
    }

    accelerate() : void {
        this.speed++
    };
    
    isFuelEmpty() : boolean {
        return false;
    };
}