const formatResponse = (response) => {
    
    let formattedResponse = `${response.name}; ${response.type}; ${response.duration} days ${response.cities.join(", ")}`;
    
    if (response.details.land && response.details.land.length > 0) {
        let hotelInfo = response.details.land.map(hotel => {(`${hotel.name} ${hotel.category}*`).join(', ')});
        formattedResponse += hotelInfo;
    } else if (response.details.air && response.details.air.length > 0) {
        let flightInfo = response.details.air.map(flight => {(`${flight.departureCity} ${flight.departureTime}*`).join(', ')});
        formattedResponse += flightInfo;
    }

    return formattedResponse.slice(0, -1);
}

module.exports = formatResponse;
