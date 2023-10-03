"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
class Grid {
    static FirstStopFromStops(grid) {
        const stops = [];
        grid.forEach((reel, index) => {
            stops[index] = reel[0];
        });
        return stops;
    }
    static MarkOffsets(grid, offsets) {
        offsets.forEach(offset => {
            const col = offset % grid.length;
            const row = Math.floor(offset / grid.length);
            grid[col][row] = -1;
        });
    }
    static MoveMarkedOffsetsDown(grid) {
        const newgrid = [[]];
        for (let col = 0; col < grid.length; col++) {
            newgrid[col] = [];
            for (let row = 0; row < grid[col].length; row++) {
                if (grid[col][row] === -1) {
                    newgrid[col].push(grid[col][row]);
                }
            }
        }
        for (let col = 0; col < grid.length; col++) {
            for (let row = 0; row < grid[col].length; row++) {
                if (grid[col][row] !== -1) {
                    newgrid[col].push(grid[col][row]);
                }
            }
        }
        return newgrid;
    }
    static FindScatterOffsets(symbol, grid) {
        const offsets = [];
        for (let reel = 0; reel < grid.length; reel++) {
            for (let row = 0; row < grid[reel].length; row++) {
                if (grid[reel][row] == symbol) {
                    offsets.push(grid.length * row + reel);
                }
            }
        }
        return offsets;
    }
}
exports.Grid = Grid;
//# sourceMappingURL=grid.js.map