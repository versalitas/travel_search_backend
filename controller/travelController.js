const Travels = require('../model/travels.js');


const travelController = async (req, res) => {
   
   
    const cityInput = Buffer.from(req.query.city.trim(), 'utf8').toString().toLowerCase();
    
    // in case validation is not catered for in input fields
    if (!cityInput || cityInput.length < 3) {
        return res.status(400).send({ status:'fail', message: 'Valid input requiered, minimum 3 letters' });
    }
    
    let result;

    try {
         let travels = await Travels.find({});
         const offer = travels.filter(travel => travel.cities.some(city => city.toLowerCase.includes(cityInput)));
         
    } catch (err) {
        result =  {status:'error', message: err.message};
    }
    result = {status: 'success', offer}
    
   
    return res.send({offer});
    
}



    


/*const travels = data.travels;

const travelController = (req, res) => {
    const cityInput = Buffer.from(req.params.city.trim(), 'utf8').toString().toLowerCase();
    // in case validation is not catered for in input fields
    if (!cityInput || cityInput.length < 3) {
        return res.status(400).send({ status:'fail', message: 'Valid input requiered, minimum 3 letters' });
    }
    //search for cities matching 
    const offers = travels.filter(travel => travel.cities.some(city => city.toLowerCase.includes(cityInput)));
    
    return res.send({ offers });
}
*/
module.exports = travelController;



  
    
  
   