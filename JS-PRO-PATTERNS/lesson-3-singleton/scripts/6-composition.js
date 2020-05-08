/*
	Composition vs Inheritance

	Наследование, определяет объект по тому чем он является;
	Композиция, определяет объект по тому, что он делает;
*/

const Drive = (state) => ({
  drive: () => console.log("Wroooom!, it's a car" + state.name),
});

const ChangeName = (state) => ({
  changeName: (name) => {
    console.log(`Old name: `, state.name, state);
    state.name = name;
    console.log(`New name: `, state.name, state);
  },
});

const Refill = (state) => {
  return { refill: () => console.log(state.name + ' was refilled') };
};

const Move = function (state) {
  return {
    move: function (speed) {
      console.log('this', this);
      state.speed += speed;
      console.log(state.name + ' is moving. Speed -> ' + state.speed);
    },
  };
};

const Fly = (state) => ({
  fly: () => {
    console.log(state, this);
    console.log(
      state.name + ' flying into sky!!!! Weather is ' + state.weather
    );
  },
});

const LoggerIn = (obj) => ({
  logger: () => {
    console.log(obj);
  },
});

// Refill({ name: 'Volkswagen' }).refill();

const Plane = (name) => {
  const state = {
    name,
    speed: 0,
    weather: 'rainy',
  };
  return Object.assign({}, state, Fly(state), Refill(state));
};

// const Boing = Plane('Boing');
// console.log(Boing);
// Boing.refill();
// Boing.fly();

const EcoRefillDrone = (name, speed) => {
  let state = {
    name,
    speed: Number(speed),
    weather: 'rainy',
  };

  return Object.assign(
    {},
    state,
    Drive(state),
    Refill(state),
    ChangeName(state),
    Fly(state),
    Move(state),
    LoggerIn(state)
  );
};

// const myDrone = EcoRefillDrone('JS-Magic', 100);
// console.log('myDrone:', myDrone);
// myDrone.drive();
// myDrone.refill();
// myDrone.fly();
// myDrone.move(100);
// myDrone.move(100);
// myDrone.move('100');

const myDrone2 = EcoRefillDrone('JS-is-amazing', 100);
// myDrone2.move(100);
// myDrone2.move(100);
// myDrone2.move(100);
// console.log(myDrone2);

function SomeRobot(name) {
  this.name = name;
  this.speed = 0;
  console.log(this);

  return Object.assign(this, Move(this), LoggerIn(this));
}

let x = new SomeRobot('text');
console.log(x);
x.move(50);
x.move(50);
x.move(50);
console.log(x);
x.logger();
