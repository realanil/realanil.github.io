"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStatus = exports.GameState = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
class GameState {
    constructor() {
        this.name = "";
        this.version = "";
        this.error = "";
        this.gameStatus = new GameStatus();
    }
}
exports.GameState = GameState;
class GameStatus {
    constructor() {
        this.action = "";
        this.nextAction = ["spin"];
        this.totalBet = new bignumber_js_1.default(0);
        this.stakeValue = new bignumber_js_1.default(0);
        this.totalWin = new bignumber_js_1.default(0);
        this.currentWin = new bignumber_js_1.default(0);
    }
}
exports.GameStatus = GameStatus;
//# sourceMappingURL=game_state_model.js.map