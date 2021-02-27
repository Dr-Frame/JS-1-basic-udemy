const options = {
  name: "test",
  width: 1025,
  height: 800,
  colors: {
    border: "black",
    bg: "red,",
  },
};

/* for (const key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Ключ: ${i} , значение ${options[key][i]}`);
    }
  } else {
    console.log(`Ключ: ${key} , значение ${options[key]}`);
  }
} */

const { border, bg } = options.colors;
console.log(options);
