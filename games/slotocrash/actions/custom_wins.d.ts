import BigNumber from "bignumber.js";
import { SlotSpinWinsState } from "../../../libs/engine/slots/models/slot_state_model";
import { SlotocrashMath } from "../models/slotocrash_math";
export declare class CustomWins {
    static EvaluateNewReelWin(grid: number[][], stake: BigNumber, math: SlotocrashMath): SlotSpinWinsState[];
    static EvaluateWin(grid: number[][], stake: BigNumber, math: SlotocrashMath): SlotSpinWinsState[];
}
