export interface IRandom {
    getRandom: (req: RandomObj) => RandomObj;
    getRandoms: (req: RandomObj[]) => RandomObj[];
}
export declare class RandomObj {
    min: number;
    max: number;
    index: number;
    num: number;
    constructor(min: number, max: number, index: number);
}
