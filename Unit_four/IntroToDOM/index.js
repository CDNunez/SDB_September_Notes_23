/* 
?       DOM

        -DOCUMENT OBJECT MODEL 
        -Only through the browser

        frame:
         -Document: HTML page (in browser)
            -"document" - it is a global variable
        -Object: Elements and comments (nodes)
        -Model: Arrangement

    -Data representation  of objects that comprise the structure and content of a document on the web.

    * BOM
        -Browser Object Model
        -"window" - global variable
        -various methods available
*/

// console.log("test");

function askForStuff()  {
    prompt();
}

// askForStuff();

console.log(document);
console.log(document.URL);
console.log(document.location); //same as .URL except it returns an object form.
console.log(document.title);
document.title = "DOM or BOM";

//! Creating Our First Element
let h1 = document.createElement('h1');
// console.log(h1);

/* 
Our variables now has access to our various properties
    -innerHTML: can inject a block of HTML
    -innerText: returns the visible text contained in a node.
    -textContent: returns the full text

    ex:
    <p>Hello <b>World</b></p>
    ~innerText would return "Hello World"
*/

h1.innerText = "Creating first DOM element";
//console.log(h1);

/* 
*   Chain of Events:
    1) Create the element
    2) Apply the value /properties
    3)Place the element
*/

//console.log(document.body);
document.body.appendChild(h1);

// h1.style.color = "cyan";
// h1.style.textAlign = 'center';
// h1.style.fontSize = "44px";

let color = 'cyan';

h1.style = `
    text-shadow: 2px 2px 2px magenta;
    text-align: center;
    font-size: 44px;
    color: ${color};
`;

// console.log(h1.style);

h1.className = 'h1-class-name';
//JS requires camelCasing as "ClassName" instead of "class" due to it being a keyword.
h1.id = 'set-id';

/* 
! Finding Elements

*   HTMLCollection
        -An array-like object
        -Allows access to index, properties, and methods to help navigate and modify.
        -Does NOT allow to modify a group of elements all at once.
        -Can loop through it.
        -Can use other .length property to get the size of the list.

    Accessing Multiple Elements requires these methods:
        -getElementsByTagName()
        -querySelectorAll()
        -getElementsByClassName()

*/

let li = document.getElementsByTagName('li');//targets multiple elements -- list items in this case
//console.log(li);

let bathroom = li[0];
bathroom.style.color = 'red';

// li.style.color = 'green';
for(i of li) {
    i.style.color = 'green';
    i.style.listStyle = 'none';
    i.style.textAlign = 'center';
    i.style.display = 'block';
}

// let ul = document.getElementsByTagName('ul');

// ul.style = `
//     margin: 0 auto;
//     padding: 15px;
// `;

/* 
*   .querySelector()
        -Grabs first instance of an element or null if nothing found.
        - can target by ID, Class, or Element
            -will need to append # for ID
            -will need to append . for class
*/

let firstLi = document.querySelector('li');
// console.log(firstLi);

let toDoList = document.querySelector("#listTitle");
// console.log(toDoList);
toDoList.style.textAlign = 'center';

let classListItem = document.querySelector('.listItem');
console.log(classListItem);

/* 
*   .querySelectorAll()
    - Returns a static nodeList (an array) list of elements.

*/

const nodeListLi = document.querySelectorAll('li');
// console.log(nodeListLi);

let newListItem = document.createElement('li');
let ul = document.getElementById('ulToDo');

newListItem.innerText = 'New Item';

// ul.append(newListItem); //does the same thing as below
ul.appendChild(newListItem);

let  liClass = document.getElementsByClassName('listItem');

console.log(liClass);

//! Event Listeners
/* 
    Allows us to execute a function when an event occurs.

    .addEventListener()
        -DOM node method
        -requires an event to "listen for" or type and a callback function.

    ex:
    node.addEventListener('click', () => {})

    Adding an item to the list:
        step:
            -capture the input
            -access the parent element
            -create a new element (li)
            -assign value to attributes
                -"text from input"
            -append to the parent
*/

let btn = document.getElementById('submit');
let input = document.getElementById('listInput')

// btn.addEventListener('click', e => {
//     console.log('Cliiick');
// })

btn.addEventListener('click', addItem);
function addItem() {
    // console.log(input.value);
    let newItem = document.createElement('li');
    newItem.textContent = input.value;
    newItem.style = `
    color: yellow;
    `;

    ul.append(newItem);
}