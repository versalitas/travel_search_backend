const formatResponse = (tripsResponse) => {
    return tripsResponse.map((response) => {
      let formattedResponse = `${response.name}; ${response.type}; ${response.duration} days;`;
      let { details = {} } = response;
      let { land = [], air = [] } = details;
  
      // handle cities
      if (Array.isArray(response.cities)) {
        formattedResponse += ` ${response.cities.join(', ')};`;
      }
  
      // handle land details
      if (Array.isArray(land)) {
        let hotelInfo = land.map((hotel) => `${hotel.name} ${hotel.category}*`).join(', ');
        formattedResponse += ` ${hotelInfo}`;
      }
  
      // handle air details
      if (Array.isArray(air)) {
        let flightInfo = air.map((flight) => `${flight.departureCity} ${flight.departureTime}`).join(', ');
        formattedResponse += ` ${flightInfo}`;
      }
  
      return formattedResponse;
    }).join('\n');
  };
  
  module.exports = formatResponse;


