const express = require('express');
const app = express.Router();

const search = require('../controller/search.js')
router.get( '/', search);


module.exports = router;