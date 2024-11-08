



// NPM INIT -> this initilise your project & create a pacakage.json file for you

// pacakage.json => project kis kis pacakage par depend hai & kya kya information project k bare m available hai vo btata hai 


// npm install give me a joke , this automatically gives 2 new file -> NOde modules -> package-lock.json
 

var colors = require('colors/safe');
var giveMeAJoke = require('give-me-a-joke');

// To get a random dad joke
giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(colors.green(joke)); 
});





 
