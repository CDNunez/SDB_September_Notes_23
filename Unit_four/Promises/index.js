/* 
!   Promises

    3 Main states
        - Pending
        - Fulfilled
        - Rejected

        Are an object that may produce a singular value in the future.

        Takes in two parameters
            - Resolve
            - Reject

        Always returns an object
*/

//? Mock internet send
function getData() {
    setTimeout(() => {
        return "some data";
    }, 3000)
}

// let data = getData();
//*the value comes in "late" - 3 seconds
// console.log(data);
 //*logs undefined because the info is delayed when it is compiled

 function getDataAgain(cb) {
    setTimeout(() => {
        cb('some data');
    }, 3000)
 }

//  getDataAgain(data => console.log(data));
//  console.log('Hello World');

 function returnData() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve('some data from promise');
            } else {
                reject('This is a rejection');
            }
        }, 300)
    })
 }

//  console.log(returnData());
/* 
! Resolvers
 - When returned, the returnData() function will return a Promise instead of a given string.

-Chained with a resolver
* keywords:
    - .then(cb) - if success
        - can be chained together
    - .catch(cb) - if error
 - Takes in a callback function
 - only put the semicolon (;) after the LAST resolver
*/

returnData()
 .then(data => console.log('From Response: ', data))
 .then(() => {
    let x = 1;
    let y = 2;
    console.log(x + y);
 })
 .catch(function(err) {
    console.error(err)
});

/* 
*   The Process
        - Creating a new Promis
            -resole / reject are parameters of a cb (callback function)
        -setTimout is acting as our "waiting" for a resource/data
        -resolve() or reject() said promise
        -when returned, returns a Promise object - not a string
        -use of resolvers (.then()/.catch()) with cb to extrapolate the info from that promise

*/