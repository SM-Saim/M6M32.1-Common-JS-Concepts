/*
 Parameters: function e jei jinish gula declare korbo, oigula k bole parameters.
// arguments: function call korar somoy jei jinish gula patabo, oigula holo arguments

// function er modde arguments naam e ekta keyword ase jeta k console korle ami joto gula arguments patahisi sob chole asbe index number shoho, mane ekta array like object asbe.
// arguments er kichu boisisto:
1.arguments ta array like object.
2.type of holo object.
3.array like object hiwar karone index number onujai value print kora jai.
4.eta jehetu object tai push kora jabe na.
5.for of loop chalano jai.
6.spread operator use kore arguments er typeof objet theke array te convsrt kora jai.
7.kono ekta function er jodi .length dei, taile function e koita parameter declare korsi oita pawa jabe.
*/
function val11(a, b, c) {
  //   console.log(arguments);
  //   const result = [...arguments];
  //   console.log(result);
  console.log(arguments[6]);
  const total = a + b + c;
  return total;
}
const res = val11(2, 3, 4, 5, 6, 7, 8, 9);
console.log(res);
// console.log(val11.length);
