let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
    seasons: {
        "season one": [
            {
                episode_title: "Simpsons Roasting on an Open Fire",
                aired: '1989-12-17',

            },
            {
                episode_title: "Bart the Genius",
                aired: "1990-01-01",
            }
        ],
        "season two": [/*  */],
        "season three": [/*  */]
    },
    currently_running: true,
}

//* Object.keys() -> returns back an array of keys the object has

//console.log(Object.keys(theSimpsons));

const listKeys = Object.keys(theSimpsons);
//console.log(listKeys); //logs the keys the object theSimpsons has

//* Object.values() -> returns an array of values the object has
console.log(Object.values(theSimpsons)); //logs the values the object theSimpsons has
console.log(Object.values(theSimpsons.seasons)); //shows specific values to the seasons

//* Object.assign() -> copies all enumerable properties from one or more sources.

let objOne = {
    fName: "Bob",
};
let objTwo= {
    work: "Manager",
};

let newObj = Object.assign(objOne, objTwo);
console.log(newObj);
console.log(newObj.fName);

let futurama = Object.assign(theSimpsons);
console.log("Futurama: ", futurama); //would use object classes rather than this

//* delete object.key -> removes a key inside of object

console.log("Before: ", Object.keys(futurama));
delete futurama.currently_running;
console.log("After: ", Object.keys(futurama));


//* Object.freeze()
Object.freeze(theSimpsons);
theSimpsons.id = 1996;
console.log(theSimpsons.id);//still logs 1 because object.freeze prevents the value from being changed