const Sequelize = require('sequelize');

// Connect to database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

// Test connection
sequelize
  .authenticate()
  .then(() => {
    console.log(`Connected to the ${process.env.DB_NAME} database.`);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Create database if not existing
sequelize
  .sync({ force: false })
  .then(() => {
    console.log(`Database ${process.env.DB_NAME} created/synced successfully.`);
  })
  .catch(err => {
    console.error('An error occurred while creating the database:', err);
  });


module.exports = sequelize;