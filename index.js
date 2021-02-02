//Javascript object practice

//1. Create an object of your favourite book. It should have the following properties: name, author, datePublished, and numberOfPages. (If you don't know, feel free to make it up).  console.log your object and check out the chrome dev tools and how objects look in the console.
//Create a couple more books and try console.log on specific properties.


const favBook = {

    name: "Cooking 101",
    author: 'Emily',
    datePublished: "10/10/21",
    numberOfPages: 293, 
    
}

const favBook2 = {

    name: "Cooking with Greg",
    author: 'Greg',
    datePublished: "5/2/21",
    numberOfPages: 123, 
    
}

const favBook3 = {

    name: "Italian Cuisine",
    author: 'Justine',
    datePublished: "4/1/21",
    numberOfPages: 600, 
    
}



//Create a new variable listOfBooks and set it to an array of all your books, so you can use [] notation and . notation in the same command! try console.log(listOfBooks[1].name)
let listOfBooks = [favBook, favBook2, favBook3] 

console.log(listOfBooks[0].name)
console.log(listOfBooks[1].name)
console.log(listOfBooks[2].name)


//Try re-assigning your object properties further down in your code after you have declared it!
favBook3.author = "Andy"
console.log(listOfBooks[2].author)
// or you can do this
console.log(favBook3.author)


//Finally, add in a new value to one of your books without changing the initial declaration. favouriteBook.hasRead = true;
favBook3.hasRead = true;
// to check 
console.log(favBook3.hasRead)
//or
console.log(favBook3)




