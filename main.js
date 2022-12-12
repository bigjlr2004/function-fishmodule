const {boatInventory} = require("./fishingBoat.js");
const { fishMonger } = require("./fishMonger.js");
const { fishMenu } = require("./restaurant.js")



//Uncomment this code block when you're ready to test your logic

const menu = fishMenu()
console.log(menu)



//  const {boatInventory} = require("./fishingBoat.js");
// const { fishMonger } = require("./fishMonger.js");
// const { fishMenu} = require("./restaurant.js");

/*
Fishing boat is the source of the fish. It will house the array of objects that holds the fish.
fishing boat houses an array that conatins all the fish caught 
this array will be created any time the function boatInventory is invoked.

Fishmonger gets fish from the fishing boat. 
The fishmonger will import the boatInventory function from the fishing boat module
There will be a require function at the top of the page to grab what the fishing boat exported
Once the array of objects is imported to the mongerInventory function from the boatInventory module;
The mongerInventory will create its own array of objects based off of the following requirements:
    1. The fishMonger only buys fish that have a qantity of 10 or more
    2. fishmonger willnot buy any fish higher than $7.50
    3. The fishmonger lets the restaurant owner specify the budget per fish
        a. need to pass an argument holding the value that the owner is willing to pay
    4. When the fishmonger provides a fish to the restaurant owner the quantity should be 10

The restaurant owner imports an array of objects from the fishMonger
    the chef buys 50% of the inventory of fish from the fish monger if they meet the budgeted price point
        a. create a variable controlling price point for fish
    When the fish are imported into the restaurant module a function is used to create three different meals
    the fishMenu function will create a Menu Item for each fish bought 
    the function will add html section tags for each of the menu_items prepared by the chef
*/





/*
The restaurant owner imports an array of objects from the fishMonger
    the chef buys 50% of the inventory of fish from the fish monger if they meet the budgeted price point
        a. create a variable controlling price point for fish
    When the fish are imported into the restaurant module a function is used to create three different meals
    the fishMenu function will create a Menu Item for each fish bought 
    the function will add html section tags for each of the menu_items prepared by the chef
*/

/*
The restaurant owner imports an array of objects from the fishMonger
    the chef buys 50% of the inventory of fish from the fish monger if they meet the budgeted price point
        a. create a variable controlling price point for fish
*/


//     let menuString = "";
//     for( fish of mInventory) {
//         if(fish.price <= budget) {
//             menuString += `
//             <h1>Menu</h1>
//         <article class="menu">
//             <h2>${fish.species}</h2>
//             <section class="menu__item">${fish.species} Soup</section>
//             <section class="menu__item">${fish.species} Sandwich</section>
//             <section class="menu__item">Grilled ${fish.species}</section>
//         </article>
//             `
//         }   
//     }
//     return menuString;
// }


    //invoke the function boatInventory and store the value it returns in the variable fullInventory
   // const fullInventory = boatInventory();
//     //invoke the fishMonger function and pass it the full fish inventory imported from the fishingBoat module and 
//     //a price point
// const mongerInventory = fishMonger(fullInventory, 7.5);
    //invoke the fishMonger function and pass it the monger filtered inventory imported from the fishMonger module and 
    //a price point
    // const restaurantInventory = fishMenu(mongerInventory, 5);
   // console.log(restaurantInventory);