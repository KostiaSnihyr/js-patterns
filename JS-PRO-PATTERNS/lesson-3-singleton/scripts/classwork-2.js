class Government {
  constructor() {
    if (Government.instance === null) {
      this.laws = [
        {
          id: 0,
          name: '123123',
          description: 'some desc',
        },
      ];
      this.budget = 1000000;
      this.citizensSatisfactions = 0;
      Government.instance = this;
    }
    return Government.instance;
  }

  addLaw({ id, name, description }) {
    this.laws.push({ id, name, description });
  }

  readConstitution() {
    console.log('this.laws', this.laws.length);
    for (let i = 0; i < this.laws.length; i++) {
      document.body.innerHTML += `
				<p>id: ${this.laws[i].id}, name: ${this.laws[i].name}, description: ${this.laws[i].description}</p>

			`;
    }
  }

  makeParty() {
    this.budget -= 50000;
    this.citizensSatisfactions += 5;
  }
}

Government.instance = null;

let government1 = new Government();

government1.addLaw({ id: 1, name: 2, description: 4 });
government1.readConstitution();
government1.makeParty();
government1.makeParty();
government1.makeParty();
government1.makeParty();

console.log(government1);

// const _data = {
//   laws: [
//     {
//       id: 0,
//       name: '123123',
//       description: 'some desc',
//     },
//   ],
//   budget: 1000000,
//   citizensSatisfactions: 0,
// };

// const Government = {
//   addLaw: ({ id, name, description }) => {
//     _data.laws.push({ id, name, description });
//   },
// };

// Government.addLaw({ id: 2, name: 'Viktor', description: 'law about rights' });

// console.log(_data);
