const request = require("request");
let input = process.argv.splice(2).toString();

// console.log(input)

const api = `https://api.thecatapi.com/v1/breeds/search?q=${input}`;

request(api, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response.statusCode);
  const data = JSON.parse(body);

  if (response.statusCode === 404) {
    console.error("invalid url");
    return;
  }

  // console.log(data, ' data')

  if (data[0] === undefined) {
    console.error("invalid breed");
    return;
  }

  // console.log(typeof body, ' body type')

  // console.log(data);
  // console.log(typeof data, ' body type');

  console.log(data[0].temperament);
});
