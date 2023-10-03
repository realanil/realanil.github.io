"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomWins = void 0;
const slot_state_model_1 = require("../../../libs/engine/slots/models/slot_state_model");
const grid_1 = require("../../../libs/engine/slots/utils/grid");
class CustomWins {
    static EvaluateNewReelWin(grid, stake, math) {
        const lastSymbol = grid[grid.length - 1][0];
        if (lastSymbol === math.blastSymbol) {
            return [];
        }
        const wins = [];
        math.info.symbols.forEach(symbol => {
            if (symbol.payout && symbol.payout.length > 0) {
                if (symbol.id === lastSymbol) {
                    const win = new slot_state_model_1.SlotSpinWinsState();
                    win.symbol = symbol.id;
                    win.offsets = [grid.length - 1];
                    win.pay = stake.multipliedBy(symbol.payout[1]);
                    wins.push(win);
                }
            }
        });
        return wins;
    }
    static EvaluateWin(grid, stake, math) {
        const wins = [];
        const blasts = grid_1.Grid.FindScatterOffsets(math.blastSymbol, grid);
        if (blasts.length > 0) {
            return wins;
        }
        math.info.symbols.forEach(symbol => {
            if (symbol.payout && symbol.payout.length > 0) {
                const offsets = grid_1.Grid.FindScatterOffsets(symbol.id, grid);
                if (offsets.length > 0) {
                    const win = new slot_state_model_1.SlotSpinWinsState();
                    win.symbol = symbol.id;
                    win.offsets = offsets;
                    win.pay = stake.multipliedBy(symbol.payout[1]).multipliedBy(offsets.length);
                    wins.push(win);
                }
            }
        });
        return wins;
    }
}
exports.CustomWins = CustomWins;
//# sourceMappingURL=custom_wins.js.map