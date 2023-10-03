"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinCondition = void 0;
const slot_state_model_1 = require("../models/slot_state_model");
class SpinCondition {
    static WinCondition(condition, state) {
        const feature = new slot_state_model_1.SlotFeaturesState();
        feature.isActive = state.win.isGreaterThan(0);
        feature.id = condition.id;
        feature.symbol = -1;
        return feature;
    }
}
exports.SpinCondition = SpinCondition;
//# sourceMappingURL=spin_condition.js.map