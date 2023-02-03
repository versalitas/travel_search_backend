
const express = require('express');

// Create router
const router = express.Router();

const search = require('../controller/search.js')
router.post( '/search', search);


module.exports = router;