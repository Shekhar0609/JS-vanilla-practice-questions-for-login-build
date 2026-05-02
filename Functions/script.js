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