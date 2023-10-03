"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSlotGame = void 0;
const slot_state_model_1 = require("../../engine/slots/models/slot_state_model");
const node_rng_1 = require("../base/node_rng");
const config_response_model_1 = require("./config_response_model");
const play_response_model_1 = require("./play_response_model");
const server_response_model_1 = require("./server_response_model");
class BaseSlotGame {
    constructor(name, version) {
        this.name = name;
        this.version = version;
        this.rng = new node_rng_1.NodeRNG();
        this.state = new slot_state_model_1.SlotState();
    }
    config(state) {
        let response = null;
        if (state && state.gameStatus && state.gameStatus.action !== "" && !state.gameStatus.nextAction.includes("spin")) {
            response = new play_response_model_1.PlayResponseModel(this.version, this.name, this.state.error, this.state);
        }
        return new config_response_model_1.ConfigResponseModel(this.version, this.name, this.math, response);
    }
    play(request) {
        this.state = request.state;
        const response = new server_response_model_1.ServerResponseModel();
        if (this.state && this.state.gameStatus && this.state.gameStatus.nextAction) {
            if (!this.state.gameStatus.nextAction.includes(request.action)) {
                response.state = this.state;
                response.response = new play_response_model_1.PlayResponseModel(this.version, this.name, `Wrong Action. Expected ${this.state.gameStatus.nextAction} Got ${request.action}`, this.state);
                return response;
            }
        }
        else {
            if (request.action !== "spin") {
                response.state = this.state;
                response.response = new play_response_model_1.PlayResponseModel(this.version, this.name, "Action not allowed", this.state);
                return response;
            }
        }
        if (request.action === "spin") {
            if (!this.math.bets.includes(request.stake.toNumber())) {
                response.response = new play_response_model_1.PlayResponseModel(this.version, this.name, `Invalid Stake. Got ${request.stake}`, this.state);
                return response;
            }
            this.state = this.defaultEmptyState();
            this.state.gameStatus.stakeValue = request.stake;
            this.state.gameStatus.totalBet = request.stake.multipliedBy(this.math.info.betMultiplier);
        }
        this.state.error = null;
        this.state.gameStatus.action = request.action;
        this.rng.setCheat(request.cheat);
        this.executePlay(request.action);
        response.state = this.state;
        response.response = this.getPlayResponse();
        return response;
    }
    getPlayResponse() {
        return new play_response_model_1.PlayResponseModel(this.version, this.name, this.state.error, this.state);
    }
    executePlay(action) {
        switch (action) {
            case "spin":
                this.executeBaseSpin();
                break;
            case "freespin":
                this.executeFreeSpin();
                break;
            case "collect":
                this.executeCollect();
                break;
            default:
                this.state.error = "Not Allowed";
        }
    }
    executeBaseSpin() {
        this.state.error = "Not Allowed";
    }
    executeFreeSpin() {
        this.state.error = "Not Allowed";
    }
    executeCollect() {
        this.state.error = "Not Allowed";
    }
    defaultEmptyState() {
        return new slot_state_model_1.SlotState();
    }
}
exports.BaseSlotGame = BaseSlotGame;
//# sourceMappingURL=base_slot_game.js.map