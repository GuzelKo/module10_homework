let array = [1, 2, 4, 9, 5, 18, 5];
let b = false

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i] === array[j] && i !== j) {
      console.log(true)
      b = true
      break
    }
  }
  if (b) break
}

if (!b) console.log(false)
