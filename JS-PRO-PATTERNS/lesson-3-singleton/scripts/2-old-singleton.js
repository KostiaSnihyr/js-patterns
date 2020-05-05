const OldSingleton = (function () {
  var _data = [];

  function add(item) {
    _data.push(item);
  }

  function showData() {
    // spread operator allows us to break connection with _data and create a new copy
    return [..._data];
  }

  function get(id) {
    return _data.find((d) => {
      return d.id === id;
    });
  }

  return {
    add: add,
    get: get,
    showData: showData,
  };
})();

console.log(OldSingleton);

OldSingleton.add({ id: 0, language: 'js' });
OldSingleton.add({ id: 1, language: 'python' });
OldSingleton.add({ id: 2, language: 'php' });

console.log(OldSingleton.showData());

let myLang = OldSingleton.get(0);
let myLang2 = OldSingleton.get(2);

console.log(myLang);
console.log(myLang2);

console.log(OldSingleton);
