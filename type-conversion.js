// STRING CONVERSION
alert("STRING CONVERSION")
console.log("STRING CONVERSION");
let value = true;
// alert(typeof value);
console.log(value); // boolean >> true

value = String(value);
// alert(typeof value);
console.log(value); // string >> true

// NUMERIC CONVERSION
alert("NUMERIC CONVERSION");
console.log("NUMERIC CONVERSION");
// alert("6" / "2");

let str = "123"; // string >> 123
// alert(typeof str);
console.log(str);

str = Number(str); // numeric >>  123
// alert(typeof str);
console.log(str);

let age = Number("an arbitrary string instead of a number"); // if the string not valid number.
// alert(age);
console.log(age); // NAN

age = Number(true); // 1
console.log(age);

age = Number(false); // 0
console.log(age);

age = Number(null); // 0
console.log(age);

age = Number(" "); // 0
console.log(age);
