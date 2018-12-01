const request = require('request');

const weather = (results, callback) => {
  request({
    url: `https://api.darksky.net/forecast/ca63413a8994703ae25aec5fbc9efa43/${results.lat},${results.lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback("no connect to google")
    } else {

      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }

  })
}

module.exports = {
  weather
}