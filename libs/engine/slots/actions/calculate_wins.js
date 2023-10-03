"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateWins = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
class CalculateWins {
    static AddPays(wins) {
        let pay = new bignumber_js_1.default(0);
        wins.forEach(win => {
            pay = pay.plus(win.pay);
        });
        return pay;
    }
}
exports.CalculateWins = CalculateWins;
//# sourceMappingURL=calculate_wins.js.map