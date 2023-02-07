const handleError = (err, res) => {
    console.error(err);
    return res.status(500).send({ status: 'error', message: 'An internal error occurred' });
}

module.exports = handleError;
