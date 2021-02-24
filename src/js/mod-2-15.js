let numberOfFilms = +prompt("Введите число фильмов");

const messages = {
  low: "Просмотрено мало фильмов",
  medium: "Вы класический зритель",
  high: " You are awesome",
};

if (numberOfFilms < 10) {
  console.log(messages.low);
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
  console.log(messages.medium);
} else if (numberOfFilms >= 30) {
  console.log(messages.high);
} else {
  console.log("error ocurred");
}

//console.log(numberOfFilms);
//console.log(typeof numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const questionsToAsk = 2;

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

console.log(personalMovieDB);
