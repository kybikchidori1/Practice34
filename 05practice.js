// const array = [2, 2, 2, 3, 45, 66, 5];

// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }

// let sum = array.reduce((acc, next) => acc + next, 0);

// console.log(eval(array.join("+")));

// let max = array[0];

// for (let i = 0; i < array.length; i++) {
//   max = array[i] > max ? array[i] : max;
// }

// console.log(max);

// array.sort()

// array.sort((a, b) => {
//   return a - b;
// });

// console.log(array);

// const users = [
//   {
//     name: "John Perd",
//     age: 20,
//   },
//   {
//     name: "Alexn Moren",
//     age: 44,
//   },
//   {
//     name: "Slexn Moren",
//     age: 33,
//   },
// ];

// users.sort((a, b) => {
//   return a.name.localeCompare(b.name);
// });

// console.log(users);

// const array = [2, 2, 2, 3, 45, 66, 5];

// const reversed = [];

// for (let i = array.length - 1; i >= 0; i--) {
//   reversed.push(array[i]);
// }

// console.log(reversed)

const array = [7, "correct", 0, false, 9, NaN, ""];

let notFalsy = array.filter(Boolean);

console.log(notFalsy);
