/* Closure: ekta internal function tar outr function er variale k access korte partese, eta 
 k ble closure. */
function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const closure = stopWatch();
console.log(closure());
/* 
Ekhan theke 2 ta bisoi protioman hoi,
1. function er modde arekta function declare korle, boro function er sob variable choto function ta acces korte parbe, karon choto function ta boro function tar territoty er modde ase.
2.Private variable:boro function tar onek gula copy banai, taile protita copy er alada alada instance thakebe, ami joto bar tader k call koro ,tader nijoso ekta counter variable rakbe. Ekta copy arekta copy er counter somporke jane na, mane bisoi ta gopon.
*/

// Ex:2
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
