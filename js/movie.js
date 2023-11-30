let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films did you watch?", "amount of films");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films did you watch?", "amount of films");
    }
}
start();

let i = 0;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

function showMyDB(privateStatus) {
    if (privateStatus == false) {
        console.log(personalMovieDB)
    }
    else {
        console.log("Private is not false")
    }
}

showMyDB(personalMovieDB.private);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`What genre do you like? its answer number ${i}`, "");
        console.log(personalMovieDB);
    }
}
writeYourGenres();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Watched not much films");
    }
    else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        alert("You are usual film watcher");
    }
    else if (numberOfFilms >= 30) {
        alert("You are really like films");
    }
    else {
        alert("There is a error")
    }
}

detectPersonalLevel();


function rememberMyFilms() {
    while (i < numberOfFilms) {
        i++;
        const lastWatchedFilm = prompt(`What is your last watched film? (it is about ${i} film)`, "");
        const whatIsYourRate = +prompt(`What is your rate for ${i} film?`, "")
        //check field input
        if (whatIsYourRate === 0) {
            i--;
            console.log("whatIsYourRate error");
        }
        else if (lastWatchedFilm == null || lastWatchedFilm.length == 0 || lastWatchedFilm.length > 50) {
            i--;
            console.log("lastWatchedFilm.length")
        }
        personalMovieDB.movies[lastWatchedFilm] = whatIsYourRate;
        console.log(personalMovieDB.movies);
    }
}

rememberMyFilms();


/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки, отменить ответ или
 ввести название фильма длинее, чем 50 символов. Если это происходит возвращаем пользователя к вопросам опять.
  (К любой строке можно обратиться как str. length - и получить её длину)


3) При помощи условий проверить personalMovieDB. count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/