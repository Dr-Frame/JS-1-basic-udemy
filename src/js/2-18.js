let numberOfFilms;

const messages = {
  low: "Просмотрено мало фильмов",
  medium: "Вы класический зритель",
  high: " You are awesome",
};

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const questionsToAsk = 2;

start();
rememberMyFilms();

privatCheck(personalMovieDB.privat);
writeYourGenres(3);
checkUserAmountFilm();

function start() {
  numberOfFilms = prompt("Введите число фильмов", "");

  while (
    (numberOfFilms === "" && numberOfFilms === null) ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = +prompt("Введите число фильмов", "");
  }
}

function rememberMyFilms() {
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
}

function checkUserAmountFilm() {
  if (numberOfFilms < 10) {
    console.log(messages.low);
  } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    console.log(messages.medium);
  } else if (numberOfFilms >= 30) {
    console.log(messages.high);
  } else {
    console.log("error ocurred");
  }
}

function privatCheck(check) {
  if (!check) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres(num) {
  for (let i = 0; i < num; i += 1) {
    const answer = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    personalMovieDB.genres[i] = answer;
  }
}
