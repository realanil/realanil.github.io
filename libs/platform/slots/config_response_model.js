"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigResponseModel = void 0;
const response_model_1 = require("../base/response_model");
class ConfigResponseModel extends response_model_1.ResponseModel {
    constructor(version, name, math, response) {
        super(version, name, "");
        this.bets = math.bets;
        this.defaultBet = math.defaultBet;
        this.paytable = [];
        math.info.symbols.forEach(s => {
            this.paytable.push(new SymbolsResponse(s.name, s.id, s.payout));
        });
        this.betMultiplier = math.info.betMultiplier;
        this.paylines = [];
        math.info.payLines.forEach(p => {
            this.paylines.push(p.slice());
        });
        if (response) {
            this.prevSpin = response;
        }
        else {
            this.grid = math.defaultgrid;
        }
    }
}
exports.ConfigResponseModel = ConfigResponseModel;
class SymbolsResponse {
    constructor(name, id, payout) {
        this.name = "";
        this.id = -1;
        this.payout = [];
        this.name = name;
        this.id = id;
        this.payout = payout;
    }
}
//# sourceMappingURL=config_response_model.js.map