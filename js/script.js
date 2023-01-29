"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj1 = {
//     a:50
// };

// obj1.a = 10;
// console.log(obj1);

// var name = 'Serg';

// {
//     let result = 50;
//     console.log(result);
// }

// const obj = {
//     name: 'Alex',
//     age: 31,
//     isСrush: false
// };

// console.log(obj.isСrush);

// let priority = 'high';

// const obj2 = {
//     low: 'color 1',
//     'high': 'color 2',
//     critical: 'color 3'
// };

// console.log(obj2.critical);
// console.log(obj2[priority]); // obj.high

// let arr = [1, 2, 3, 5, 6, 8, 9];
// arr.length = 2;
// console.log(arr);

// const result2 = confirm("Are u eblan?");
// console.log(result2);

// const answer = prompt("What about quantity of cats in your home&", "999");
// console.log(typeof(answer));

// const answer = prompt('how old are you');

// // alert(`you are really ${answer} years old`);

// alert('you are really'+ ' ' + answer);

// const name = "Popkins1";

// console.log(alert(`Hello how your ${name}`));

// const age = 20;

// let baba = 5;

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastMovie = prompt("Один из последних просмотренных фильмов?");
const mark = prompt("На сколько оцените его?");

const lastMovie2 = prompt("Один из последних просмотренных фильмов?");
const mark2 = prompt("На сколько оцените его?");
personalMovieDB.movies[lastMovie] = mark;
personalMovieDB.movies[lastMovie2] = mark2;
console.log(personalMovieDB);
