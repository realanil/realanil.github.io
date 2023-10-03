"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Symbols = void 0;
class Symbols {
    static UniqueWinningSymbols(wins) {
        const offsets = new Set();
        wins.forEach(win => {
            win.offsets.forEach(offset => {
                offsets.add(offset);
            });
        });
        return Array.from(offsets);
    }
}
exports.Symbols = Symbols;
//# sourceMappingURL=symbols.js.map