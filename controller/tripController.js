const Trip = require('../model/trips.js');
const {validateCityName, handleError} = require('../utils/errorHandling.js');
const formatResponse = require('../utils/formatResponse.js'); 

const tripController = async (req, res) => {
    
    let cityName = req.body.name;
    cityName= (cityName || '').toString().trim();
    validateCityName(cityName);
    const city = cityName.toLowerCase();

    try {
    
    let trips = await Trip.find({ cities: { $regex: new RegExp(city, 'i') } }).select('-__v');
   
    if (!trips || trips.length === 0) {
        return res.status(400).send({ status: 'fail', message: 'Trips not found' });
    } else { 
        trips = formatResponse(trips);
        //returning as txt instead of json to comply with 
        return res.send(trips);
    }
} catch (err) {
    if (err) {
        return res.status(400).send({ status: 'fail', message: err.message });
    }
    return handleError(err, res);
}
};

     /*
    const cityName = (req.query.city || '').toString().trim();
    
    try {
        
       
        let trips = await Trip.find({ cities: { $regex: new RegExp(city, 'i') } }).select('-__v');
        if (!trips || trips.length === 0) {
            return res.status(400).send({ status: 'fail', message: 'Trips not found' });
        } else { 
            trips = formatResponse(trips);
            return res.send({ trips });
        }
    } catch (err) {
        if (err) {
            return res.status(400).send({ status: 'fail', message: err.message });
        }
        return handleError(err, res);
    }
};
*/
module.exports = tripController;


  
    
  
   