//1.	Print 1–100

/*
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
*/

/*
let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}
*/

/*
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 100);
*/

//2.	Print 100–1

/*
for (let i = 100; i >= 1; i--) {
  console.log(i);
}
*/

/*
let i = 100;
while (i >= 1) {
  console.log(i);
  i--;
}
*/

/*
let i = 100;
do {
  console.log(i);
  i--;
} while (i >= 1);
*/

//3.	Print even numbers 1–100
//4.	Print odd numbers
/*
let odd = [];
let even = [];

console.log(odd, even);

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    even.push(i);
  } else {
    odd.push(i);
  }
}
console.log(odd, even);
*/

/*
let i = 1;

while (i <= 100) {
  if (i % 2 === 0) {
    even.push(i);
  } else {
    odd.push(i);
  }
  i++;
}
console.log(odd, even);
*/

//5.	Sum of 1–100

/*
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
*/

/*
let i = 1;
while (i <= 100) {
  sum += i;
  i++;
}
console.log(sum);
*/

//6.	Factorial of a number

/*
let factorial = 1;
let num = Number(prompt("please enter factorial number."));

for (let i = num; i >= 1; i--) {
  factorial = num === 1 ? factorial : (factorial *= i);
}
console.log(factorial);
*/

//7.	Check prime number

/*
let number = 6;
let isPrime = true;

if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < number; i++) {
    if (i % number === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(number + " is a Prime Number.");
} else {
  console.log(number + " is not a Prime Number.");
}
*/

//8.	Print prime numbers between 1–100
/*
let numArray = [];

for (let i = 1; i <= 100; i++) {
  numArray.push(i);
}

console.log(numArray);

for (let j = 0; j < numArray.length; j++) {
  let isPrime = true;
  let currentNum = numArray[j];

  if (currentNum <= 1) {
    isPrime = false;
  } else {
    for (let k = 2; k < currentNum; k++) {
      if (currentNum % k === 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    console.log(currentNum + " is a Prime Number.");
  } else {
    console.log(currentNum + " is not a Prime Number.");
  }
}
*/