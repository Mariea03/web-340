//recipes.js
function createRecipe(ingredients) {
    return `Recipe created with ingredients: ${ingredients.join(",")}` ;
}

function setTimer(minutes) {
    return `Timer set for ${minutes}.`;
}

function quit() {
    return "Program excited";
}

MediaSourceHandle.exports = {
    createRecipe,
    setTimer,
    quit,
}

const { createRecipe, setTimer,quit } = require('./recipes');

console.log(createRecipe(["Cucumber, Tomato, Mozzarella, Italian Dressing "]));
console.log(setTimer(15));
console.log(quit());
