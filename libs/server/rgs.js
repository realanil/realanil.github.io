"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RGS = void 0;
const express_1 = __importDefault(require("express"));
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const uuid_1 = require("uuid");
class RGS {
    constructor(gameServer) {
        this.states = new Map();
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.server = gameServer;
        this.app.post('/:gameCode/config', (req, res) => {
            const gameCode = req.params.gameCode;
            const config = this.server.config(null);
            config.sessionid = (0, uuid_1.v4)();
            if (this.states.keys.length > 300) {
                Array.from(this.states.keys())
                    .slice(0, 300 - this.states.keys.length)
                    .forEach(key => this.states.delete(key));
            }
            this.states.set(config.sessionid, null);
            res.send(config).status(200);
        });
        this.app.post('/:gameCode/play', (req, res) => {
            const gameCode = req.params.gameCode;
            const sessionid = req.body.sessionid;
            if (!this.states.has(sessionid)) {
                res.send(`invalid session id ${sessionid}`).status(200);
                return;
            }
            const state = this.states.get(sessionid);
            const stake = req.body.stake ? new bignumber_js_1.default(req.body.stake) : null;
            const request = { action: req.body.action, stake: stake, cheat: req.body.cheat, state };
            const response = this.server.play(request);
            if (response.state) {
                this.states.set(sessionid, JSON.parse(JSON.stringify(response.state)));
            }
            res.send(response.response).status(200);
        });
    }
    start(port) {
        this.app.listen(port, () => {
            console.log(`listening at port ${port} `);
        });
    }
}
exports.RGS = RGS;
//# sourceMappingURL=rgs.js.map