const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName("circle");
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector(".heart");
const wrapper = document.querySelector(".wrapper");

console.dir(box);
/* 
box.style.backgroundColor = "blue";
box.style.width = "500px"; */

box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%";

//circles.style.backgroundColor = "red";

/* for (let i = 0; i < hearts.length; i += 1) {
  hearts[i].style.backgroundColor = "blue";
} */

hearts.forEach((item) => (item.style.backgroundColor = "blue"));

const div = document.createElement("div");
//const text = document.createTextNode("hellooo");

div.classList.add("black");

//wrapper.append(div);

//wrapper.prepend(div);

/* hearts[0].before(div) */

/* hearts[0].after(div); */

/* circles[0].remove(); */
hearts[0].replaceWith(circles[0]);
