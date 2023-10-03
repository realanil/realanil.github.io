"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformSlotTester = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const slot_tester_1 = require("../../engine/slots/tester/slot_tester");
const request_model_1 = require("../slots/request_model");
class PlatformSlotTester extends slot_tester_1.SlotTester {
    startTesting(spinsCount = 100000000) {
        super.startTesting(spinsCount);
        while (spinsCount > 0) {
            const response = this.game.play(this.requestModel());
            if (response.response.error !== null) {
                console.log(response.response.error);
                break;
            }
            this.state = response.state;
            this.calculateGameRTP();
            this.recordSlotRTP(this.state);
            if (this.state.gameStatus.nextAction.includes("spin")) {
                spinsCount--;
                if (spinsCount % 50000 == 0) {
                    console.log(spinsCount, this.getGameRTP().toNumber());
                }
                if (spinsCount == 0) {
                    this.printReport();
                }
            }
        }
    }
    requestModel() {
        const request = new request_model_1.RequestModel();
        request.action = this.state && this.state.gameStatus ? this.state.gameStatus.nextAction[0] : "spin";
        request.stake = new bignumber_js_1.default(1);
        request.state = this.state;
        return request;
    }
}
exports.PlatformSlotTester = PlatformSlotTester;
//# sourceMappingURL=platform_slot_tester.js.map