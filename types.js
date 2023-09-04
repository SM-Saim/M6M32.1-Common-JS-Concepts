/* 
Strongly Typed Programming Language: Jei language gula te age theke bole dite hoi, variable ta kon typer sei gula k strongly typed programming language bole.
Ex:
int a =5;
string b='Alim Dar';
bool c=true;
*/

//javascript holo dynamic typed programming language. age theke bole dea lage na , kon typer, abar chaile kon typer oi ta typeof diye ber kora jai.

// Primitive datatype: simple jegula jemon, (number, string, boolean) eigula k primitive datatype bole.
// Ex:
const a = 55;
const b = "Hello";
const d = true;

//Non-primitive datatype: array, object
const c = [22, 33, 44];
const students = { id: 23, class: 5 };

// console.log(typeof a, typeof b, typeof c, typeof d, typeof students);

// Primitive Value Reassign: value notun kore set korsi.
let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

// Non primitive Value reassign:
// Non primitive refference dhore rakhe.
/*non primite e jokon maan set korbo,ebong value reassign korbo, tokon tara kintu ekoi refer korbe. mane ektar maan change korle 2 tar e maan change hoi jabe, karon tara reassign value gular joto new palce set korar poribrte ager value ta k just refer kore dei.*/
let val11 = { position: "Backend Development" };
let val22 = val11;
val11.position = "SWE";
console.log(val11, val22);
