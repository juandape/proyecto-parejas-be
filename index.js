const express = require("express");
const cors = require("cors");
const morganBody = require("morgan-body");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
morganBody(app);

const {
  handleGetAllMovies,
  handleGetByIdMovie,
  handleCreateMovie,
  handleEditMovie,
  handleDeleteMovie,
} = require("./controller");

app.get("/api/movies", handleGetAllMovies);

app.get("/api/movies/:id", handleGetByIdMovie);

app.post("/api/movies", handleCreateMovie);

app.patch("/api/movies/:id", handleEditMovie);

app.delete("/api/movies/:id", handleDeleteMovie);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}!`)
);
