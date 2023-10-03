import { IRandom } from "../../generic/rng/random";
export declare class RandomHelper {
    static GetRandomFromList(rng: IRandom, list: {
        weight: number;
    }[]): {
        weight: number;
    };
    static GetObjectFromList(randomNumber: number, list: {
        weight: number;
    }[]): {
        weight: number;
    };
}
