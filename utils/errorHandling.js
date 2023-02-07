const validateCityName = (cityName) => {
    if (!cityName || cityName.length < 3) {
        return res.status(400).send({ status: 'error', message: 'Bad request: Minimum 3 charachters requiered' });
    }
};

const handleError = (err, res) => {
    console.error(err);
    return res.status(500).send({ status: 'error', message: 'An internal error occurred' });
};

module.exports = {validateCityName, handleError};