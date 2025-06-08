const assert = require("assert");
const { createRecipe, setTimer, quit } = ("./recipes");

try {
    assert.strictEqual (
        createRecipe(["Cucumber", "Tomato", "Mozzarella", "Italian Dressing"]),
        "Recipe created with ingredients:Cucumber, Tomato, Mozzarella, Italian Dressing"
    );

    assert.strictEqual(setTimer(15), "Timer set for 15 minutes. ")
    assert.strictEqual(quit(), "Program exited");

    console.log("All tests passed!");
} catch (err) {
    console.error("Test failed:", err.message);
}