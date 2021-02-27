/* function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const blabla = copy(obj);
blabla.bla = "fdsfsd";

console.log(obj);
console.log(blabla); */

const obj = {
  name: "Bob",
  age: 25,
  stats: {
    power: 50,
    speed: 100,
  },
};

const add = {
  sex: "man",
  hand: 2,
};

const newArr = Object.assign(obj, add);
console.log(newArr);

const bla = Object.assign({}, obj);
bla.name = "loh";

console.log(obj);
console.log(bla);

// ======================== копия массива

const arr = ["fds", "fds", "fsf"];

const newarr = arr.slice();

newarr[0] = "lohhaaa";
console.log(arr);
console.log(newarr);

/// норм методи

const x = [1, 20, 50, 100];
const newX = [...x];

x[0] = 50;
newX[0] = 100;
console.log(x);
console.log(newX);

const z = {
  a: 20,
  b: 30,
};

const newZ = { ...z };

z.a = "bla";
newZ.a = "loh";
console.log(z);
console.log(newZ);
