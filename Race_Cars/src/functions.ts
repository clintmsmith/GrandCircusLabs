import { Racer } from "./racer"
import { GasCar } from "./gascar";


export function findRacersWithEmptyFuel(racer: Racer[]) : Racer[] {
    return racer.filter((racer) => racer.isFuelEmpty() === true);
    
};

export function findAverageSpeed(racer: Racer[]) : number {
    return racer.reduce((x, racer) => (x + racer.speed), 0) / racer.length;
    
};

export function getFasterRacer(racerA: Racer[], racerB: Racer[]) : Racer[] | null {
    return racerA.map((x) => x.speed) > racerB.map((y) => y.speed) ? racerA : racerB;
}