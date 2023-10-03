export declare class Grid {
    static FirstStopFromStops(grid: number[][]): number[];
    static MarkOffsets(grid: number[][], offsets: number[]): void;
    static MoveMarkedOffsetsDown(grid: number[][]): number[][];
    static FindScatterOffsets(symbol: number, grid: number[][]): number[];
}
