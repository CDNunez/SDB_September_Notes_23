/* 
!    API
    -Application Programming Interface
    - Client (front end) to communicate with server (database)
    - Allows HTTP requests and responses lifecycles
*/

/* 
!    Fetch
    - Before fetch(), we would have to use an httpRequest through items like jQuery/Ajax
    - Is an API
    - IS a method that requires 1 argument
        -the location we are trying to obtain data from (url)
    -Handles the request and response
    -Returns a promise
        -Allows us access to resolvers (.then() / .catch())
*/

const testEndpoint = 'https://jsonplaceholder.typicode.com/posts/1';
// console.log(fetch(testEndpoint));

// fetch(testEndpoint)
//.then(res => console.log(res));
//.then(res => console.log(re.url));

// fetch(testEndpoint)
//     .then(res => console.log(res.body));

/* 
!    JSON
        -JavaScript Object Notation
            - very lightweight for storing and transferring data
            - "easy to understand"
    
*   Syntax
    {
        "key": "value",
        "key": true,
        "key": 0
    }

    -Everything is wrapped in quotes with some minor exceptions
    -Data is all separated by a comma
    -CANNOT hold comments or functions

*/

fetch(testEndpoint) //provides us a Promise
    .then(response => response.json()) //Turns Promise into a JSON
    .then(data => {
        //console.log(data); // Allows us to work with object
        displayIt(data.body);
    })

    function displayIt(info) {
        const body = document.querySelector('body');
        const p = document.createElement('p');

        // console.log(info);
        p.textContent = info;
        body.appendChild(p);
    }

    //* JSON.parse(string);
    let myText = `{"name":"Gollum","lost_ring":true}`; //read by JS as a string but can be read by JSON
    console.log(myText);
    console.log(JSON.parse(myText));//allows access as an object
    let parseJSON = JSON.parse(myText);
    console.log(parseJSON.name); //allows for specific targeting

    const url = "https://meowfacts.herokuapp.com/";

    // function getCatFacts() {
    //     fetch(url)
    //         .then(res => res.json())//turn response into JSON
    //         .then(obj => {
                // console.log(obj);//log obj to best figure how to target specfics
    //             console.log(obj.data[0]);
    //             displayIt(obj.data[0]);
    //         })
    // }

    // JSON.parse targets the proper object to parse / .json() is a method

    /* 
    !   Error Handling
        Keywords:
            -try
            -catch

*       Syntax
        try {
            ..code block to try
        } catch (err) {
            ... code block to respond to error
        }
    */

    const getCatFacts = async() => {//this functions similar to the function above
        try {
            let response = await fetch(url);
            //let response = fetch(url);//make the catch show up
            let results = await response.json();
            let data = results.data[0];
            displayIt(data);
        } catch (err) {
            console.error(err);
        }
    }

getCatFacts();

//* Local Fetch

fetch('./local.json')
    .then(res => res.json())
    .then(data => {
        let members = data.fellowship;
        console.log(members);

        for(m of members) {
            displayIt(m.name);
        }
    })
    .catch(err => console.error(err));