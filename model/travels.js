const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
  name: String,
  type: {type: String, 
          enum: ['Land Trip', 'Air Trip'],
        required: true},
  duration: Number,
  cities: [String],
  details: [
    {
      name: String,
      category: Number,
      departureCity: String,
      departureTime: String
    } 
  ] 
});

const Travels = mongoose.model('Travels', travelSchema)

module.exports = Travels;

// hardcoded 

/*

const travels = 
[ 
    { name: 'Europe Popular Capitals', 
    type: 'Land Trip', 
    duration: 3, 
    cities: ['Madrid', 'Paris', 'London'],
    details: [
      { name: 'Hotel Best Madrid', category: 3 },
      { name: 'Hotel Worst Paris', category: 4 }
    ]
  },
  {
    name: 'Europe Laying Out Cities',
    type: 'Land Trip',
    duration: 3,
    cities: ['Berlin', 'Madrid'],
    details: [
      { name: 'Hotel Best Madrid', category: 3 },
      { name: 'Hotel Worst Berlin', category: 4 }
    ]
  },
  {
    name: 'Infinite Egypt',
    type: 'Air Trip',
    duration: 4,
    cities: ['Madrid', 'القاهرة', 'الأقصر'],
    details: [
      { departureCity: 'Madrid', departureTime: '09:00' },
      { departureCity: 'الأقصر', departureTime: '10:00' }
    ]
  },
  {
    name: 'Incredible China',
    type: 'Air Trip',
    duration: 10,
    cities: ['Barcelona', 'Madrid', '广州市', '北京市'],
    details: [
      { departureCity: 'Madrid', departureTime: '09:00' },
      { departureCity: '北京市', departureTime: '10:00' }
    ]
  },
  { name: 'European Gems', 
    type: 'Land Trip', 
    duration: 3, 
    cities: ['Udine', 'Bergamo', 'Split'],
    details: [
      { name: 'Hotel Best Udine', category: 5 },
      { name: 'Hotel Worst Split', category: 4 },
      { name: 'Hotel So-so Bergamo', category: 4 }
    ]
  },
  { name: 'Catalonia Essentials', 
    type: 'Land Trip', 
    duration: 3, 
    cities: ['Girona', 'Tarragona', 'Berga'],
    details: [
      { name: 'Hotel Best Girona', category: 5 },
      { name: 'Hotel Worst Tarragona', category: 4 },
      { name: 'Hotel So-so Berga', category: 4 }
    ]
  }
];
*/

