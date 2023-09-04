// Callback function: function er parameter hisabe arekta function  k patano k bole, ebong vetor theke oi function k call kora ke bole call back function.
// function er parameter chaile jekono kisu pathaite pari.
function greetings(val, name) {
  //   console.log(x);
  val(name); //jehetu parameter hisabe function pathaisi, tar mane vitor theke call korte parbo.
  //   console.log(name);
}
// const res = 33;
// const res = [33, 44, 55, 66, 6];
// const res = { name: "John", value: 33 };
// console.log(res);

// function er parameter hisabe jodi arekta function pathai, taile
function hello(name) {
  console.log("hello there", name);
}
//
function goodEvening(name) {
  console.log("Hi", name);
}
//
function goodNight(name) {
  console.log("bye bye", name);
}

greetings(hello, "Tom Hanks");
greetings(hello, "Tom Brad");
greetings(hello, "Tom Cruse");

greetings(goodEvening, " Washinton");
greetings(goodEvening, "Linkon");
greetings(goodEvening, "Manhatton");

greetings(goodNight, "Stockhome");
greetings(goodNight, "Sheul");
