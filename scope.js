//Scope: Jokon kono second bracket({}) er modde kisu ekta thake setai ekta scope.
// scope 3 proker.
// 1. grobal scope: sobai access korte parbe. kono braket er modde simaboddo na.(var holo global scope)
// kono variable chare kisu declare korle seta golbal scope hisabe gonno hoi.
// 2.function scope. (only in function)
// 3.block scope. (if , else er modde pai)

// let ar const shudumatro scope er modde pawa jabe, baire pabe na, kintu var baire the ke oawa jabe.

// function er ekta scope ase ,jeta function er baire access kora jai na.
// eknae amra 3 ta scope deklam, function er ekta scope, if er ekta , else er ekta scope.Era kintu tader second bracket er baire kono kaj korar permissin na.
function nam(a, b) {
  const total = a + b;
  if (total > 10) {
    console.log("Bigger than 10");
  } else {
    console.log("Less than 10");
  }
}
// console.log(a, b);
const final = nam(5, 6);
console.log(final);

// Kintu var diea kono kisu declare korle se block scope mane na, tokon var er variable name ta hoisted(mane uprer dike chole jawa) hoi uporer dike er decleration ta chole jai, block er baire theo eke call korle value pawa jai,
// var function e atkai.
// Ex:
function naam(d, e) {
  const totals = d + e;
  if (d > 10) {
    console.log("A bigger than 10");
  } else {
    // console.log("Less than 10");
    const x = totals;
    var values = x + d + 100;
  }
  console.log("var value is", values);
  return totals;
}
naam(5, 5);
// console.log(finals);
