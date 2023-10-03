"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotTester = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const payout_tester_1 = require("../../generic/tester/payout-tester");
class SlotTester extends payout_tester_1.PayoutTester {
    constructor() {
        super();
        this.createSlotKeys();
    }
    createSlotKeys() {
        let priority = 5000;
        for (let s = 0; s < 5; s++) {
            for (let oak = 0; oak < 5; oak++) {
                this.createPayoutKey(`main-${s}-${oak}oak`, 'mainspin', priority++);
            }
        }
    }
    recordSlotRTP(state) {
        this.recordSymbolRTP(state.paidSpin[0], "main");
    }
    recordSymbolRTP(state, id) {
        state.wins.forEach(win => {
            const key = `${id}-${win.symbol}-${win.offsets.length}oak`;
            this.updatePayout(key, win.pay);
        });
    }
    calculateGameRTP() {
        if (this.state.gameStatus.action == "spin") {
            this.updateTotalBetAndWin(this.state.gameStatus.totalBet, new bignumber_js_1.default(0));
        }
        this.updateTotalBetAndWin(new bignumber_js_1.default(0), this.state.gameStatus.totalWin);
    }
}
exports.SlotTester = SlotTester;
//# sourceMappingURL=slot_tester.js.map