require('dotenv').config();
const initDB = require('./utils/connectDB.js')


// server set up
const express = require('express');
const app = express();
const server = require('http').Server(app);
const PORT = process.env.PORT || 3000;

// connecting to database
initDB();

// Middlewares
app.use(express.json());

// Routes


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


server.listen(PORT, console.log(`Server listening on port ${PORT}`));