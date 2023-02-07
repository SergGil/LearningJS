"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 1; i <= 2; i++) {
    const lala = prompt("Один из последних просмотренных фильмов?");
    const baba = prompt("На сколько оцените его?");
    if (
      lala.length != null &&
      baba != null &&
      lala != "" &&
      baba != "" &&
      lala.length < 50
    ) {
      personalMovieDB.movies[lala] = baba;
      console.log("Done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms();

function detectMyLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Вы отличник");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count > 30) {
    console.log("Вы сериальщик");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы помешанный");
  } else {
    console.log("Произошла ошибка");
  }
}

detectMyLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(
      `Ваш любимый номер жанру под номером ${i + 1}`
    );
  }
}
writeYourGenres();
