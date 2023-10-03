"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGrid = void 0;
const random_1 = require("../utils/random");
class CreateGrid {
    static StandardGrid(reelSet, stops) {
        const colLen = stops.length;
        const grid = [];
        for (let col = 0; col < colLen; col++) {
            grid[col] = [];
            for (let row = 0; row < stops[col].length; row++) {
                grid[col][row] = reelSet[col][stops[col][row]];
            }
        }
        return grid;
    }
    static WeightedSymbolGrid(rng, reelSet, layout) {
        const grid = [];
        layout.forEach((reel, index) => {
            grid[index] = [];
            for (let i = 0; i < reel; i++) {
                const symbol = random_1.RandomHelper.GetRandomFromList(rng, reelSet);
                grid[index].push(symbol.symbol);
            }
        });
        return grid;
    }
}
exports.CreateGrid = CreateGrid;
//# sourceMappingURL=create_grid.js.map