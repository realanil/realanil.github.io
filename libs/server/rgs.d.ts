import express from 'express';
import { BaseSlotGame } from '../platform/slots/base_slot_game';
export declare class RGS {
    states: Map<string, any>;
    app: express.Application;
    server: BaseSlotGame;
    constructor(gameServer: BaseSlotGame);
    start(port: string): void;
}
