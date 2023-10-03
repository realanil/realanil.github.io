"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestModel = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
class RequestModel {
    constructor() {
        this.action = "";
        this.stake = new bignumber_js_1.default(0);
    }
}
exports.RequestModel = RequestModel;
//# sourceMappingURL=request_model.js.map