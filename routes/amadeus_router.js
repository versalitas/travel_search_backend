const amadeus = require('amadeus');
const express = require('express');

// Create router
const router = express.Router();

const amadeus = new Amadeus({
    clientId: API_KEY,
    clientSecret: API_SECRET,
  });

module.exports = {router, amadeus}