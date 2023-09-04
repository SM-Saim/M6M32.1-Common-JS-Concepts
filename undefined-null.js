// 8 ways to get undefined.

//1. variable declare korlam ,but value ta initilize korlam na.
let num;
console.log(num);

// 2. function theke kono kisu return korlam na
function val11(a, b) {
  const total = a + b;
}
const res = val11(2, 2);
console.log(res);

// 3.function er parameter jodi pass na kori, taile undefined dekhabe.
function val22(a, b, c, d) {
  console.log(a, b, c, d);
}
val22(2, 3);

// 4. function theke return korlam but return ki seta bollam na, taile undefined dekhabe.
function val44(a, b) {
  const total = a + b;
  return;
}
const output = val44(3, 3);
console.log(output);

// 5. kono property object er modde na thakle taile seta k call korl undefind asbe.
const val55 = {
  id: 333,
  name: "faran",
  salary: 330000,
};
console.log(val55.salary, val55.age);

// 6. Emon array index number chacchi jeta asole nai,
const val66 = [33, 55, 77, 88, 55, 3];
console.log(val66[0], val66[6], val66[200]);

// 7. delete an array item using delete keyword.
// Note: array upada delete korar jonno splice usse korbo.

const val77 = [33, 55, 77, 88, 55, 3];
delete val77[0];
console.log(val77[0], val77[6], val77[200]);

// 8. kono dat aset kora hoi nai, tai jodi undefined likhi, taile indefined result dibe.
//Note: kono ekta data set kora hoinai, eta define kore null  keyword diea, undefind deia na.
const val88 = undefined;
console.log(val88);

// we should use null
const val99 = null;
const val10 = { result: [], updated: null };
console.log(val99);

// undefined er typeof holo undefined.
console.log(typeof undefined);

// null er typeof holo object
console.log(typeof null);

// overall, kono ekta value nai, taile ami jodi value set kortei chai, taile set korbo null.
// kono ekta value nai, taile undefined set korte jabo na.
// null intesionally, undefined intesionally na.
