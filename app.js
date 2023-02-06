require('dotenv').config();

// server set up essentials
const express = require('express');
const app = express();
//const server = require('http').Server(app);
const PORT = process.env.PORT || 3000;

const connectDB = require('./utils/connectDB.js');
connectDB();


//requiering route
const travels = require('./route/travels.js');

// Middlewares
app.use(express.json());

// Routes
app.use('/travels', travels);

// Error handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: {message: error.message} })
}); 


app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`)});