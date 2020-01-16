let breedName = process.argv.splice(2).toString();
const { fetchBreedDescription } = require('./breedFetcher');


fetchBreedDescription(breedName, (error, data) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(data);
  }
});

