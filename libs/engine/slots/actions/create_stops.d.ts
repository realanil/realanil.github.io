import { IRandom } from "../../generic/rng/random";
export declare class CreateStops {
    static StandardStopsForNulls(initialStop: number[], reelSet: number[][], grid: number[][]): void;
    static StandardStops(rng: IRandom, reelSet: number[][], layout: number[]): number[][];
}
