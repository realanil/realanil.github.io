"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triggerer = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const slot_state_model_1 = require("../models/slot_state_model");
class Triggerer {
    static UpdateNextAction(state, action) {
        if (action.triggers.includes("freespin")) {
            state.gameStatus.nextAction = action.triggers;
        }
    }
    static UpdateFeature(state, feature, action) {
        feature.triggers = action.triggers;
        feature.count = action.spins;
        if (action.triggers.includes("freespin")) {
            state.freespin = new slot_state_model_1.FeatureDetails();
            state.freespin.left = action.spins;
            state.freespin.total = action.spins;
            state.freespin.accumulated = new bignumber_js_1.default(0);
        }
        if (action.triggers.includes("retrigger")) {
            state.freespin.left += action.spins;
        }
    }
}
exports.Triggerer = Triggerer;
//# sourceMappingURL=triggerer.js.map