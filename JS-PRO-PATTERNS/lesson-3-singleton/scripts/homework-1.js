/*
  Composition:

  Задание при помощи композиции создать объекты 4х типов:

  functions:
    - MakeBackendMagic
    - MakeFrontendMagic
    - MakeItLooksBeautiful
    - DistributeTasks
    - DrinkSomeTea
    - WatchYoutube
    - Procrastinate

  BackendDeveloper = MakeBackendMagic + DrinkSomeTea + Procrastinate
  FrontendDeveloper = MakeFrontendMagic + DrinkSomeTea + WatchYoutube
  Designer = MakeItLooksBeautiful + WatchYoutube + Procrastinate
  ProjectManager = DistributeTasks + Procrastinate + DrinkSomeTea

  ProjectManager(name,gender,age) => { name, gender, age, type: 'project'}

*/

const MakeBackendMagic = (state) => ({
  makeBackendMagic: () => {
    console.log(
      `${state.name} make backend magic; Age ${state.age}; Gender: ${state.gender};`
    );
  },
});

const DrinkSomeTea = (state) => ({
  drinkSomeTea: () => {
    console.log(`${state.name} drink some tea`);
  },
});

const Procrastinate = (state) => ({
  procrastinate: () => {
    console.log(`${state.name} procrastinate`);
  },
});

const MakeFrontendMagic = (state) => ({
  makeFrontendMagic: () => {
    console.log(
      `${state.name} make front end magic; Age ${state.age}; Gender: ${state.gender};`
    );
  },
});

const WatchYoutube = (state) => ({
  watchYouTube: () => {
    console.log(`${state.name} watch YouTube about ${state.type}`);
  },
});

const BackendDeveloper = (name, gender, age) => {
  let state = {
    name,
    gender,
    age,
    type: 'project',
  };

  return Object.assign(
    {},
    state,
    MakeBackendMagic(state),
    DrinkSomeTea(state),
    Procrastinate(state)
  );
};

const FrontendDeveloper = (name, gender, age) => {
  let state = {
    name,
    gender,
    age,
    type: 'project',
  };

  return Object.assign(
    {},
    state,
    MakeFrontendMagic(state),
    DrinkSomeTea(state),
    WatchYoutube(state)
  );
};

const MakeItLooksBeautiful = function (state) {
  return {
    makeItLooksBeautiful: function () {
      console.log(state.name + ' make it looks beautiful ' + state.type);
    },
  };
};

const DistributeTasks = function (state) {
  return {
    distributeTasks: function () {
      console.log(state.name + ' distribute tasks');
    },
  };
};

const Designer = function (name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.type = 'project';

  return Object.assign(
    this,
    DrinkSomeTea(this),
    MakeItLooksBeautiful(this),
    Procrastinate(this)
  );
};

const ProjectManager = function (name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.type = 'project';

  return Object.assign(
    {},
    this,
    DrinkSomeTea(this),
    Procrastinate(this),
    DistributeTasks(this)
  );
};

const backendDeveloper1 = BackendDeveloper('Alex', 'male', 28);
backendDeveloper1.makeBackendMagic();
backendDeveloper1.drinkSomeTea();
backendDeveloper1.procrastinate();

console.log('==========');

const frontendDeveloper1 = FrontendDeveloper('Kostia', 'male', 28);
frontendDeveloper1.makeFrontendMagic();
frontendDeveloper1.drinkSomeTea();
frontendDeveloper1.watchYouTube();

console.log('==========');

let designer1 = new Designer('Olena', 'famale', 25);
designer1.makeItLooksBeautiful();
designer1.drinkSomeTea();
designer1.procrastinate();

console.log('==========');

let projectManager1 = new ProjectManager('Yana', 'female', 25);
projectManager1.distributeTasks();
projectManager1.drinkSomeTea();
projectManager1.procrastinate();
