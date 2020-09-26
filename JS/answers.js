const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstQuestion = prompt('Один из просмотренных фильмов?', ''),
    secoonQuestion = prompt('На сколько оцените его?', ''),
    thrdQuestion = prompt('Один из просмотренных фильмов?', ''),
    fourthQuestion = prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstQuestion] = secoonQuestion;
personalMovieDB.movies[thrdQuestion] = fourthQuestion;

console.log(personalMovieDB);