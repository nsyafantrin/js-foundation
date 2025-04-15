console.log("boolean is the result")
console.log( 2 > 1); 
console.log( 2 == 1);
console.log( 2 != 1);

let result  = 5 > 4;
console.log(result);

console.log("Strigs comparisons");
console.log('z' > 'a');
console.log('Glow' > 'Glee');
console.log('Bee' > 'Be');

console.log("Comparisons of different types");
console.log( '2' > 1); // true, string is converted to number
console.log( '01' == 1); // true, string is converted to number
console.log( true == 1); // true, boolean is converted to number
console.log( false == 0); // true, boolean is converted to number

console.log("funny consequence");
let a = 0;
console.log(Boolean(a));

let b = "0";
console.log(Boolean(b));

console.log(a == b);


console.log("Strict Equality");
console.log( 0 == false);
console.log('' == false);

console.log( 0 === false);

console.log("Comparison with null and undefined");
console.log("strange result: null vs 0");
console.log( null > 0);
console.log( null == 0);
console.log( null >= 0);

console.log("strange result: null vs 0");
console.log( undefined > 0);
console.log( undefined < 0);
console.log( undefined == 0);


console.log("Task");
console.log("1. 5 > 4 = ", true);
console.log('2. "apple" > "pineapple =', false);
console.log('3. "2" < "12 =', true);
console.log('4. undefined == null =', true);
console.log('5. undefined === null =', false);
console.log('6. null == "\n0\n" =', false);
console.log('7. null === +"\n0\n" =', false);

