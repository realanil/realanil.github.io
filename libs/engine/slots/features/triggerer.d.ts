import { SlotActionMath } from "../models/slot_math_model";
import { SlotFeaturesState, SlotState } from "../models/slot_state_model";
export declare class Triggerer {
    static UpdateNextAction(state: SlotState, action: SlotActionMath): void;
    static UpdateFeature(state: SlotState, feature: SlotFeaturesState, action: SlotActionMath): void;
}
