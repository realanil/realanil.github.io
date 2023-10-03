import BigNumber from "bignumber.js";
import { ResponseModel } from "../base/response_model";
import { PlayResponseModel } from "./play_response_model";
import { PlatformMath } from "../base/platform_math";
export declare class ConfigResponseModel extends ResponseModel {
    betMultiplier: BigNumber;
    paytable: SymbolsResponse[];
    paylines: number[][];
    defaultBet: number;
    bets: number[];
    grid: number[][];
    prevSpin: PlayResponseModel;
    constructor(version: string, name: string, math: PlatformMath, response: PlayResponseModel);
}
declare class SymbolsResponse {
    name: string;
    id: number;
    payout: BigNumber[];
    constructor(name: string, id: number, payout: BigNumber[]);
}
export {};
