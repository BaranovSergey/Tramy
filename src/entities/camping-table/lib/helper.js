export const items = [
    { name: 'Палатка', volume: 15 },
    { name: 'Спальный мешок', volume: 10 },
    { name: 'Sleeping Pad', volume: 5 },
    { name: 'Cooking Set', volume: 8 },
    { name: 'Газовый баллон', volume: 3 },
    { name: 'Insect Repellent', volume: 2 },
    { name: 'Компас', volume: 1 },
    { name: 'Фонарь', volume: 2 },
    { name: 'Аптечка', volume: 5 },
    { name: 'Вода', volume: 4 }
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

//
// export const solveBackpackProblem = (people, items) => {
//     const solution = {};
//
//     for (const person of people) {
//         const { name, weight } = person;
//         const combination = getCombination(items, weight);
//
//         solution[name] = combination.map((item) => item.name);
//     }
//
//     return solution;
// };
//
// const getCombination = (items, backpackVolume) => {
//     const n = items.length;
//     let maxVolume = 0;
//     let bestCombination = [];
//
//     const backtrack = (index, volume, combination) => {
//         if (volume > maxVolume && volume <= backpackVolume) {
//             maxVolume = volume;
//             bestCombination = combination.slice();
//         }
//
//         if (index === n) {
//             return;
//         }
//
//         backtrack(index + 1, volume + items[index].volume, [...combination, items[index]]);
//         backtrack(index + 1, volume, combination);
//     };
//
//     backtrack(0, 0, []);
//
//     return bestCombination;
// };