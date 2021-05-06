// // write your code here!
// // This variable has the data you're working with

// console.log(data);


// // my code start

// // created an article element with the class of card

// const article = document.createElement("article")
// article.className = "card"

// console.log(article)

// // created a title element with the class of card-title

// const title = document.createElement("h2")
// title.className = "card--title"

// console.log(title)

// // added the title (h2) to the article (nesting it)

// article.append(title)

// // found the section with a class of cards and assigned to 
// // variable cardsSection

// const cardsSection = document.querySelector(".cards")

// // added the article to cardsSection (cards)

// cardsSection.append(article)

// //

// ****************************************************

// using the above code which is in the correct structure
// this works for names
// creating a loop to put in the names

// for(const pokemon of data){
   
//     createCard(pokemon.name)
// }

// // creating a function

// function createCard(pokemonName){
// const article = document.createElement("article")
// article.className = "card"

// const title = document.createElement("h2")
// title.className = "card--title"

// title.innerText = pokemonName

// article.append(title)

// const cardsSection = document.querySelector(".cards")

// cardsSection.append(article)

// }

// ****************************************************

// /// adding to the above to include images // 


for(const pokemon of data){
   
    createCard(pokemon.name) 
}

for(const pokemonImg of data){
   
    createCard(pokemonImg.sprites.other['official-artwork'].front_default)
}

// creating a function

function createCard(pokemonName, pokemonImg){

const article = document.createElement("article")
article.className = "card"

const title = document.createElement("h2")
title.className = "card--title"

article.append(title)

title.innerText = pokemonName

const pokemonImage = document.createElement("img")
pokemonImage.className = "card--img"
    
article.append(pokemonImage)
    
pokemonImage.src = pokemonImg

const cardsSection = document.querySelector(".cards")

cardsSection.append(article)

}

