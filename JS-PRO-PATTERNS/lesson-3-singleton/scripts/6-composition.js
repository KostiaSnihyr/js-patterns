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
    fly: () => {
      console.log(state, this);
      console.log(state.name + ' flying into sky! Weather is' + state.weather);
    },
  };
};

const Fly = (state) => ({
  fly: () => {
    console.log(state, this);
    console.log(state.name + ' flying into sky! Weather is ' + state.weather);
  },
});

const LoggerIn = (obj) => ({
  logger: () => {
    console.log(obj);
  },
});

Refill({ name: 'Volkswagen' }).refill();

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

const myDrone = EcoRefillDrone('JS-Magic', 100);
console.log('myDrone:', myDrone);
