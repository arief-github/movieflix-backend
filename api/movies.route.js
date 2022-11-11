const express = require('express');
const MoviesController = require('../controller/movies.controller.js');
const ReviewsController = require('../controller/reviews.controller.js');

const router = express.Router();
router.route("/").get(MoviesController.apiGetMovies);
router.route('/review')
.post(ReviewsController.apiPostReview)
.put(ReviewsController.apiUpdateReview)
.delete(ReviewsController.apiDeleteReview)

module.exports = router;