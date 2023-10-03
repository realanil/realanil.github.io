"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotActionMath = exports.SlotConditionMath = exports.WeightedSymbols = exports.SlotInfoMath = exports.SlotMath = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
class SlotMath {
    constructor() {
        this.info = new SlotInfoMath();
        this.paidReels = [];
        this.conditions = [];
        this.actions = [];
        this.defaultgrid = [];
    }
    bd(v) { return new bignumber_js_1.default(v); }
}
exports.SlotMath = SlotMath;
class SlotInfoMath {
    constructor() {
        this.betMultiplier = new bignumber_js_1.default(0);
        this.gridLayout = [];
        this.wildSymbols = [];
        this.payLines = [];
        this.symbols = [];
    }
}
exports.SlotInfoMath = SlotInfoMath;
class SlotSymbolsMath {
    constructor() {
        this.payout = [];
        this.name = "";
        this.id = -1;
    }
}
class SlotReelsMath {
    constructor() {
        this.id = "";
        this.reels = [];
        this.symbols = [];
    }
}
class WeightedSymbols {
    constructor() {
        this.symbol = -1;
        this.weight = -1;
    }
}
exports.WeightedSymbols = WeightedSymbols;
class SlotConditionMath {
    constructor() {
        this.symbol = -1;
        this.id = null;
        this.oak = null;
        this.minCount = -1;
        this.maxCount = -1;
    }
}
exports.SlotConditionMath = SlotConditionMath;
class SlotActionMath {
    constructor() {
        this.payout = new bignumber_js_1.default(0);
        this.triggers = [];
        this.spins = -1;
    }
}
exports.SlotActionMath = SlotActionMath;
//# sourceMappingURL=slot_math_model.js.map