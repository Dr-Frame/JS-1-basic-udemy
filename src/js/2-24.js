const messages = {
  low: "Просмотрено мало фильмов",
  medium: "Вы класический зритель",
  high: " You are awesome",
};

const personalMovieDB = {
  count: "",
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  toggleVisibleMyDB() {
    if (this.privat) {
      this.privat = false;
      console.log(this.privat);
    } else {
      this.privat = true;
      console.log(this.privat);
    }
  },

  start() {
    this.count = prompt("Введите число фильмов", "");

    while ((this.count === "" && this.count === null) || isNaN(this.count)) {
      this.count = +prompt("Введите число фильмов", "");
    }
  },

  rememberMyFilms() {
    for (let i = 0; i < questionsToAsk; i += 1) {
      const a = prompt("Введите название последнего просмотренного фильма", "");
      const b = +prompt("Дайте оценку этому фильму", "");

      if (a !== null && b !== null && a !== "" && b !== "" && a.length <= 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i -= 1;
      }
    }
  },

  checkUserAmountFilm() {
    if (this.count < 10) {
      console.log(messages.low);
    } else if (this.count >= 10 && this.count < 30) {
      console.log(messages.medium);
    } else if (this.count >= 30) {
      console.log(messages.high);
    } else {
      console.log("error ocurred");
    }
  },

  privatCheck(check) {
    if (!check) {
      console.log(personalMovieDB);
    }
  },

  writeYourGenres(num) {
    for (let i = 1; i < num + 1; i += 1) {
      let answer = prompt(`Ваш любимый жанр под номером ${i}`);
      if (answer === "" || answer === null) {
        answer = prompt(`Ваш любимый жанр под номером ${i}`);
        i -= 1;
      } else {
        personalMovieDB.genres[i - 1] = answer;
      }
    }
    this.genres.forEach((item) => {
      console.log(
        `Любимый жанр ${this.genres.indexOf(item) + 1} - это ${item}`
      );
    });
  },
};

const questionsToAsk = 2;

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.privatCheck(personalMovieDB.privat);
personalMovieDB.writeYourGenres(3);
personalMovieDB.checkUserAmountFilm();
