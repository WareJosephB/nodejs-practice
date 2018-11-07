

const api = 'http://www.omdbapi.com/?apikey=2da3d653&s='; // or &t= for single result when know title is correct

const axios = require("axios");

axios.get(api+'Bojack')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });