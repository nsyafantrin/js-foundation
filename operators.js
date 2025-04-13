// TERMS: UNARY, BINARY, OPERAND
console.log("TERMS: UNARY, BINARY, OPERAND");

let x = 1;
x = -x;
console.log(x);

let y = 3;
console.log( y - x);

// MATHs
console.log("MATHs");
console.log ( y + x);
console.log ( y - x);
console.log ( y * x);
console.log ( y / x);

// Remainder
console.log("Remainder");
console.log( 5 % 2);
console.log( 8 % 5);
console.log( 8 % 4);

// Exponentiation
console.log("Exponentiation");
console.log( 2 ** 2);
console.log( 2 ** 3);
console.log( 2 ** 4);

console.log( "Square root is an exponentiation by 1/2");
console.log(4 ** (1/2));
console.log(8 ** (1/3));
console.log(16 ** (1/4));

// String concatenation with binary +
console.log("String concatenation with binary +");
let s = "- my" + "string";
console.log(s);

console.log('1' + 2 );
console.log(2 + '1');

console.log( 2 + 2 + '1');
console.log( '1' + 2 + 2);

console.log("example only operator + ");
console.log(6 - '2');
console.log('6' / '2');

// NUMERIC CONVERSION, UNARY +
console.log("Numeric Conversion, Unary +");

console.log( +x );
console.log( -x );
console.log(+y);

console.log(+true);
console.log(+"");
console.log(+" ");

let apples = "2";
let orange = "3";
console.log(apples + orange);
console.log(+apples + +orange);
console.log(-apples + -orange);


// Operator Precedence 
/*
From school, we all know that the multiplication in the expression 1 + 2 * 2 should be calculated before the addition. That’s exactly the precedence thing. The multiplication is said to have a higher precedence than the addition.
*/

// assignment
console.log("Assignment");
let o = 2 * 2 + 1;
console.log(o);

let n = 1;
let m = 2;
let c = 3 - (n = m + 1);
console.log(n);
console.log(c);


let l, k, j;
l = k = j = 2+2;
console.log(l);
console.log(k);
console.log(j);

n += 3;
n *= 3;

console.log(n);


// Increment & Decrement
console.log("Increment & Decrement");
let counter = 2;
counter++; //postfix
console.log(counter);
++counter;//prefix
console.log(counter);

let counting = 10;
counting--;
console.log(counting);
--counting;
console.log(counting);


// Bitwise Operators
console.log("Bitwise Operators");
// 00000100 : 4
// 00000010 : 2
// 00000001 : 1

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);

// Comma
console.log("Comma");
let pp = (1+2, 3+2);
console.log(pp);
/*
Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.
*/
pp = 1+2, 3+2;
console.log(pp);


// Task
console.log("Task");
console.log("the postfix & prefix");
console.log("What are the final values of all variables q, w, e and r after the code below?");

let q=1, w=1;
let e= ++q;
let r= w++;
console.log("q =", q);
console.log("w =", w);
console.log("e =", e);
console.log("r =", r);

console.log("assignment");
console.log("What are the values of h and f after the code below?");
let h = 2;
let f = 1 + (h *= 2);
console.log("h =", h);
console.log("f =", f);

console.log("Type Conversions");
console.log("What are results of these expressions ?");
console.log('1. "" + 1 + 0 = ', '"10"');
console.log('2. "" - 1 + 0 = ', -1);
console.log('3. true + false = ', 1);
console.log('4. 6 / "3" = ', 2);
console.log('5. "2" * "3" = ', 6);
console.log('6. 4 + 5 + "px" = ', '"9px"');
console.log('7. "$" + 4 + 5 = ', '"$45"');
console.log('8. "4" - 2 = ', 2);
console.log('9. "4px" - 2 ', NaN);
console.log('10. "-9" + 5 = ', '" -9 5"');
console.log('11. "-9" - 5 = ', -14);
console.log('12. null + 1 = ', 1);
console.log('13. undefined + 1 = ', NaN);
console.log('14. "\t \n" - 2 = ', -2);

console.log("Fix the Addition");
console.log("Why? Fix it. The result should be 3");
let a = prompt("First number ?", 1);
let b = prompt("Second number ?", 2);
alert(+a + +b);
console.log(+a + +b);