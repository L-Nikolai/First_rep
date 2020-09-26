/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){

    for (let i = 0; i < 2; i++) {
        const firstQuestion = prompt('Один из просмотренных фильмов?', ''),
            secoonQuestion = prompt('На сколько оцените его?', '');
    
    
    
    
        if (firstQuestion != null && secoonQuestion != null &&
            firstQuestion != "" && secoonQuestion != "" &&
            firstQuestion.length < 50) {
    
            personalMovieDB.movies[firstQuestion] = secoonQuestion;
            console.log("well done")
        } else {
            console.log("Введите не менее 50 символов и заполните строки");
            i--;
        }
    }
    
}

rememberMyFilms();

function detectPersonalLevel(){

    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман!");
    } else {
        console.log("Произошла ошибка");
    }
    
} 

detectPersonalLevel();



console.log(personalMovieDB);