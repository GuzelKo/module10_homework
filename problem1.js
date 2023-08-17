let value = prompt("enter value");
value = +value;

if (typeof value === "number" && !isNaN(value)) {
  if (value % 2 === 0) {
    console.log("четное")
  }
  else { console.log("нечетное");}
} else { console.log("Упс, кажется, вы ошиблись..")}