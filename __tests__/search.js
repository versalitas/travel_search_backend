const searchTravel = require('../utils/search.js');



test('properly returns travels matching inputCity', () => {
    const city = 'madrid';
    expect(searchTravel(city)).toBe({ name: 'Europe Popular Capitals', 
    type: 'Land Trip', 
    duration: 3, 
    cities: ['Madrid', 'Paris', 'London'],
    details: [
      { name: 'Hotel Best Madrid', category: 3 },
      { name: 'Hotel Worst Paris', category: 4 }
    ]
  });
})