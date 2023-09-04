// function call koar somoy argumets hisabe ja disi, oi value jodi function er modde re-assigned kori, taile function call korar age, baire console korle values er kono change hobe na, kintu function call korar por jodi abar function er baire console kori taile kintu functin er modde jei change korsilam, oi change gula  dekte pabo.
// (ei change hobe shudu matro non-primitive er khetre,mane object ar array er khetre karon tara same reference use kore. primitive type er khetre kono change hobe na)

// Primitive type:passed by value , tai  function er vitore kisu change korle baire change hobe na.
let num11 = 9;
let num22 = 18;
function multiply(a, b) {
  a = 20;
  const total = a * b;
  return total;
}
console.log(num11);
const values = multiply(num11, num22);
console.log(values);
console.log(num11);

// Object and array  passed by referrence:
// Ex:2
let student1 = { name: "Ananta", partner: "Borsha" };
let student2 = { name: "Sakib", partner: "apu" };

function val55(x, y) {
  x.name = "Akij";
  y.partner = "Jui";
  return { x, y };
}
console.log(student1, student2);
console.log(val55(student1, student2));
console.log(student1, student2);
