const Trip = require('../model/trips.js');
const {validateCityName, handleError} = require('../utils/errorHandling.js');
const formatResponse = require('../utils/formatResponse.js');

const tripController = async (req, res) => {
    try {
        const cityName = req.query.city.trim();
        validateCityName(cityName);
        const city = cityName.toLowerCase();
        const trips = await Trip.find({ cities: { $regex: new RegExp(city, 'i') } });
        return res.send({ trips });
    } catch (err) {
        if (err instanceof BadRequestError) {
            return res.status(400).send({ status: 'fail', message: err.message });
        }
        return handleError(err, res);
    }
};

module.exports = tripController;


  
    
  
   