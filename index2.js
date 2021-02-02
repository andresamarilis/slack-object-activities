// object activity 2 on slack
//1. Create an object to hold information on your favourite recipe. 
//It should have properties for title (a string), servings (a number), and ingredients (an array of strings).



let favRecipes = {

    allRecipes: {

        recipe1: {

            title: 'spicy beef pasta',
            servings: '4',
            ingredients: ['cheese', 'penne pasta', 'tomatoes', 'beef', 'chili']

        },



        //2. Create multiple recipes and store them as an array, so we can iterate over them later.

        recipe2: {

            title: 'pork burger',
            servings: '4',
            ingredients: ['cheese', 'pork', 'bread', 'bbq sauce', 'lettuce']
        },


        recipe3: {

            title: 'Spanish Paella',
            servings: '8',
            ingredients: ['rice', 'saffron', 'calamari', 'muscles', 'prawns', 'chicken']
        }

    }

};


// ?????? not sure if all this next stuff is correct, but it does work. 




// array from step 2. 
const recipes = [favRecipes.allRecipes.recipe1, favRecipes.allRecipes.recipe2, favRecipes.allRecipes.recipe3]



//3. Add a function to each of the objects that returns a string: 'here is a recipe for -- and it serves --, these are the ingredients --, --, --, --' (try using a loop)
// created a working loop. Creates a new variable with the stuff inside favRecipes.allRecipes. 

for (let finalRecipes in favRecipes.allRecipes) {
    console.log(`Here is a recipe for ${favRecipes.allRecipes[finalRecipes].title}, and it serves ${favRecipes.allRecipes[finalRecipes].servings}. These are the ingredients ${favRecipes.allRecipes[finalRecipes].ingredients}`)
};



//4. Iterate over all the recipes console.log the function we just created for each iteration adn you should see all your recipes in the console.