
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt("How many films did you watch?", "amount of films");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films did you watch?", "amount of films");
        }
    },
    rememberMyFilms: function () {
        let i = 0;
        while (i < personalMovieDB.count) {
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
        }
    },
    detectPersonalLevel: function () {
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
    },
    showMyDB: function () {
        if (personalMovieDB.private == false) {
            console.log(personalMovieDB)
        }
        else {
            console.log("Private is not false")
        }
    },
    writeYourGenres: function () {
        let k = 0;
        while (k <= 2) {
            k++;
            personalMovieDB.genres[k - 1] = prompt(`What genre do you like? its answer number ${k}`, "");

            if (personalMovieDB.genres == '' || personalMovieDB.genres == null) {
                k--;
            }
        }
    
        // for (const [key, value] of personalMovieDB.genres){
        //     console.log(`${key}: ${value}`);
        // }

    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private == false) {
            personalMovieDB.private = true
        }
        else if (personalMovieDB.private == true) {
            personalMovieDB.private = false
        }
    }
}

personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
