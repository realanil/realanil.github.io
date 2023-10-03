import { IRandom } from "../../generic/rng/random";
import { WeightedSymbols } from "../models/slot_math_model";
export declare class CreateGrid {
    static StandardGrid(reelSet: number[][], stops: number[][]): number[][];
    static WeightedSymbolGrid(rng: IRandom, reelSet: WeightedSymbols[], layout: number[]): number[][];
}
