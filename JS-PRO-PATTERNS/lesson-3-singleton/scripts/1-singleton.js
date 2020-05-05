// https://refactoring.guru/design-patterns/singleton
// Singleton is a creational design pattern that lets
// you ensure that a class has only one instance, while
// providing a global access point to this instance.
class Single {
  constructor(name) {
    if (Single.instance === null) {
      this.name = name;
      this.data = [];
      Single.instance = this;
    }
    return Single.instance;
  }
  addToData() {
    this.data.push(1);
  }
}

Single.instance = null;
console.log(new Single());

// const store1 = new Single('test');
// store1.addToData();
// console.log('first instance: ', store1);

// const store2 = new Single('test2');
// store1.addToData();
// console.log('second instance', store2);

// console.log('is same Object?', store1 === store2);
