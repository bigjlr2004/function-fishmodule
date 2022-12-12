// the following statement imports the fishing boat module from fishingBoat.js
//const {boatInventory} = require("./fishingBoat.js");

/*Fishmonger gets fish from the fishing boat. 
The fishmonger will import the boatInventory function from the fishing boat module
There will be a require function at the top of the page to grab what the fishing boat exported
Once the array of objects is imported to the mongerInventory function from the boatInventory module;
The mongerInventory will create its own array of objects based off of the following requirements:
    1. The fishMonger only buys fish that have a qantity of 10 or more
    2. fishmonger willnot buy any fish higher than $7.50
    3. The fishmonger lets the restaurant owner specify the budget per fish
        a. need to pass an argument holding the value that the owner is willing to pay
    4. When the fishmonger provides a fish to the restaurant owner the quantity should be 10
    */

//Fishmonger gets fish from the fishing boat. pass a price point argument to the fishMonger function
const fishMonger = (fInventory, pricePoint) => {
    //create empty Array to hold filtered fish.
    const mongerArray = [];
    //iterate through array of fish with for of loop
for(fish of fInventory){
        //only select fish with a quantity greater than 10 and a price less than the price point
        if(fish.amount >= 10 && fish.price < pricePoint) {
            //change quantity of fish.amount to 10
            fish.amount = "10"
            //push fish into array
            mongerArray.push(fish);
        }
    }
    return mongerArray;
}




//const fullInventory = boatInventory();
//the following statement exports the mongerInventory function
module.exports = {fishMonger};