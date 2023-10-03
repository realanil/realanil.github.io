"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotocrashServer = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const base_slot_game_1 = require("../../libs/platform/slots/base_slot_game");
const slotocrash_state_1 = require("./models/slotocrash_state");
const slot_state_model_1 = require("../../libs/engine/slots/models/slot_state_model");
const create_grid_1 = require("../../libs/engine/slots/actions/create_grid");
const cloner_1 = require("../../libs/engine/slots/utils/cloner");
const custom_grid_1 = require("./actions/custom_grid");
const custom_wins_1 = require("./actions/custom_wins");
const calculate_wins_1 = require("../../libs/engine/slots/actions/calculate_wins");
const slotocrash_math_1 = require("./models/slotocrash_math");
const spin_condition_1 = require("../../libs/engine/slots/conditions/spin_condition");
const triggerer_1 = require("../../libs/engine/slots/features/triggerer");
const update_feature_1 = require("../../libs/engine/slots/features/update_feature");
const slotcrash_response_1 = require("./models/slotcrash_response");
class SlotocrashServer extends base_slot_game_1.BaseSlotGame {
    constructor() {
        super("Slotocrash", "0.3");
        this.state = new slotocrash_state_1.SlotocrashState();
        this.math = new slotocrash_math_1.SlotocrashMath();
    }
    executeBaseSpin() {
        let state = new slot_state_model_1.SlotSpinState();
        state.initialGrid = create_grid_1.CreateGrid.WeightedSymbolGrid(this.rng, this.math.paidReels[0].symbols, this.math.info.gridLayout);
        custom_grid_1.CustomGrid.AddBlastSymbol(this.rng, state, this.math);
        state.finalGrid = cloner_1.Cloner.CloneGrid(state.initialGrid);
        state.wins = custom_wins_1.CustomWins.EvaluateWin(state.finalGrid, this.state.gameStatus.stakeValue, this.math);
        state.win = calculate_wins_1.CalculateWins.AddPays(state.wins);
        state.win = state.win.multipliedBy(state.multiplier);
        const feature = spin_condition_1.SpinCondition.WinCondition(this.math.conditions[0], state);
        if (feature.isActive) {
            state.win = state.win.plus(this.state.gameStatus.totalBet);
            triggerer_1.Triggerer.UpdateFeature(this.state, feature, this.math.actions[0]);
            triggerer_1.Triggerer.UpdateNextAction(this.state, this.math.actions[0]);
            this.state.freespin.accumulated = state.win;
        }
        this.state.paidSpin.push(state);
        this.state.gameStatus.currentWin = new bignumber_js_1.default(0);
        this.state.gameStatus.totalWin = new bignumber_js_1.default(0);
    }
    executeCollect() {
        let state = this.state.paidSpin[0];
        state.wins = [];
        state.win = new bignumber_js_1.default(0);
        this.state.gameStatus.currentWin = this.state.freespin.accumulated;
        this.state.gameStatus.totalWin = this.state.freespin.accumulated;
        this.state.gameStatus.nextAction = ["freespin"];
        this.state.isCollected = true;
        this.state.collectedWin = this.state.freespin.accumulated;
    }
    executeFreeSpin() {
        let state = this.state.paidSpin[0];
        const previn = this.state.freespin.accumulated;
        const stake = this.state.gameStatus.stakeValue;
        state.multiplier += 1;
        custom_grid_1.CustomGrid.AddNewReel(this.rng, state, this.math, Number(previn));
        state.finalGrid = cloner_1.Cloner.CloneGrid(state.initialGrid);
        state.wins = custom_wins_1.CustomWins.EvaluateNewReelWin(state.finalGrid, new bignumber_js_1.default(stake), this.math);
        if (state.wins.length > 1) {
            throw new Error("Wins " + state.wins.length);
        }
        state.win = calculate_wins_1.CalculateWins.AddPays(state.wins);
        state.win = state.win.multipliedBy(state.multiplier);
        this.state.freespin.accumulated = new bignumber_js_1.default(previn).plus(state.win);
        const feature = spin_condition_1.SpinCondition.WinCondition(this.math.conditions[0], state);
        if (feature.isActive) {
            triggerer_1.Triggerer.UpdateFeature(this.state, feature, this.math.actions[1]);
            triggerer_1.Triggerer.UpdateNextAction(this.state, this.math.actions[1]);
        }
        update_feature_1.UpdateFeature.updateFreeSpinCount(this.state);
        if (this.state.isCollected === true) {
            this.state.gameStatus.nextAction = ["freespin"];
        }
        if (this.state.freespin.left === 0) {
            // this.state.freespin.accumulated = new BigNumber(0);
            this.state.gameStatus.nextAction = ["spin"];
        }
        this.state.gameStatus.currentWin = new bignumber_js_1.default(0);
        this.state.gameStatus.totalWin = new bignumber_js_1.default(0);
    }
    getPlayResponse() {
        return new slotcrash_response_1.SlotCrashResponseModel(this.version, this.name, this.state.error, this.state);
    }
}
exports.SlotocrashServer = SlotocrashServer;
//# sourceMappingURL=slotocrash_server.js.map