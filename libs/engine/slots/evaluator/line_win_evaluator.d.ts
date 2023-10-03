import BigNumber from "bignumber.js";
import { SlotSpinWinsState } from "../models/slot_state_model";
import { SlotInfoMath } from "../models/slot_math_model";
export declare class LineWinEvaluator {
    calculateWins(info: SlotInfoMath, grid: number[][], line: number, stake: BigNumber): SlotSpinWinsState;
    protected getOffSet(length: number, payLine: number[]): number[];
}
