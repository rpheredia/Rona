var recipeCard = {
    title : 'Mole',
    servings : 2,
    ingredients : ['cinamon', 'cumin','cocoa']
};

console.log(recipeCard.title + '\nServes: ' + recipeCard.servings + '\nIngredients: ' );
for (i = 0; i < recipeCard.ingredients.length; i++){
    console.log(recipeCard.ingredients[i] );
}
