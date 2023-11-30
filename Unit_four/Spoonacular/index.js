//?Imports
import apiKey from "./key.js";

//?Global Variables
const baseURL = 'https://api.spoonacular.com/recipes/random';

let buildURL = `${baseURL}/?apiKey=${apiKey}`;
let storedRecipes = []; //empty array to be populated by objects created from user input


//?DOM Elements
const searchForm = document.querySelector('form');

const randomCard = document.querySelector('.random-card');

const keptCards = document.getElementById('kept-cards');


//?Functions
const removeElements = element => {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


/////ToDo Display Single Card (Random)
const displayRandomCard = recipe => {
    console.log(recipe); //test

    // while(randomCard.firstChild) {
    //     randomCard.removeChild(randomCard.firstChild);
    // }

    removeElements(randomCard);

    //*Create Elements
    let card = document.createElement('div');
    let img = document.createElement('img');
    let body = document.createElement('div');
    let title = document.createElement('h5');
    let btn = document.createElement('a');

    //*Set Attributes
    card.className = 'card';
    card.style.width = '18rem';
    img.src = recipe.img;
    img.className = 'card-img-top';
    img.alt = recipe.title;
    body.className = 'card-body';
    title.className = 'card-title';
    title.textContent = recipe.title;
    btn.className = 'btn btn-primary';
    btn.textContent = "Add";
    btn.onclick = () => {
        storedRecipes.push(recipe);
        setTable();
    }

    //*Attach/Append Elements
    body.appendChild(title);
    body.appendChild(btn);

    card.appendChild(img);
    card.appendChild(body);

    randomCard.appendChild(card);
}

//ToDo Display Deck of Cards
const setTable = () => {
    console.log('Stored Recipe Array : ', storedRecipes);

    removeElements(keptCards);

    storedRecipes.map(obj => {
        //*Create
        let div = document.createElement('div');
        let addedCard = document.createElement('div');
        let img = document.createElement('img');
        let cardBody = document.createElement('div');
        let h5 = document.createElement('h5');
        let cardText = document.createElement('p');
        let a = document.createElement('a');
    
        //*Set Attributes 
        div.className = 'col';
        addedCard.className = 'card';
        img.src = obj.img; //needs object from the array
        img.alt = obj.title; //needs object from the array
        img.className = 'card-img-top';
        cardBody.className = 'card-body';
        h5.className = 'card-title';
        h5.textContent = obj.title; //needs object from the array
        cardText.className = 'card-text';
        a.href = obj.src; //needs object from the array
        a.target = '_blank';
        a.textContent = "Link to Recipe";
    
    
        //*Append
        cardText.appendChild(a);
    
        cardBody.appendChild(h5);
        cardBody.appendChild(cardText);
    
        addedCard.appendChild(img);
        addedCard.appendChild(cardBody);
    
        div.appendChild(addedCard);
    
        keptCards.appendChild(div);

    });

}

//?Event Listeners
searchForm.addEventListener('submit', e => {
    e.preventDefault();

    fetch(buildURL)
        .then(res => res.json())
        .then(data => {
            // console.log(data.recipes[0])
            let recipe = data.recipes[0]; //targets the data of the API, then the object which contains an array, then we can select each object
            let obj = {
                title: recipe.title,
                img: recipe.image,
                src: recipe.sourceUrl
            }

            // console.log(obj);//test
            displayRandomCard(obj);

        })
        .catch(error => console.error(error))
})



