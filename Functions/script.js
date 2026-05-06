// 21.	Add two numbers

/*
let addTwoNumber = (a, b) => {
return a + b;
}

console.log(addTwoNumber(2,6))
*/

// 22.	Subtract two numbers

/*
let subtractTwoNumber = (a, b) => {
return a - b;
}

console.log(subtractTwoNumber(2,6))
*/

//23.	Find max of 3 numbers

/*
//solution 1
let numbersArray = [56, 8, 6];

let maxNum;

function findMaxNum(x, y, z) {
  console.log(x, y, z);
  if (x > y && x > z) {
      maxNum = x;
    } else if (y > x && y > z) {
    maxNum = y;
  } else {
    maxNum = z;
}
}

findMaxNum(...numbersArray);

console.log(maxNum);
*/

/*
//solution 2
let numbersArray = [56, 8, 6, 102, 4];

function findMaxNum(...numbers) {
  return Math.max(...numbers);
}

let maxNum = findMaxNum(...numbersArray);

console.log(maxNum);
*/

//24.	Check even/odd
/*
let evenNum = [], oddNum = [];

function evenCheck() {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      evenNum.push(i);
    }
  }
}

function oddCheck() {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
      oddNum.push(i);
    }
  }
}

evenCheck()
oddCheck()

console.log(evenNum, oddNum);
*/

// 25.	Temperature converter
/*
let fahrenheitToCelsius = (fc) => {
  return `${Number(((fc - 32) * 5) / 9).toFixed(2)}`;
};

let celsiusToFahrenheit = (cf) => {
  return `${Number((cf * 9) / 5 + 32).toFixed(2)}`;
};

let kelvinToCelsius = (kc) => {
  return `${Number(kc - 273.15).toFixed(2)}`;
};

let celsiusToKelvin = (ck) => {
  return `${Number(ck + 273.15).toFixed(2)}`;
};

let kelvinToFahrenheit = (kf) => {
  return `${Number(((kf - 273.15) * 9) / 5 + 32).toFixed(2)}`;
};

celsiusToFahrenheit(4);

kelvinToCelsius(4);

celsiusToKelvin(4);

kelvinToFahrenheit(4);

console.log(`fahrenheitToCelsius = ${fahrenheitToCelsius(4)},
celsiusToFahrenheit = ${celsiusToFahrenheit(4)},
kelvinToCelsius = ${kelvinToCelsius(4)},
celsiusToKelvin = ${celsiusToKelvin(4)},
kelvinToFahrenheit = ${kelvinToFahrenheit(4)}`);
*/

// 26.	Simple interest calculator

//formula
//Simple Interest=(Principle*Rate*Tenure)/100
/*
let simpleInterest = (p, r, t) => {
  return (p * r * t) / 12 / 100;
};

simpleInterest(10000, 5, 24);
console.log(simpleInterest(10000, 5, 2));
*/