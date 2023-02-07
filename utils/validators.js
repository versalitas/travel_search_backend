const validateCityName = (cityName) => {
    if (!cityName || cityName.length < 3) {
        throw new Error('Bad request: Minimum 3 charachters requiered');
    }
    return cityName;
};