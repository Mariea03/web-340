function bakePie(type, ingredients) {
    const essentials = ['flour', 'sugar', 'butter'];
    const hasEssentials = essentials.every(item => ingredients.includes(item));


    if (!hasEssentials) {
        console.warn('Missing essential ingredients!');
        process.exit(1);
    }

    return `Successfully baked an ${type} pie!`;
}

module.exports = bakePie;