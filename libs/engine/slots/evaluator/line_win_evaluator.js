"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineWinEvaluator = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const slot_state_model_1 = require("../models/slot_state_model");
class LineWinEvaluator {
    calculateWins(info, grid, line, stake) {
        let symbolOccurrenceCount = 0;
        let consecutiveWildCount = 0;
        let symbolId = -1;
        let wildSymbolId = -1;
        let isWildInclude = false;
        let offsets = info.payLines[line];
        for (let reel = 0; reel < grid.length; reel++) {
            const currSymbolId = grid[reel][offsets[reel]];
            const isSymbolWild = info.wildSymbols.includes(currSymbolId);
            if (symbolId == -1 && isSymbolWild) {
                symbolOccurrenceCount++;
                consecutiveWildCount++;
                wildSymbolId = currSymbolId;
                isWildInclude = true;
                continue;
            }
            if (symbolId == -1 && !isSymbolWild) {
                symbolId = currSymbolId;
                symbolOccurrenceCount++;
                continue;
            }
            if (symbolId == currSymbolId || isSymbolWild) {
                if (isSymbolWild) {
                    isWildInclude = true;
                }
                symbolOccurrenceCount++;
            }
            else {
                break;
            }
        }
        let wildWin = new bignumber_js_1.default(0);
        let symbolWin = new bignumber_js_1.default(0);
        info.symbols.forEach(symbol => {
            if (symbol.payout.length === 0) {
                return;
            }
            if (symbol.id === wildSymbolId) {
                wildWin = symbol.payout[consecutiveWildCount];
            }
            if (symbol.id === symbolId) {
                symbolWin = symbol.payout[symbolOccurrenceCount];
            }
        });
        const payout = new slot_state_model_1.SlotSpinWinsState();
        payout.id = line + 1;
        payout.type = "line";
        payout.wildIncluded = isWildInclude;
        if (wildWin.isGreaterThan(symbolWin)) {
            payout.symbol = wildSymbolId;
            payout.offsets = this.getOffSet(consecutiveWildCount, offsets);
            payout.pay = wildWin.multipliedBy(stake);
        }
        else {
            payout.symbol = symbolId;
            payout.offsets = this.getOffSet(symbolOccurrenceCount, offsets);
            payout.pay = symbolWin.multipliedBy(stake);
        }
        return payout;
    }
    getOffSet(length, payLine) {
        const offSet = [];
        for (let i = 0; i < length; i++) {
            offSet[i] = (payLine.length * payLine[i]) + i;
        }
        return offSet;
    }
}
exports.LineWinEvaluator = LineWinEvaluator;
//# sourceMappingURL=line_win_evaluator.js.map