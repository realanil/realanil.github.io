"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFeature = void 0;
class UpdateFeature {
    static updateFreeSpinCount(state) {
        state.freespin.left--;
        if (state.freespin.left === 0) {
            state.gameStatus.nextAction = ["spin"];
        }
    }
}
exports.UpdateFeature = UpdateFeature;
//# sourceMappingURL=update_feature.js.map