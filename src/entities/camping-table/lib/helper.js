//
// export const items = [
//     { name: 'Палатка', volume: 15 },
//     { name: 'Спальный мешок', volume: 10 },
//     { name: 'Спальный коврик', volume: 5 },
//     { name: 'Набор для приготовления пищи', volume: 8 },
//     { name: 'Газовый баллон', volume: 3 },
//     { name: 'Средство от насекомых', volume: 2 },
//     { name: 'Компас', volume: 1 },
//     { name: 'Фонарь', volume: 2 },
//     { name: 'Аптечка', volume: 5 },
//     { name: 'Вода', volume: 4 }
// ];
//
//
// // const itemsHike = useSelector((state) => state.items);
// const getCombination = (items, backpackVolume, usedItems) => {
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
//         if (!usedItems.includes(items[index])) { // Исправлено: сравнение элементов
//             usedItems.push(items[index]);
//             backtrack(index + 1, volume + items[index].volume, [...combination, items[index]]);
//             usedItems.pop();
//         }
//
//         backtrack(index + 1, volume, combination);
//     };
//
//     backtrack(0, 0, []);
//
//     return bestCombination;
// };
//
// export const solveBackpackProblem = (people, items) => {
//     const solution = {};
//
//     const availableItems = [...items];
//
//     for (const person of people) {
//         const { name, backpackVolume } = person;
//         const usedItems = [];
//         const combination = getCombination(availableItems, backpackVolume, usedItems);
//
//         solution[name] = combination.map((item) => item.name);
//
//         // Удалите выбранные предметы из доступных предметов
//         for (const usedItem of usedItems) {
//             const index = availableItems.findIndex((item) => item.name === usedItem.name); // Исправлено: сравнение элементов
//             if (index !== -1) {
//                 availableItems.splice(index, 1);
//             }
//         }
//     }
//
//     return solution;
// };





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