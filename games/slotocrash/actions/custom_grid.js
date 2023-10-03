"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomGrid = void 0;
const random_1 = require("../../../libs/engine/generic/rng/random");
const random_2 = require("../../../libs/engine/slots/utils/random");
class CustomGrid {
    static AddBlastSymbol(rng, state, math) {
        const addBlast = random_2.RandomHelper.GetRandomFromList(rng, math.blastProb);
        if (addBlast.add) {
            const pos = rng.getRandom(new random_1.RandomObj(0, 3, -1));
            state.initialGrid[pos.num][0] = math.blastSymbol;
        }
    }
    static AddNewReel(rng, state, math, accumulated) {
        const d = 10000;
        let prob;
        let symbols = [];
        if (state.initialGrid.length < 10) {
            prob = state.multiplier * 0.2 / ((accumulated) + (state.multiplier * 0.2));
            symbols = math.symbols;
        }
        else {
            prob = state.multiplier * 0.25 / (accumulated + (state.multiplier * 0.25));
            symbols = math.symbolsAfter;
        }
        if (prob <= 0) {
            throw new Error("prob " + prob);
        }
        prob *= d;
        const value = rng.getRandom(new random_1.RandomObj(0, d, -1));
        if (value.num <= prob) {
            state.initialGrid.push([math.blastSymbol]);
        }
        else {
            const symbol = random_2.RandomHelper.GetRandomFromList(rng, symbols);
            state.initialGrid.push([symbol.symbol]);
        }
    }
}
exports.CustomGrid = CustomGrid;
//# sourceMappingURL=custom_grid.js.map