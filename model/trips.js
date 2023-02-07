const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const landTripSchema = new Schema({
    name: { type: String },
    category: { type: Number },
})

const airTripSchema = new Schema({
    departureCity: { type: String },
    departureTime: { type: String },
})

const tripSchema = new Schema({
    name: { type: String },
    type: { type: String },
    duration: { type: Number },
    cities: [{ type: String }],
    details: {
        land: [landTripSchema],
        air: [airTripSchema],
    },
})

tripSchema.pre('save', (next) => {
    const trip = this;

    if (trip.type === 'Land Trip') {
        trip.details = { land: trip.details }
    } else if (trip.type === 'Air Trip') {
        trip.details = { air: trip.details }
    }

    next();
})

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
