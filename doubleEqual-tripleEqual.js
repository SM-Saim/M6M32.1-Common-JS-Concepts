// === value, type 2 tai check kore.
// == only value check kore.
// Amra 99% khetre === use korbo.

// Ex1:
const first = 2;
const second = "2";
if (first === second) {
  console.log("Both are equal");
} else {
  console.log("Not equal");
}

// Ex2:
const a = 1;
const b = true;
if (a == b) {
  console.log("Both are equal");
} else {
  console.log("Not equal");
}

/*
 Type coercion:
 Type coercion in JavaScript is the automatic conversion of a value from one data type to another. It happens implicitly when operators or functions are applied to values of different types. For example, if you try to add a string and a number using the "+" operator, JavaScript will convert the number to a string and concatenate the two values.

Here are some examples of type coercion in JavaScript:

*Converting a string to a number:
const str = "10";
const num = Number(str); // num is now 10 

 Type convesion:
 Type Casting: ekta obosta theke arekta obostai convert kora.
*/

/* 
Non-primitive: Orthath, array, object jodi same value take refference hosabe nay, taile equal comparision kaj korbena.
*equal comparision doestn't work for non-primitive type. 
*Sei khetre loop through kora every single value er upor, opor tar every single check korte hoi.
*/

const p = [];
const q = [];
if (p === q) {
  console.log("Both are equal");
} else {
  console.log("Not equal");
}
