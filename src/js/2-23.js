const soldat = {
  health: 100,
  armor: 50,
  talk() {
    console.log("i can talk mufuckers");
  },
};

/* const soldatVasya = {
  health: 100,
}; */

//================ старый метод

/* soldatVasya.__proto__ = soldat;

console.log(soldatVasya.armor);
soldatVasya.talk(); */

//================= новее

const vasya = Object.create(soldat);

vasya.talk();
