import { PayoutTester } from "../../generic/tester/payout-tester";
import { SlotSpinState, SlotState } from "../models/slot_state_model";
export declare class SlotTester extends PayoutTester {
    protected state: SlotState;
    constructor();
    protected createSlotKeys(): void;
    protected recordSlotRTP(state: SlotState): void;
    protected recordSymbolRTP(state: SlotSpinState, id: string): void;
    protected calculateGameRTP(): void;
}
