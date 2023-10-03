"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformMath = void 0;
const slot_math_model_1 = require("../../engine/slots/models/slot_math_model");
class PlatformMath extends slot_math_model_1.SlotMath {
    constructor() {
        super(...arguments);
        this.defaultBet = 1;
        this.bets = [0.5, 1, 2, 5, 10];
    }
}
exports.PlatformMath = PlatformMath;
//# sourceMappingURL=platform_math.js.map