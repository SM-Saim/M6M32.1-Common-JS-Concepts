values();
// notHoisting();

// hoisting: (ouside e accessable ebong variable decleration ta ke ekebare upore niye jai)
// var er value ta block scope er baire theke access kora jacche, ebong variable decleration ta hoisted hoi(maan ta ke na, variable ja diea declere korsi take) uper dike chole jacche, tai outside 6 asche.
for (var i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("outside", i);

//function er hoisting:
// kono ekta function k declare korle taile se full function ta k hoisting kore ekebae upore niea jai, mane jekono jaiga theke function ta ke call kora jai
function values() {
  console.log("function er hoisting", 5);
}

//But functin ta jodi kono variable er modde raki taile kintu ar function ta hoisted hobe na.

let result = function notHoisting() {
  console.log("function er hoisting hocce na", 5);
};
