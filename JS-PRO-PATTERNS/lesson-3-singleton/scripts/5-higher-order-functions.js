// https://www.youtube.com/watch?v=rRgD1yVwIvE
// https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad
// https://stackoverflow.com/questions/51579427/what-is-the-difference-between-callback-high-order-functions-and-callback-queu
// https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983

// ========= 1 =========

// let multiply = (x) => x * x;
// let nine = multiply(3);
// console.log('multiply', nine);

// let zoo = [
//   { id: 0, name: 'Myra Frame', species: 'dog' },
//   { id: 1, name: 'Jerome Gardner', species: 'rabbit' },
//   { id: 2, name: 'Marcel Gould', species: 'cat' },
//   { id: 3, name: 'Daanyaal Santos', species: 'dog' },
//   { id: 4, name: 'Fariha Redman', species: 'cat' },
// ];

// let isDog = (animal) => animal.species === 'dog';
// let isCat = (animal) => animal.species === 'cat';

// let dogs = zoo.filter(isDog);
// let cats = zoo.filter(isCat);

// console.log('Here dogs', dogs);
// console.log('Here cats', cats);

// ========= 2.COMPOSITION =========

// function compose(func_a, func_b) {
//   return function (c) {
//     return func_a(func_b(c));
//   };
// }

// const compose = (func_a, func_b) => (c) => func_a(func_b(c));

// const addTwo = (value) => {
//   console.log('Add', value);
//   return value + 2;
// };

// const multiplyTwo = (value) => {
//   console.log('Multiply', value);
//   return value * 2;
// };

// const addTwoAndMultiplyTwo = compose(multiplyTwo, addTwo);

// console.log(addTwoAndMultiplyTwo(10));

// ========= 2.EVENT PARAMETERS =========

// const doSmth = (status) => (e) => {
//   console.log('status', status, 'e', e);
// };

// function doSmth(status) {
//   if (status) {
//     return function (e) {
//       console.log('status is true', status, 'e', e);
//     };
//   } else {
//     return function (e) {
//       console.log('status is false', status, 'e', e);
//     };
//   }
// }

// const btn = document.getElementById('btn');
// const btn1 = document.getElementById('btn1');

// btn.addEventListener('click', doSmth(false));
// btn1.addEventListener('click', doSmth(true));

// ========= 4 =========

class Item {
  constructor(id) {
    this.id = id;

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(id) {
    return (e) => {
      console.log('this', this, 'id', id, 'event', e);
    };
  }

  // clickHandler = (id) => (e) => {
  //   console.log('this', this, 'id', id, 'event', e);
  // };

  render() {
    const item = document.getElementById('root');
    let node = document.createElement('div');
    node.innerHTML = `
			<div class="item" data-id="${this.id}">
				<h2>${this.id}</h2>
				<button class="_btn">Like</button>
			</div>
    `;

    node
      .querySelector('._btn')
      .addEventListener('click', this.clickHandler(10));

    item.appendChild(node);
  }
}

let firstItem = new Item(1);
console.log(firstItem);

firstItem.render();
