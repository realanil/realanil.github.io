"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotoCrashTester = void 0;
const platform_slot_tester_1 = require("./libs/platform/tester/platform_slot_tester");
const slotocrash_server_1 = require("./games/slotocrash/slotocrash_server");
class SlotoCrashTester extends platform_slot_tester_1.PlatformSlotTester {
    constructor() {
        super();
        this.game = new slotocrash_server_1.SlotocrashServer();
    }
    recordSlotRTP(state) {
        if (state.gameStatus.action == "collect") {
            this.recordSymbolRTP(state.paidSpin[0], "main");
        }
    }
    requestModel() {
        const strategy = 4;
        const request = super.requestModel();
        const state = this.state;
        let gridlength = 0;
        switch (strategy) {
            case 0:
                gridlength = 3;
                break;
            case 1:
                gridlength = 4;
                break;
            case 2:
                gridlength = 5;
                break;
            case 3:
                gridlength = 10;
                break;
            case 4:
                gridlength = 15;
                break;
        }
        if (state && state.paidSpin[0].finalGrid.length == gridlength && state.gameStatus.nextAction.includes("collect")) {
            request.action = "collect";
        }
        return request;
    }
}
exports.SlotoCrashTester = SlotoCrashTester;
new SlotoCrashTester().startTesting(5000000);
//# sourceMappingURL=tester.js.map