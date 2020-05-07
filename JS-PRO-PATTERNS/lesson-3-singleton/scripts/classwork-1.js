// // deepFreeze
// let universe = {
//   infinity: Infinity,
//   good: ['cats', 'love', 'rock-n-roll'],
//   evil: {
//     bonuses: [{}, 'cookies', 'great look'],
//   },
// };

// function deepFreeze(object) {
//   let prop = Object.getOwnPropertyNames(object);

//   for (name in prop) {
//     if (typeof prop === 'object' && prop !== null) {
//       console.log(prop[name]);
//       let value = prop[name];

//       // console.log(value);
//       deepFreeze(object[value]);
//     }
//   }

//   return Object.freeze(object);
// }

// deepFreeze(universe);

// frozenUniverse = deepFreeze(universe);
// console.log(frozenUniverse);

// frozenUniverse.evil.humans = ['asdf'];

// console.log(frozenUniverse);

// console.log(typeof []);
