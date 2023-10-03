import BigNumber from "bignumber.js";
import { SlotState } from "../../engine/slots/models/slot_state_model";
import { ResponseModel } from "../base/response_model";
export declare class PlayResponseModel extends ResponseModel {
    grid: number[][];
    multiplier: number;
    wins: PlaySlotWinsResponse[];
    win: BigNumber;
    subspins: SubSpinResponse[];
    feature: FeatureResponse;
    status: StatusResponse;
    constructor(version: string, name: string, error: string, state: SlotState);
}
declare class StatusResponse {
    action: string;
    nextAction: string[];
    totalBet: BigNumber;
    totalWin: BigNumber;
}
declare class SubSpinResponse {
    id: number;
    grid: number[][];
    wins: PlaySlotWinsResponse[];
    win: BigNumber;
    offsets: number[];
    type: string;
    multiplier: number;
    prevWin: BigNumber;
}
declare class FeatureResponse {
    total: number;
    left: number;
    accumulated: BigNumber;
}
declare class PlaySlotWinsResponse {
    id: number;
    symbol: number;
    type: string;
    offsets: number[];
    pay: BigNumber;
    wildIncluded: boolean;
    constructor(id: number, symbol: number, type: string, offsets: number[], pay: BigNumber, wildIncluded: boolean);
}
export {};
