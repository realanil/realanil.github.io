"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutTester = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
class PayoutTester {
    constructor() {
        this.payouts = [];
        this.totalBet = new bignumber_js_1.default(0);
        this.totalWin = new bignumber_js_1.default(0);
        this.winningSpins = 0;
        this.totalSpins = 0;
    }
    startTesting(spinsCount = 100000000) {
        this.totalSpins = spinsCount;
    }
    updateTotalBetAndWin(bet, win) {
        this.totalBet = this.totalBet.plus(bet);
        this.totalWin = this.totalWin.plus(win);
        if (win.isGreaterThan(new bignumber_js_1.default(0))) {
            this.winningSpins++;
        }
    }
    getGameRTP() {
        return this.totalWin.dividedBy(this.totalBet);
    }
    updateKeyCount(key) {
        for (let i = 0; i < this.payouts.length; i++) {
            if (this.payouts[i].key == key) {
                this.payouts[i].count += 1;
                return;
            }
        }
        this.createPayoutKey(key, "", 999999999);
        this.updateKeyCount(key);
    }
    updatePayout(key, payout) {
        if (payout.isLessThanOrEqualTo(new bignumber_js_1.default(0))) {
            return;
        }
        for (let i = 0; i < this.payouts.length; i++) {
            if (this.payouts[i].key == key) {
                this.payouts[i].payout = this.payouts[i].payout.plus(payout);
                this.payouts[i].count += 1;
                return;
            }
        }
        this.createPayoutKey(key, "", 999999999);
        this.updateKeyCount(key);
    }
    createPayoutKey(key, group, priority) {
        for (let i = 0; i < this.payouts.length; i++) {
            if (this.payouts[i].key == key) {
                return;
            }
        }
        const payout = new PayoutDetails();
        payout.key = key;
        payout.count = 0;
        payout.group = group;
        payout.priority = priority;
        payout.payout = new bignumber_js_1.default(0);
        this.payouts.push(payout);
    }
    printReport() {
        this.payouts.sort((a, b) => (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1 : 0));
        // fileName += ".txt";
        // try {
        //     PrintStream out = new PrintStream(new FileOutputStream(fileName));
        //     System.setOut(out);
        // } catch (FileNotFoundException e) {
        //     e.printStackTrace();
        // }
        console.log("Total Spins," + this.totalSpins);
        console.log("Total Bet," + this.totalBet);
        console.log("Total Win," + this.totalWin);
        console.log("Winning Spins," + this.winningSpins);
        console.log("");
        if (this.payouts.length == 0) {
            return;
        }
        let group = this.payouts[0].group;
        for (let i = 0; i < this.payouts.length; i++) {
            const pay = this.payouts[i];
            if (group !== pay.group) {
                console.log("");
                group = pay.group;
            }
            if (pay.payout.isGreaterThan(new bignumber_js_1.default(0))) {
                console.log(pay.key + " , count : " + pay.count + ", payout : " + pay.payout);
            }
            else {
                if (pay.count > 0) {
                    console.log(pay.key + ", count : " + pay.count);
                }
            }
        }
    }
    printProgressReport(spinsPlayed) {
        if (spinsPlayed > 10 && spinsPlayed % 50000 == 0) {
            console.log(spinsPlayed + " RTP: " + this.getGameRTP());
        }
    }
}
exports.PayoutTester = PayoutTester;
class PayoutDetails {
}
//# sourceMappingURL=payout-tester.js.map