let numberOfFilms = prompt("Введите число фильмов");
console.log(numberOfFilms);
console.log(typeof numberOfFilms);

const a = prompt("Введите название последнего просмотренного фильма", "");
const b = prompt("Дайте оценку этому фильму", "");
const c = prompt("Введите название вторго просмотренного фильма", "");
const d = prompt("Дайте оценку этому фильму", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
