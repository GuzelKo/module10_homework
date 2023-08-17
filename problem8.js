let vegetables = new Map ([
  ["tomato", "red"],
  ["carrot", "orange"],
  ["cucumber", "green"]
]);

for (let elem of vegetables) {
  console.log("Ключ: " + elem[0] + ", значение: " + elem[1]);
}