require('dotenv').config();

//server set up
const express = require('express');
const app = express();
const server = require('http').Server(app);
const PORT = process.env.PORT || 3000;


//Middlewares
app.use(express.json());


//Routes


//invalid route handling
app.use((req, res) => res.status(404).send({ status: "fail", message: "PAGE NOT FOUND"}));


server.listen(PORT, console.log(`Server listening on port ${PORT}`));