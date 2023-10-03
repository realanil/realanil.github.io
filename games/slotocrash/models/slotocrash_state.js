"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotocrashState = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const slot_state_model_1 = require("../../../libs/engine/slots/models/slot_state_model");
class SlotocrashState extends slot_state_model_1.SlotState {
    constructor() {
        super(...arguments);
        this.isCollected = false;
        this.collectedWin = new bignumber_js_1.default(0);
    }
}
exports.SlotocrashState = SlotocrashState;
//# sourceMappingURL=slotocrash_state.js.map