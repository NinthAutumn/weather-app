const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDvMgTz5EHjHzGyG6hroYp4ilpe0P6MVzI`

axios.get(geocodeUrl).then((response) => {
  console.log(response.data);
}).catch((e) => {
  if (e.code === "ENOTFOUND") {
    console.log("unable to connect o api server");
  }
})
//ca63413a8994703ae25aec5fbc9efa43

//