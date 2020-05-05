const _data = {
  store: [],
  counter: 0,
};

const Store = {
  add: (item) => _data.store.push(item),
  get: (id) => _data.store.find((d) => d.id === id),
  showAllLang: () => [..._data.store],
  getCounter: () => _data.counter,
  addCounter: (num) => (_data.counter += num),
};

Store.add({ id: 0, language: 'js' });
Store.add({ id: 1, language: 'python' });
Store.add({ id: 2, language: 'php' });
Store.add({ id: 3, language: 'ruby' });

console.log('Store', Store);

let myLang = Store.get(2);

console.log('Store -> myLang', myLang);

Store.addCounter(20);
Store.addCounter(20);
Store.addCounter(20);
Store.addCounter(20);

console.log(Store.getCounter());
