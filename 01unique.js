// function isUnique(string) {
//   // =================================================

//   //   for (let i = 0; i < string.length; i++) {
//   //     const cheked = string[i];
//   //     if (string.lastIndexOf(cheked) !== i) {
//   //       return false;
//   //     }
//   //   }
//   //   return true;

//   //   ================================================

//   //   const set = new Set();
//   //   for (let i = 0; i < string.length; i++) {
//   //     const cheked = string[i];

//   //     if (set.has(cheked)) {
//   //       return false;
//   //     }
//   //     set.add(cheked);
//   //   }

//   //   return true;

//   // ====================================================

//   return new Set(string).size === string.length;
// }

// console.log(isUnique("abcdef"));
// console.log(isUnique("1234567"));
// console.log(isUnique("abcABC"));
// console.log(isUnique("adcadef"));

// // ======================================================

// for (let i = 2; i < 10; i++) {
//   if (i % 2 !== 0) continue;

//   console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }
