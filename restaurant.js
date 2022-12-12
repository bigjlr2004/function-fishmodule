const { fishMonger } = require("./fishMonger.js");
const {boatInventory} = require("./fishingBoat.js");


const fishMenu = (mInventory, budget) => {
    let menuString = "";
    for( fish of mInventory) {
        if(fish.price <= budget) {
            menuString += `
            <h1>Menu</h1>
        <article class="menu">
            <h2>${fish.species}</h2>
            <section class="menu__item">${fish.species} Soup</section>
            <section class="menu__item">${fish.species} Sandwich</section>
            <section class="menu__item">Grilled ${fish.species}</section>
        </article>
            `
        }   
    }
    return menuString;
}
    //invoke the fishMonger function and pass it the full fish inventory imported from the fishingBoat module and 
    //a price point
    const fullInventory = boatInventory();
const mongerInventory = fishMonger(fullInventory, 7.5);
const restaurantInventory = fishMenu(mongerInventory, 5);
 //console.log(restaurantInventory);


module.exports = {fishMenu};
