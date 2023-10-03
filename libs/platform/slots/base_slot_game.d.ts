import { SlotState } from "../../engine/slots/models/slot_state_model";
import { NodeRNG } from "../base/node_rng";
import { PlatformMath } from "../base/platform_math";
import { ConfigResponseModel } from "./config_response_model";
import { PlayResponseModel } from "./play_response_model";
import { RequestModel } from "./request_model";
import { ServerResponseModel } from "./server_response_model";
export declare class BaseSlotGame {
    protected name: string;
    protected version: string;
    protected math: PlatformMath;
    protected state: SlotState;
    protected rng: NodeRNG;
    constructor(name: string, version: string);
    config(state: SlotState): ConfigResponseModel;
    play(request: RequestModel): ServerResponseModel;
    protected getPlayResponse(): PlayResponseModel;
    protected executePlay(action: string): void;
    protected executeBaseSpin(): void;
    protected executeFreeSpin(): void;
    protected executeCollect(): void;
    protected defaultEmptyState(): SlotState;
}
