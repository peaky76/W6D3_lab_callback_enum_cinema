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

module.exports = Cinema;
