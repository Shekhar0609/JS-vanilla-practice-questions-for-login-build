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

// 9.	Reverse a number
/*
let num=54321;
let revNum=Number(num.toString().split('').reverse().join(''))

console.log(revNum)
*/

//10.	Count digits
/*
let num = 23345;
let splitNum = num.toString().split("");
let count = 0;

for (let i = 0; i < splitNum.length; i++) {
  count++;
}

console.log(splitNum, count);
*/

//11.	Sum of digits
/*
let num = 12345;
let splitNum = num.toString().split("");
let sumDigit = 0;

for (let i = 0; i <= splitNum.length; i++) {
  sumDigit+=i;
}

console.log(splitNum, sumDigit);
*/

//12.	Check palindrome number
/*
let num=121;
let revNum = Number(num.toString().split("").reverse().join(''));

if(num===revNum) {
 console.log(`${num} is the palindrome number`)
} else {
console.log(`${num} is not an palindrome number`)
}

console.log(num, revNum);
*/

//13.	Armstrong number
/*
let num = 548834;
let revNum = num.toString().split("");
let powerof = revNum.length;
let armstrongNum = 0;

for (let i = 0; i < revNum.length; i++) {
  armstrongNum += Number(revNum[i]) ** powerof;
  console.log(Number(revNum[i]) ** powerof);
}

if (num === armstrongNum) {
  console.log(`${num} is the Armstrong number`);
} else {
  console.log(`${num} is not an Armstrong number`);
}

console.log(num, revNum, powerof, armstrongNum);
*/

//14.	Swap two numbers (without temp)
/*
let a = 10,
  b = 14;

[a, b] = [b, a];

console.log(a, b);
*/

//15.	Find Greatest Common Divisor (GCD)

/*
let firstNum = 234,
  secondNum = 5698,
  devidasableValues = [],
  devidasableValues2 = [],
  nonDevidasableValues = [],
  nonDevidasableValues2 = [];

for (let i = 0; i <= firstNum; i++) {
  console.log(i);
  firstNum % i === 0 ? devidasableValues.push(i) : nonDevidasableValues.push(i);
}

for (let j = 0; j <= secondNum; j++) {
  console.log(j);
  secondNum % j === 0
    ? devidasableValues2.push(j)
    : nonDevidasableValues2.push(j);
}

console.log(devidasableValues, nonDevidasableValues);
console.log(devidasableValues2, nonDevidasableValues2);

let combinedDevisableValues = devidasableValues.concat(devidasableValues2);

let duplicateValues = [];

console.log(combinedDevisableValues);

for (let k = 0; k < combinedDevisableValues.length; k++) {
  for (let d = k + 1; d < combinedDevisableValues.length; d++) {
    if (
      combinedDevisableValues[k] === combinedDevisableValues[d] &&
      !duplicateValues.includes(combinedDevisableValues[k])
    ) {
      duplicateValues.push(combinedDevisableValues[k]);
    }
  }
}

console.log(duplicateValues);
let GCD = duplicateValues[0];

for (let g = 0; g < duplicateValues.length; g++) {
  if (duplicateValues[g] > GCD) {
    GCD = duplicateValues[g];
  }
}

console.log(GCD);
*/

// 16.	Find LCM

// formula of LCM(a,b)=(a*b)/GCD(a,b)

/*
let multiplyNum = firstNum * secondNum
let previousAnsGCD = GCD

let LCM = multiplyNum/previousAnsGCD

console.log(LCM)
*/

// 17.	Power of number

/*
let a = 2
let powerOf = -3

let result = a**powerOf

console.log(result)
*/

// 18.	Print multiplication table
/*
let size = 10;

for (let i = 1; i <= size; i++) {
  let row = "";
  for (let j = 1; j <= size; j++) {
    row += (i * j).toString().padStart(4);
  }
}

console.log(row);
*/

//19.	Count even & odd digits
/*
let even = [];
let odd = [];

let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= 89; i++) {
  if (i % 2 === 0) {
    even.push(i);
    evenCount++;
  } else {
    odd.push(i);
    oddCount++;
  }
}

console.log(even, odd, evenCount, oddCount);
*/



// 20.	Check perfect number


let num = 6
let sum = 0
let divisors =[]

for (let i=1; i<num; i++){
if(num%i===0){
divisors.push(i)
sum+=i
console.log(i)
}
}

console.log(divisors, sum)


if(sum === num){
console.log(`${num} is a Perfect Number!`);
console.log("Divisors:", divisors.join(" + "), "=", sum);
} else {
console.log(`${num} is not a perfect number.`);
}










