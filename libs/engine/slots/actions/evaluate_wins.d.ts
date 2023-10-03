import BigNumber from "bignumber.js";
import { SlotSpinWinsState } from "../models/slot_state_model";
import { SlotInfoMath } from "../models/slot_math_model";
export declare class EvaluateWins {
    static LineWins(info: SlotInfoMath, grid: number[][], stake: BigNumber): SlotSpinWinsState[];
}
