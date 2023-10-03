"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CascadeState = exports.SlotFeaturesState = exports.SlotSpinWinsState = exports.SlotSpinState = exports.FeatureDetails = exports.SlotState = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const game_state_model_1 = require("../../generic/models/game_state_model");
class SlotState extends game_state_model_1.GameState {
    constructor() {
        super(...arguments);
        this.paidSpin = [];
    }
}
exports.SlotState = SlotState;
class FeatureDetails {
}
exports.FeatureDetails = FeatureDetails;
class SlotSpinState {
    constructor() {
        this.stops = [[]];
        this.initialGrid = [[]];
        this.finalGrid = [[]];
        this.win = new bignumber_js_1.default(0);
        this.multiplier = 1;
    }
}
exports.SlotSpinState = SlotSpinState;
class SlotSpinWinsState {
}
exports.SlotSpinWinsState = SlotSpinWinsState;
class SlotFeaturesState {
    constructor() {
        this.symbol = -1;
    }
}
exports.SlotFeaturesState = SlotFeaturesState;
class CascadeState {
    constructor() {
        this.win = new bignumber_js_1.default(0);
    }
}
exports.CascadeState = CascadeState;
//# sourceMappingURL=slot_state_model.js.map