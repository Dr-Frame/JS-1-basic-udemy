const arr = ["fd", "dfd", "fgf", "hfdh", "fggf"];

arr.forEach((item, i, arr) => {
  console.log(`${i}: ${item} inside array ${arr}`);
});

const arrnum = [1, 4, 10, 25, 23, 8, 15];

function compareNum(a, b) {
  return a - b;
}

arrnum.sort(compareNum);
console.log(arrnum);
