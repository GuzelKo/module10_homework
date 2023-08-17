let array = [1, 2, 3, 4, true, false, null, "df", 6];

let even = 0;
let odd = 0;
let hasZero = false;

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') continue;
  
  if (array[i] % 2 === 0 && array[i] !== 0) {
      even++
      if (array[i] === 0) {
        hasZero = true;
      }
    }
  else {odd++}
}

console.log(`even numbers: ${even}`);
console.log(`odd numbers: ${odd}`);
if (hasZero) console.log(0);
