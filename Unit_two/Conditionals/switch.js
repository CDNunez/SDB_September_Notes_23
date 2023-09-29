/* 
*   Switch Conditionals Statements
    -Switch statements execute /run a block of code depending on different cases
    -The Switch is used together with a break or default keyword or both.
        -These are both optional.
        -Break: keyword that breaks out of the switch block. If a break is omitted/not added then the next code block in the switch will run (run as well).
        -Default: keyword that specifies code to run if no case matches (similar to else in if statements).
*/

let officeCharacter = "Pam";

switch (officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`); 
}

//let interpol = "can interpolate a"
//string interpolation console.log(`this is how you ${interpol} string`);

let num = -40;

switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran');
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work');
}