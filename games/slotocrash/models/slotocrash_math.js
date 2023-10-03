"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotocrashMath = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const platform_math_1 = require("../../../libs/platform/base/platform_math");
class SlotocrashMath extends platform_math_1.PlatformMath {
    constructor() {
        super();
        this.blastProb = [];
        this.blastSymbol = 3;
        this.symbols = [];
        this.symbolsAfter = [];
        this.defaultgrid = [[0], [3], [2]];
        this.info = {
            betMultiplier: new bignumber_js_1.default(1),
            gridLayout: [1, 1, 1],
            wildSymbols: [],
            payLines: [],
            symbols: [
                { name: "Sym1", id: 0, payout: [this.bd(0), this.bd(0.1)] },
                { name: "Sym2", id: 1, payout: [this.bd(0), this.bd(0.2)] },
                { name: "Sym3", id: 2, payout: [this.bd(0), this.bd(0.5)] },
                { name: "BLAST", id: this.blastSymbol, payout: [] }
            ]
        };
        this.blastProb = [{ weight: 6761, add: false }, { weight: 3239, add: true }];
        this.paidReels = [{
                id: "", reels: [],
                symbols: [{ symbol: 0, weight: 75 }, { symbol: 1, weight: 20 }, { symbol: 2, weight: 5 }]
            }];
        this.symbols = [{ symbol: 0, weight: 6 }, { symbol: 1, weight: 2 }, { symbol: 2, weight: 2 }];
        this.symbolsAfter = [{ symbol: 0, weight: 4 }, { symbol: 1, weight: 3 }, { symbol: 2, weight: 3 }];
        this.conditions = [{ "symbol": -1, "id": "freespins" }];
        this.actions = [
            { "triggers": ["freespin", "collect"], "spins": 1 },
            { "triggers": ["retrigger", "collect"], "spins": 1 }
        ];
    }
}
exports.SlotocrashMath = SlotocrashMath;
class AddBlastProb {
}
//# sourceMappingURL=slotocrash_math.js.map