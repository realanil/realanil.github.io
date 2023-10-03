import { IRandom } from "../../../libs/engine/generic/rng/random";
import { SlotSpinState } from "../../../libs/engine/slots/models/slot_state_model";
import { SlotocrashMath } from "../models/slotocrash_math";
export declare class CustomGrid {
    static AddBlastSymbol(rng: IRandom, state: SlotSpinState, math: SlotocrashMath): void;
    static AddNewReel(rng: IRandom, state: SlotSpinState, math: SlotocrashMath, accumulated: number): void;
}
