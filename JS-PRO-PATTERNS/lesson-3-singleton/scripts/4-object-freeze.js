'use strict';
const myObj = {
  name: 'Dexter',
  prop: () => {
    console.log(`${this.name} woohoo`);
  },
};

// === 1 ===
// console.log(myObj);
// myObj.name = 'Debra';
// console.log(myObj);

// === 2 ===
// let frozen = Object.freeze(myObj);
// myObj.name = 'name';
// frozen.name = 'Vince';
// console.log(myObj);

// === 3 ===
// let frozenArray = Object.freeze(['frozen', 'inside', 'of', 'array']);
// frozenArray[0] = 'Nooooo!';
// console.log(frozenArray);

// === 4 ===
// let sliceOfColdAndSadArray = frozenArray.slice(0, 1);
// sliceOfColdAndSadArray.map((item) => console.log(item));
// console.log(sliceOfColdAndSadArray);

// === 5 ===
// console.log(
//   'is myObj frozen?',
//   Object.isFrozen(myObj),
//   '\nis frozen frozen?',
//   Object.isFrozen(frozen),
//   '\nis array frozen?',
//   Object.isFrozen(frozenArray)
// );

// === 6 ===
// let universe = {
//   infinity: Infinity,
//   good: ['cats', 'love', 'rock-n-roll'],
//   evil: {
//     bonuses: ['cookies', 'great look'],
//   },
// };
// let frozenUniverse = Object.freeze(universe);
// frozenUniverse.humans = [];
// frozenUniverse.evil.humans = [];
// console.log(frozenUniverse);
