"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScatterSymbolCount = void 0;
const slot_state_model_1 = require("../models/slot_state_model");
const grid_1 = require("../utils/grid");
class ScatterSymbolCount {
    static checkCondition(condition, state) {
        const feature = new slot_state_model_1.SlotFeaturesState();
        feature.offsets = grid_1.Grid.FindScatterOffsets(condition.symbol, state.finalGrid);
        feature.isActive = true;
        feature.id = condition.id;
        feature.symbol = condition.symbol;
        if (feature.isActive && condition.minCount > -1) {
            feature.isActive = feature.offsets.length >= condition.minCount;
        }
        if (feature.isActive && condition.maxCount > -1) {
            feature.isActive = feature.offsets.length <= condition.maxCount;
        }
        if (feature.isActive && condition.oak !== null && condition.oak !== undefined) {
            feature.isActive = condition.oak.includes(feature.offsets.length);
        }
        return feature;
    }
}
exports.ScatterSymbolCount = ScatterSymbolCount;
//# sourceMappingURL=scatter_symbol_count.js.map