const request = require('request');


const fetchBreedDescription = function(breedName, callback)  {



  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // const data = JSON.parse(body)
    if (error) {
      callback(error, null);
      // error = null;
      // callback(error, data)

    } else {
      
      error = null;
      
    
      const data = JSON.parse(body);
      
      if (data.length === 0) {
        callback(null, "Something went wrong!");

      } else  {
        callback(null, data[0]['description']);
      }
    }

  });
};

module.exports = { fetchBreedDescription };


// request.on('response', (body) => console.log(body))