const express = require('express');
const cors = require('cors');

const app = express();

// app is the heart of our backend

app.use(cors())
app.use(express.json())


// object destructuring
const { getMovies, addMovie, deleteMovie, updateMovie } = require('./controller.js')
// Does the same thing as:
// const getMovies = require('./controller.js').getMovies

app.get('/api/movies', getMovies)

// let's make another endpoint
// if you use different http methods, these are different endpoints
app.post('/api/movies', addMovie)

app.delete('/api/movies/:id', deleteMovie)

app.put('/api/movies/:id', updateMovie)

app.listen(4004, () => {
    console.log('up on 4004')
})