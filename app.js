const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weatherApp = require('./weather/weather.js');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    weatherApp.weather(results, (errorMessage, currentWeather) => {
      console.log(currentWeather);
    })
  }
});

//ca63413a8994703ae25aec5fbc9efa43

//