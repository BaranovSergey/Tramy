export const items = [
    { name: 'Tent', volume: 15 },
    { name: 'Sleeping Bag', volume: 10 },
    { name: 'Sleeping Pad', volume: 5 },
    { name: 'Cooking Set', volume: 8 },
    { name: 'Gas Stove', volume: 3 },
    { name: 'Insect Repellent', volume: 2 },
    { name: 'Compass', volume: 1 },
    { name: 'Flashlight', volume: 2 },
    { name: 'First Aid Kit', volume: 5 },
    { name: 'Water Bottle', volume: 4 }
];

const getCombination = (items, backpackVolume) => {
    const n = items.length;
    let maxVolume = 0;
    let bestCombination = [];

    const backtrack = (index, volume, combination) => {
        if (volume > maxVolume && volume <= backpackVolume) {
            maxVolume = volume;
            bestCombination = combination.slice();
        }

        if (index === n) {
            return;
        }

        backtrack(index + 1, volume + items[index].volume, [...combination, items[index]]);
        backtrack(index + 1, volume, combination);
    };

    backtrack(0, 0, []);

    return bestCombination;
};

export const solveBackpackProblem = (people, items) => {
    const solution = {};

    for (const person of people) {
        const { name, backpackVolume } = person;
        const combination = getCombination(items, backpackVolume);

        solution[name] = combination.map((item) => item.name);
    }

    return solution;
};
