"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomHelper = void 0;
const random_1 = require("../../generic/rng/random");
class RandomHelper {
    static GetRandomFromList(rng, list) {
        if (list.length == 1)
            return list[0];
        let totalWeight = 0;
        list.forEach(item => {
            totalWeight += item.weight;
        });
        const random = rng.getRandom(new random_1.RandomObj(0, totalWeight, -1));
        return this.GetObjectFromList(random.num, list);
    }
    static GetObjectFromList(randomNumber, list) {
        if (list.length == 1)
            return list[0];
        let weightSum = 0;
        for (let i = 0; i < list.length; i++) {
            weightSum += list[i].weight;
            if (randomNumber < weightSum)
                return list[i];
        }
        return null;
    }
}
exports.RandomHelper = RandomHelper;
//# sourceMappingURL=random.js.map