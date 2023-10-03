import { PlatformSlotTester } from "./libs/platform/tester/platform_slot_tester";
import { RequestModel } from "./libs/platform/slots/request_model";
import { SlotState } from "./libs/engine/slots/models/slot_state_model";
export declare class SlotoCrashTester extends PlatformSlotTester {
    constructor();
    protected recordSlotRTP(state: SlotState): void;
    protected requestModel(): RequestModel;
}
