import BigNumber from "bignumber.js";
import { SlotState } from "../../../libs/engine/slots/models/slot_state_model";
import { PlayResponseModel } from "../../../libs/platform/slots/play_response_model";
export declare class SlotCrashResponseModel extends PlayResponseModel {
    collectedWin: BigNumber;
    isCollected: boolean;
    constructor(version: string, name: string, error: string, state: SlotState);
}
