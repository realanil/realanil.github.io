import { SlotConditionMath } from "../models/slot_math_model";
import { SlotFeaturesState, SlotSpinState } from "../models/slot_state_model";
export declare class SpinCondition {
    static WinCondition(condition: SlotConditionMath, state: SlotSpinState): SlotFeaturesState;
}
