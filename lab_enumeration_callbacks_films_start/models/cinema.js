const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function() {
  return this.films.map(film => film.title); 
};

Cinema.prototype.findFilmByTitle = function(filmTitle) {
  return this.films.find(film => film.title === filmTitle);
};

Cinema.prototype.filterFilmsByGenre = function(genre) {
  return this.films.filter(film => film.genre === genre);
};

Cinema.prototype.checkSomeFilmsByYear = function(year) {
  return this.films.some(film => film.year === year);
};

Cinema.prototype.checkFilmLength = function(length) {
  return this.films.every(film => film.length === length);
};

Cinema.prototype.getTotalRunningTimes = function() {
  return this.films.reduce((total, film) => total += film.length, 0);
}

Cinema.prototype.filterFilmsByYear = function(year) {
  return this.films.filter(film => film.year === year);
}

Cinema.prototype.filterFilmsByProperty = function(property, value) {
  // property = year, genre, length
  // value = 2019, drama, 110
  return this.films.filter(film => film[property] === value);
}

module.exports = Cinema;
