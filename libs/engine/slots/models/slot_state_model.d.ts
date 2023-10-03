import BigNumber from "bignumber.js";
import { GameState } from "../../generic/models/game_state_model";
export declare class SlotState extends GameState {
    freespin: FeatureDetails;
    freespins: SlotSpinState[];
    paidSpin: SlotSpinState[];
}
export declare class FeatureDetails {
    total: number;
    left: number;
    accumulated: BigNumber;
}
export declare class SlotSpinState {
    stops: number[][];
    initialGrid: number[][];
    finalGrid: number[][];
    win: BigNumber;
    wins: SlotSpinWinsState[];
    cascade: CascadeState;
    multiplier: number;
    features: SlotFeaturesState[];
}
export declare class SlotSpinWinsState {
    symbol: number;
    pay: BigNumber;
    offsets: number[];
    id: number;
    type: string;
    wildIncluded: boolean;
}
export declare class SlotFeaturesState {
    id: string;
    isActive: boolean;
    symbol: number;
    offsets: number[];
    triggers: string[];
    count: number;
}
export declare class CascadeState {
    id: number;
    offsets: number[];
    type: string;
    win: BigNumber;
}
