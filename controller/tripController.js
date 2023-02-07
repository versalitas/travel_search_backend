const Trip = require('../model/trips.js')
const handleError  = require('../utils/errorHandlers.js')
const formatResponse = require('../utils/formatters.js');
const validateCityName = require('../utils/validators.js');

const tripController = async (req, res) => {
    let cityName = req.body.name;

    try {
        //validate cityName
        cityName = (cityName || '').toString().trim()
        const city = validateCityName(cityName);

        //find trips with case insensitive search
        let trips = await Trip.find({
            cities: { $regex: new RegExp(city, 'i') },
        }).select('-__v')

        //if no trips return error
        if (!trips || trips.length === 0) {
            return res
                .status(400)
                .send({ status: 'fail', message: 'Trips not found' })
        }

        //return trips formatted according to requirements
        const formattedTrips = formatResponse(trips)
        return res.send(formattedTrips)
    } catch (err) {
        if (err) {
            return res
                .status(400)
                .send({ status: 'fail', message: err.message })
        }
        return handleError(err, res)
    }
}

module.exports = tripController
