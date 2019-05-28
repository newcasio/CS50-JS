console.log("credit test");

let ccNumber = prompt("Enter CC number to check");

//split into array
let arr = ccNumber.split("");
// console.log(arr);

//get length
let arrLength = arr.length;

//first two numbers of card for later checks
let firstDigits = arr[0] + arr[1];

let doubleArrInit = [];
//get every second number starting from the second last
for (let i = arrLength - 2; i >= 0; i = i - 2) {
  doubleArrInit.push(arr[i]);
}

//double each value of doubleArrInit
let doubleArr = [];
for (let i = 0; i < doubleArrInit.length; i++) {
  doubleArr.push(doubleArrInit[i] * 2);
}

//break down numbers in array into single digits
let indNumberInit = doubleArr.join("").split("");
let indNumber = indNumberInit.map(number => {
  return parseInt(number);
});

//add individual numbers together
let total1 = indNumber.reduce((acc, current) => acc + current, 0);

//starting from last digit of orig array, add digits together
singArr = [];
for (i = arrLength - 1; i >= 0; i = i - 2) {
  singArr.push(parseInt(arr[i]));
}

//add digits in singArr together
let total2 = singArr.reduce((acc, current) => acc + current, 0);

sumTotal = total1 + total2;

//turn sumTotal into a indiviual numbers
let checkSum = sumTotal.toString().split("");

//check if last digit of sumTotal is 0
if (checkSum[checkSum.length - 1] !== "0") {
  console.log("Invalid");
} else {
  //number is valid, check which card
  if (arrLength === 15 && (firstDigits === "34" || firstDigits === "37")) {
    console.log("Amex");
  } else if (
    arrLength === 16 &&
    (firstDigits === "51" ||
      firstDigits === "52" ||
      firstDigits === "53" ||
      firstDigits === "54" ||
      firstDigits === "55")
  ) {
    console.log("Mastercard");
  } else if (
    (arrLength === 13 && arr[0] === "4") ||
    (arrLength === 16 && arr[0] === "4")
  ) {
    console.log("Visa");
  } else {
    console.log("Valid number but not major CC");
  }
}
