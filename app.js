const fetch = require('node-fetch');
const chalk = require('chalk');
const prompt = require('prompt-sync')();


// Welcome message
console.log(chalk.bgYellow('Welcome!'));

//Define the endpoint based on user input
const entry = prompt(chalk.bgYellow("Which Pokemon do you want to search for?    ")).toLowerCase();
const url = `https://pokeapi.co/api/v2/pokemon/${entry}/encounters`;

// Hit the API endpoint
fetch(url)

  // Parse the json response, and format (if successful)
  .then(response => response.json())
  .then(results => {

      console.log(chalk.bgGreen(`There are ${results.length} places where you can find ${entry}, here they are:`));

      results.forEach((item) => {
        console.log(`${results.indexOf(item) + 1}. ${item.location_area.name}`);
      })
  })

  // Provide an error message if the promise fails to resolve
  .catch(() => console.log(chalk.bgRed(`Whoops! Sorry, that didn't work, are you sure you spelt '${entry}' correctly?`)));
