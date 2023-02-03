const travels = require('../model/travels.js');

const search = (req, res) => {
    const city = req.query.text;
    // in case validation is not catered for in input fields
    if (!city || city.length < 3) {
        return res.status(400).send({ status:'fail', message: 'City name must contain at least 3 characters long' });
    }
    //search for cities containing the substring passed to city
    const offers = travels.filter(travel => travel.cities.some(travel => travel.includes(city)));
    return res.send({ offers });
}

module.exports = search;
  
    
  
   