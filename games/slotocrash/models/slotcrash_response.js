"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotCrashResponseModel = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const play_response_model_1 = require("../../../libs/platform/slots/play_response_model");
class SlotCrashResponseModel extends play_response_model_1.PlayResponseModel {
    constructor(version, name, error, state) {
        super(version, name, error, state);
        const s = state;
        this.collectedWin = s.collectedWin || new bignumber_js_1.default(0);
        this.isCollected = s.isCollected || false;
    }
}
exports.SlotCrashResponseModel = SlotCrashResponseModel;
//# sourceMappingURL=slotcrash_response.js.map