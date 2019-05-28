let height = prompt("what is the height?");
console.log("height: ", height);

let x = parseInt(height);

while (height > 8 || height < 1 || isNaN(height)) {
  height = prompt("what is the height?");
  x = parseInt(height);
}

//layers
for (let i = 1; i <= x; i++) {
  //   debugger;
  let counter;
  let arr = [];
  for (let j = 0; j < x - i; j++) {
    arr.push(" ");
  }
  for (let j = 0; j < i; j++) {
    arr.push("#");
  }
  arr.push(" ");
  for (let j = 0; j < i; j++) {
    arr.push("#");
  }
  for (let j = 0; j < x - i; j++) {
    arr.push(" ");
  }
  console.log(arr.join(""));
}
