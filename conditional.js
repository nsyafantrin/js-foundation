// THE IF STATEMENT

// let year = prompt(' in which year was the ECMAScript-2015 specification published?');
// if (year == 2015) {
//     alert('thats correct!');
//     alert('you are so smart!');
// }

// BOOLEAN CONVERSION

// if (1) {
//     alert('0 is falsy value');
// } else {
//     alert('0 is truthy value'); 
// } 

// let cond = (year == 2015);

// if (cond) {
//     alert('thats correct!');
// }

// THE 'ELSE' CLAUSE

// let year = prompt(' in which year was the ECMAScript-2015 specification published?');
// if (year == 2025) {
//     alert('you guessed it right!');
// } else {
//     alert('how can you be so wrong?');
// }

// SEVERAL CONDITIONS: ELSE IF

// let year = prompt(' in which year was the ECMAScript-2015 specification published?');
// if (year < 2015) {
//     alert('too early');
// } else if (year > 2015) {
//     alert('too late');
// } else if (year == 2015) {
//     alert('exactly!');
// } else {
//     alert('why not a number?');
// }

// CONDITIONAL OPERATORS
let accessAllowed;
let age = prompt('how old are you?');

if (age > 18 ) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}