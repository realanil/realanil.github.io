import { BaseSlotGame } from "../../libs/platform/slots/base_slot_game";
import { PlayResponseModel } from "../../libs/platform/slots/play_response_model";
export declare class SlotocrashServer extends BaseSlotGame {
    constructor();
    protected executeBaseSpin(): void;
    protected executeCollect(): void;
    protected executeFreeSpin(): void;
    protected getPlayResponse(): PlayResponseModel;
}
