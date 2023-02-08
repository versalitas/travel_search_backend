require('dotenv').config();

// server set up essentials
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const http = require('http');

/* Cors middleware in case front and backend are on separate servers
const cors = require('cors');
const corsOptions = {}; */

const connectDB = require('./utils/connectDB.js');
const addTrips = require('./utils/addTrips.js');

//connect to DB and add Mock data
connectDB();
addTrips();

//requiering route
const trips = require('./route/trips.js');

// Middlewares 
// app.use(express.json());
// app.use(cors(corsOptions));

// Routes
app.use('/trips', trips);

// Error handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status( error.status || 500 );
    res.json({ error: { message: error.message } });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
