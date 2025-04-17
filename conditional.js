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
// let accessAllowed;
// let age = prompt('how old are you?');

// if (age > 18 ) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }

// // let age = prompt('how old are you?');
// // let accessAllowed = (age > 18) ? true : false;

// console.log(accessAllowed);

// MULTIPLE ?
// let age = prompt('age?', 18);
// if (age < 3) {
//     message = 'Hi, baby!';
// } else if (age < 18) {
//     message = 'Hello!';
// } else if (age < 100) {
//     message = 'Greetings!';
// } else {
//     message = 'What an unusual age!';
// }
// alert(message);

// // NON TRADITIONAL USE OF ?
// let company = prompt('which company created javascript?' , '');

// (company == 'Netscape') ?
// alert('Right!') : alert('Wrong!');

// TASK
// // 1. if (a string with zero)
// if ("0") {
//     alert( 'Hello' );
// }

// // 2. The name of javascript
// let name = prompt ("what is the 'official' name of javscript?");
// if (name == 'ECMAScript') {
//     alert('Correct!');
// }
// else {
//     alert('You don\'t know? ECMAScript!');
// }

// 3. Rewrite 'if' into '?'
// let result
// (a+b<4) ? 'Below' : 'Over';

// 4. Rewrite 'if' into '?'

let login = prompt ('who are you?');

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings':
        (login == '') ? 'No login':
            'Unknown user';

alert(message);