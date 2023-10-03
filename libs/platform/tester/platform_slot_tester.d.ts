import { SlotTester } from "../../engine/slots/tester/slot_tester";
import { BaseSlotGame } from "../slots/base_slot_game";
import { RequestModel } from "../slots/request_model";
export declare class PlatformSlotTester extends SlotTester {
    protected game: BaseSlotGame;
    startTesting(spinsCount?: number): void;
    protected requestModel(): RequestModel;
}
