import { IRandom, RandomObj } from "../../engine/generic/rng/random";
export declare class NodeRNG implements IRandom {
    private cheat;
    getRandom(req: RandomObj): RandomObj;
    getRandoms(req: RandomObj[]): RandomObj[];
    setCheat(cheat: number[]): void;
}
