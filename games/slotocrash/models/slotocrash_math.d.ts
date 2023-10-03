import { WeightedSymbols } from "../../../libs/engine/slots/models/slot_math_model";
import { PlatformMath } from "../../../libs/platform/base/platform_math";
export declare class SlotocrashMath extends PlatformMath {
    blastProb: AddBlastProb[];
    blastSymbol: number;
    symbols: WeightedSymbols[];
    symbolsAfter: WeightedSymbols[];
    constructor();
}
declare class AddBlastProb {
    weight: number;
    add: boolean;
}
export {};
