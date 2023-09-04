/*
Truthy:
1. true.
2. 0 baad e, Any (+ve) or (-ve) will be truthy.
3. ('') empty string chara baki sob string holo truthy.
4. '0', 'false'
5.{}  
6.[]

Falsy:
1. false.
2. 0
3.''
4.undefined
5.null
*/
const x = undefined;
if (x) {
  console.log("value of x is truthy");
} else {
  console.log("value of x is falsy");
}

// Optional:
// Check falsy: (!x)
const a = "";
if (!a) {
  console.log("a is falsy");
}

// Check truthy: (!!z)
const z = [];
if (!!z) {
  console.log("z is truthy");
}
