let height = prompt("what is the height?");
console.log("height: ", height);

let x = parseInt(height);

while (height > 8 || height < 1 || isNaN(height)) {
  height = prompt("what is the height?");
  x = parseInt(height);
}
