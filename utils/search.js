const Travels = require('../model/travels.js');

module.exports = async (cityInput) => {
  if (!cityInput || cityInput.length < 3) {
    return 'error';
  }
  try {
    let travels = await Travels.find({});
    const offer = travels.filter(travel => travel.cities.some(city => city.toLowerCase().includes(cityInput)));
    return offer;
  } catch (err) {
    return 'error';
  }
};