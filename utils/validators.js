const validateCityName = (cityName) => {
    //trims whitespace
    cityName = (cityName || '').toString().trim();

    //check length
    if (!cityName || cityName.length < 3) {
        throw new Error('Bad request: Minimum 3 characters requiered');
    }

    //regular expression to match valid characters and sanitize 
    const regex = /^[\D\s\u0600-\u06FF\u3000-\u303F\u4E00-\u9FFF]+$/;
    if (!regex.test(cityName)) {
        throw new Error('Bad request: Invalid characters in city name');

    }
    return cityName;
}

module.exports = validateCityName;