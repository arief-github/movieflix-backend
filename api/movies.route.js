const express = require('express');
const MoviesController = require('../controller/movies.controller.js');

const router = express.Router();
router.route("/").get(MoviesController.apiGetMovies);

module.exports = router;