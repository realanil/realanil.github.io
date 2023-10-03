import BigNumber from "bignumber.js";
export declare class PayoutTester {
    payouts: PayoutDetails[];
    totalBet: BigNumber;
    totalWin: BigNumber;
    winningSpins: number;
    totalSpins: number;
    startTesting(spinsCount?: number): void;
    protected updateTotalBetAndWin(bet: BigNumber, win: BigNumber): void;
    protected getGameRTP(): BigNumber;
    protected updateKeyCount(key: string): void;
    protected updatePayout(key: string, payout: BigNumber): void;
    protected createPayoutKey(key: string, group: string, priority: number): void;
    protected printReport(): void;
    protected printProgressReport(spinsPlayed: number): void;
}
declare class PayoutDetails {
    key: string;
    group: string;
    count: number;
    payout: BigNumber;
    priority: number;
}
export {};
