//ToDO: Global Variables

//document.querySelector('element'); selects specific element from the html file
const form = document.querySelector('form');//form variable references the form element in the index.html file
const table = document.querySelector('tbody'); //table variable references the tbody element in the index.html file
let animals = []; //empty array in the global scope to push objects from the event listener -- Mock Database

// console.log(form.species);
// console.log(Object.values(form));
// console.log(form[0].placeholder); different methods to navigate through our dataset

//* Event Listener

form.addEventListener('submit', e => {//e stands for the event
    //console.log(e);//logs event after it has happened
    e.preventDefault();//prevents the event from doing its default function -- in this case the submit reloading the page
    //console.log('click'); //log to test function

    const animal = {
        species:form.species.value, //each key/value pair targets a specific value in the form from index.html
        animalName:form.name.value,
        sex:form.sex.value,
    }

    //console.log(animal); //logs object animal for test
    animals.push(animal);//pushes objects created from const animal to the animals array

     form.reset();//clears the inputs within the form
     form[0].focus();//targets the first input within the form when it is "new"
     //* alt way: form.species.focus();

    displayTable(); //invokes function
})

//ToDo: Display to a table (function)

function displayTable() {
    //console.log('DT: ', animals);

    while(table.firstChild) {//while the tbody contains a tr this loop will run
        table.removeChild(table.firstChild);
    }//this loop will clear the visual output on the table in the browser while the animal array is still being updated by the function

    animals.forEach((animal, i) => {//loop through each object in the array including index
        // console.log('loop', i, animal);test
        //* Create
        let tr = document.createElement('tr'); //creates table row element in HTML. THis will be the parent element for 'td'
        let id = document.createElement('td'); //creates table data element in HTML. This will contain the value of ID
        let animalName = document.createElement('td'); //creates table data element in HTML. This will contain the value of animalName
        let sex = document.createElement('td'); //creates table data element in HTML. This will contain the value of sex
        let species = document.createElement('td'); //creates table data element in HTML. This will contain the value of species
        //*Assign
        id.textContent = i +1;//finds the index of the array and adds 1;
        animalName.textContent = animal.animalName;
        sex.textContent = animal.sex;
        species.textContent = animal.species; //this will assign the values from the fields input by the user to these variables

        //*Append/Set
        tr.appendChild(id);
        tr.appendChild(animalName);
        tr.appendChild(sex);
        tr.appendChild(species);
        table.appendChild(tr);

    })
}