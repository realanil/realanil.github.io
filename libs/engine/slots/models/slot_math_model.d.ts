import BigNumber from "bignumber.js";
export declare class SlotMath {
    info: SlotInfoMath;
    paidReels: SlotReelsMath[];
    conditions: SlotConditionMath[];
    actions: SlotActionMath[];
    defaultgrid: number[][];
    protected bd(v: number): BigNumber;
}
export declare class SlotInfoMath {
    betMultiplier: BigNumber;
    gridLayout: number[];
    wildSymbols: number[];
    payLines: number[][];
    symbols: SlotSymbolsMath[];
}
declare class SlotSymbolsMath {
    payout: BigNumber[];
    name: string;
    id: number;
}
declare class SlotReelsMath {
    id: string;
    reels: number[][];
    symbols: WeightedSymbols[];
}
export declare class WeightedSymbols {
    symbol: number;
    weight: number;
}
export declare class SlotConditionMath {
    symbol: number;
    id: string;
    oak: number[];
    minCount: number;
    maxCount: number;
}
export declare class SlotActionMath {
    payout: BigNumber;
    triggers: string[];
    spins: number;
}
export {};
