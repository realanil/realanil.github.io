import BigNumber from "bignumber.js";
import { SlotState } from "../../../libs/engine/slots/models/slot_state_model";
export declare class SlotocrashState extends SlotState {
    isCollected: boolean;
    collectedWin: BigNumber;
}
