const validateCityName = (cityName) => {
    if (!cityName || cityName.length < 3) {
        throw new BadRequestError('Valid input required, minimum 3 letters');
    }
};

const handleError = (err, res) => {
    console.error(err);
    return res.status(500).send({ status: 'error', message: 'An internal error occurred' });
};

module.exports = {validateCityName, handleError};