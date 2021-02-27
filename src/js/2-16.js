function showMesssage(text) {
  console.log(text);
}

showMesssage("hello mufucj");

/* function calc(a, b) {
  return a + b;
}

console.log(calc(5, 7));
console.log(calc(8, 12));
console.log(calc(4, 8)); */

const logger = function () {
  console.log("hello");
};

logger();

//const calc = (a, b) => a + b;

// не имеет контекста
const calc = (a, b) => {
  return a + b;
};
