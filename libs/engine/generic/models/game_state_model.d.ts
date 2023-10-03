import BigNumber from "bignumber.js";
export declare class GameState {
    name: string;
    version: string;
    error: string;
    gameStatus: GameStatus;
}
export declare class GameStatus {
    action: string;
    nextAction: string[];
    totalBet: BigNumber;
    stakeValue: BigNumber;
    totalWin: BigNumber;
    currentWin: BigNumber;
}
