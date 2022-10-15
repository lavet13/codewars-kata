'use strict';

class Group {
    #group;

    constructor(obj) {
        this.#group = [...Object.entries(obj)];
    }

    calcBalance() {
        const getAverage = () => {
            return this.#group.reduce(
                (acc, [_, value], i, arr) =>
                    i !== arr.length - 1
                        ? acc + value
                        : (acc = (acc + value) / (i + 1)),
                0
            );
        };

        const averageValue = getAverage();
        return this.#group.map(([_, value]) => [
            _,
            +(value - averageValue).toFixed(2),
        ]);
    }
}

function splitTheBill(x) {
    const group = new Group(x);
    return group
        .calcBalance()
        .reduce(
            (acc, [key, value]) => Object.assign(acc, { [key]: value }),
            {}
        );
}

console.log(splitTheBill({ A: 20, B: 15, C: 10 }));
