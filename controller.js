const {
  getAllMovies,
  getMoviesById,
  createMovie,
  editMovie,
  deleteMovie,
} = require("./model");

function handleGetAllMovies(req, res) {
  const records = getAllMovies();
  res.status(200).json(records);
}

function handleGetByIdMovie(req, res) {
  const { id } = req.params;
  const record = getMoviesById(id);
  if (Object.keys(record).length === 0) {
    return res.status(404).json({ message: "Contact not found" });
  }
  return res.status(200).json(record);
}

function handleCreateMovie(req, res) {
  const movie = req.body;
  const record = createMovie(movie);
  return res.status(201).json(record);
}

function handleEditMovie(req, res) {
  const { id } = req.params;
  const movie = req.body;
  const record = editMovie(id, movie);
  if (Object.keys(record).length === 0) {
    return res.status(404).json({ message: "Movie not found" });
  }
  return res.status(202).json(record);
}

function handleDeleteMovie(req, res) {
  const { id } = req.params;
  deleteMovie(id);
  return res.status(204).json({ message: "Movie Deleted" });
}

module.exports = {
  handleGetAllMovies,
  handleGetByIdMovie,
  handleCreateMovie,
  handleEditMovie,
  handleDeleteMovie,
};
