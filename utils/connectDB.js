const mongoose = require('mongoose');

module.exports = async () => {
    
    try {
        mongoose.set('strictQuery', false);

        let mongoDB = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }

        mongoose.connection.on('connected', () => {
            console.log(`Connected to ${process.env.DB_NAME} DB`);
        })
        mongoose.connection.on('error', (err) => {
            console.error(`Failed to connect to the database: ${err}`);
        })

        await mongoose.connect(mongoDB, options);
    
    } catch (err) {
        console.log(err.message);
    }
}
