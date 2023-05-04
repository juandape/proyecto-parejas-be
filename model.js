const table = require("@makeitrealcamp/db-mock");
const r1 = table.insert({
  name: "Jaws",
  year: "1975",
  genre: "Horror",
  rating: "8",
});
const r2 = table.insert({
  name: "Jurassic Park",
  year: "1993",
  genre: "Science Fiction",
  rating: "7",
});
const r3 = table.insert({
  name: "Avatar",
  year: "2009",
  genre: "Adventure",
  rating: "8",
});
const r4 = table.insert({
  name: "Inception",
  year: "2010",
  genre: "Thriller",
  rating: "9",
});

function getAllMovies() {
  const records = table.findAll();
  return records;
}

function getMoviesById(id) {
  const record = table.findById(id);
  return record;
}

function createMovie(Movie) {
  const record = table.insert(Movie);
  return record;
}

function editMovie(id, Movie) {
  const MovieEdit = {
    id,
    ...Movie,
  };
  const record = table.update(MovieEdit);
  return record;
}

function deleteMovie(id) {
  const record = table.remove(id);
  return record;
}

module.exports = {
  getAllMovies,
  getMoviesById,
  createMovie,
  editMovie,
  deleteMovie,
};
