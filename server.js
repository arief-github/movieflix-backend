const express = require('express');
const cors = require('cors');
const movies = require('./api/movies.route.js');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// route
app.use("/api/v1/movies", movies);
app.use('*', (req, res) => {
    res.status(404).json({ error: "not found" })
});

module.exports = app;

