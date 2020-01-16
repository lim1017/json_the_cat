const request = require("request");
// let input = process.argv.splice(2).toString();

const fetchBreedDescription = (input, cb) => {
  // console.log(cb, 'call backk')
  const api = `https://api.thecatapi.com/v1/breeds/search?q=${input}`;

  request(api, (error, response, body) => {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response.statusCode);
    const data = JSON.parse(body);

    if (response.statusCode === 404) {
      // console.error("invalid url");
      cb("invalid URL", null);
    }

    // console.log(data, ' data')
    else if (data[0] === undefined) {
      // console.error("invalid breed");
      cb("Breed not found", null);
    }
    // console.log(typeof body, ' body type')
    // console.log(data);
    // console.log(typeof data, ' body type');
    else {
      cb(null, `${data[0].description}`);
    }
  });
};

// fetchBreedDescription(input)

module.exports = { fetchBreedDescription };
