"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStops = void 0;
const random_1 = require("../../generic/rng/random");
class CreateStops {
    static StandardStopsForNulls(initialStop, reelSet, grid) {
        for (let col = 0; col < grid.length; col++) {
            const reelLength = reelSet[col].length;
            for (let row = 0; row < grid[col].length; row++) {
                if (grid[col][row] === -1) {
                    let stop = initialStop[col] - row - 1;
                    stop = (stop < 0) ? (reelLength + stop) : stop;
                    grid[col][row] = stop;
                }
                else {
                    break;
                }
            }
        }
    }
    static StandardStops(rng, reelSet, layout) {
        const req = [];
        for (let r = 0; r < reelSet.length; r++) {
            req[r] = new random_1.RandomObj(0, reelSet[r].length, r);
        }
        const resp = rng.getRandoms(req);
        const stops = [];
        for (let i = 0; i < resp.length; i++) {
            const col = resp[i].index;
            stops[col] = [];
            const reelLength = reelSet[col].length;
            for (let row = 0; row < layout[col]; row++) {
                let stop = resp[i].num + row;
                stop = (stop >= reelLength) ? (stop - reelLength) : stop;
                stops[col][row] = stop;
            }
        }
        return stops;
    }
}
exports.CreateStops = CreateStops;
//# sourceMappingURL=create_stops.js.map