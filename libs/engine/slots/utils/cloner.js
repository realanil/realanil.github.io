"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloner = void 0;
class Cloner {
    static CloneGrid(target) {
        let grid = JSON.parse(JSON.stringify(target));
        return grid;
    }
    static CloneObject(target) {
        return JSON.parse(JSON.stringify(target));
    }
}
exports.Cloner = Cloner;
//# sourceMappingURL=cloner.js.map