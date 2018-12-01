const request = require('request');

const geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDvMgTz5EHjHzGyG6hroYp4ilpe0P6MVzI`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback("no connect to google")
    } else {
      if (body.status === "OK") {
        callback(undefined, {
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        });
      } else {
        callback("no results");
      }
    }

  });
}

module.exports = {
  geocodeAddress
}