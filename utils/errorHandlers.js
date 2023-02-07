const validateCityName = (cityName) => {
    if (!cityName || cityName.length < 3) {
        throw new Error('Bad request: Minimum 3 charachters requiered');
    }
    return cityName;
};

const handleError = (err, res) => {
    console.error(err)
    return res.status(500).send({ status: 'error', message: 'An internal error occurred' })
}

module.exports = { validateCityName, handleError }
