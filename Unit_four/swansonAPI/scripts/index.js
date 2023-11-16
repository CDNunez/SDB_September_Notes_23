//! Global Variables
const image = document.querySelector('div');//sets image to div
const h3 = document.querySelector('h3'); //sets h3 variable to the h3 element on index.html
const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'; //API to fetch from

//!Event Listener
image.addEventListener('click', e => {
    getQuote();
})

//!Display (function)
const getQuote = async() => {
    // console.log('test');
    // fetch(url)
    //     .then(response => response.json())
    //     .then(object => {
    //         // console.log(object);
    //         let quote = object[0];
    //         h3.textContent = quote;
    //         console.log(object[0]);
    //     })
    //     .catch(err => console.error(err));
    const response = await fetch(url);
    const data = await response.json();

    h3.textContent = data[0];
}