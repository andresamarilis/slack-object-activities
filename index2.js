// object activity 2 on slack
//1. Create an object to hold information on your favourite recipe. 
//It should have properties for title (a string), servings (a number), and ingredients (an array of strings).



let favRecipes = [

        recipe1: {

            title: 'spicy beef pasta',
            servings: '4',
            ingredients: ['cheese', 'penne pasta', 'tomatoes', 'beef', 'chili'],
            getRecipe(){
                return  `here is a recipe for -${this.title} and it serves ${this.servings}, these are ingredients ${this.ingredients} `
            }

        },

        //2. Create multiple recipes and store them as an array, so we can iterate over them later.

        recipe2: {

            title: 'pork burger',
            servings: '4',
            ingredients: ['cheese', 'pork', 'bread', 'bbq sauce', 'lettuce'],
            getRecipe(){
                return  `here is a recipe for -${this.title} and it serves ${this.servings}, these are ingredients ${this.ingredients} `
            }
        },


        recipe3: {

            title: 'Spanish Paella',
            servings: '8',
            ingredients: ['rice', 'saffron', 'calamari', 'muscles', 'prawns', 'chicken'],
            getRecipe(){
                return  `here is a recipe for -${this.title} and it serves ${this.servings}, these are ingredients ${this.ingredients} `
            }
        },
];




//3. Add a function to each of the objects that returns a string: 'here is a recipe for -- and it serves --, these are the ingredients --, --, --, --' (try using a loop)
// created a working loop. Creates a new variable with the stuff inside favRecipes.allRecipes. 
// if just creating for loops with iterators is easier than do that
// for(let i =0; i < favRecipes.length; i++)
for (item of favRecipes) {
    console.log(item.getRecipe());    
};



//4. Iterate over all the recipes console.log the function we just created for each iteration adn you should see all your recipes in the console.
