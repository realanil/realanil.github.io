"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeRNG = void 0;
const random_1 = require("../../engine/generic/rng/random");
class NodeRNG {
    constructor() {
        this.cheat = [];
    }
    getRandom(req) {
        const resp = new random_1.RandomObj(req.min, req.max, req.index);
        const num = this.cheat.length > 0 ? this.cheat.shift() : Math.floor(Math.random() * (req.max - req.min)) + req.min;
        resp.num = num;
        return resp;
    }
    getRandoms(req) {
        const resp = [];
        req.forEach(e => {
            resp.push(this.getRandom(e));
        });
        return resp;
    }
    setCheat(cheat) {
        this.cheat = [];
        if (cheat === null || cheat === undefined || cheat.length === 0) {
            return;
        }
        this.cheat = cheat;
    }
}
exports.NodeRNG = NodeRNG;
//# sourceMappingURL=node_rng.js.map