"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayResponseModel = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const response_model_1 = require("../base/response_model");
class PlayResponseModel extends response_model_1.ResponseModel {
    constructor(version, name, error, state) {
        super(version, name, error);
        this.grid = [];
        this.wins = [];
        this.win = new bignumber_js_1.default(0);
        if (error !== null) {
            return;
        }
        this.status = new StatusResponse();
        this.status.action = state.gameStatus.action;
        this.status.nextAction = state.gameStatus.nextAction;
        this.status.totalBet = state.gameStatus.totalBet;
        this.status.totalWin = state.gameStatus.totalWin;
        this.grid = state.paidSpin[0].finalGrid;
        this.win = state.paidSpin[0].win;
        this.multiplier = state.paidSpin[0].multiplier;
        this.wins = [];
        state.paidSpin[0].wins.forEach(win => {
            this.wins.push(new PlaySlotWinsResponse(win.id, win.symbol, win.type, win.offsets, win.pay, win.wildIncluded));
        });
        if (state.freespin !== null && state.freespin !== undefined) {
            this.feature = new FeatureResponse();
            this.feature.left = state.freespin.left;
            this.feature.total = state.freespin.total;
            this.feature.accumulated = state.freespin.accumulated;
        }
        if (state.paidSpin.length > 1) {
            this.subspins = [];
            for (let i = 1; i < state.paidSpin.length; i++) {
                const subspin = new SubSpinResponse();
                subspin.grid = state.paidSpin[i].finalGrid;
                subspin.win = state.paidSpin[i].win;
                subspin.wins = [];
                state.paidSpin[i].wins.forEach(win => {
                    subspin.wins.push(new PlaySlotWinsResponse(win.id, win.symbol, win.type, win.offsets, win.pay, win.wildIncluded));
                });
                subspin.id = state.paidSpin[i].cascade.id;
                subspin.offsets = state.paidSpin[i].cascade.offsets;
                subspin.type = state.paidSpin[i].cascade.type;
                subspin.prevWin = state.paidSpin[i].cascade.win;
                subspin.multiplier = state.paidSpin[i].multiplier;
                this.subspins.push(subspin);
            }
        }
    }
}
exports.PlayResponseModel = PlayResponseModel;
class StatusResponse {
    constructor() {
        this.nextAction = [];
    }
}
class SubSpinResponse {
    constructor() {
        this.grid = [];
        this.wins = [];
        this.win = new bignumber_js_1.default(0);
        this.offsets = [];
        this.prevWin = new bignumber_js_1.default(0);
    }
}
class FeatureResponse {
}
class PlaySlotWinsResponse {
    constructor(id, symbol, type, offsets, pay, wildIncluded) {
        this.id = id;
        this.symbol = symbol;
        this.type = type;
        this.offsets = offsets;
        this.pay = new bignumber_js_1.default(0).plus(pay);
        this.wildIncluded = wildIncluded;
    }
}
//# sourceMappingURL=play_response_model.js.map