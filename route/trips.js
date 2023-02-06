const express = require('express');
const router = express.Router();

const tripsController = require('../controller/tripController.js')
router.get( '/', tripsController);


module.exports = router;