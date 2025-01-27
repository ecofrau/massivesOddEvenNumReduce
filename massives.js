// Given array of numbers
const numbers = [-3, 16, 8, -34, 65, 120, 42, 15, 7, -4, -7, 3, 46, 26, 83];

// Function to sort in ascending order
function asc(a, b) {
  return a - b;
}

// 1. Print all single-digit positive numbers in ascending order
const singleDigitPositives = numbers.filter((num) => num > 0 && num < 10);
singleDigitPositives.sort(asc);
console.log(
  "Single-digit positive numbers in ascending order:",
  singleDigitPositives
);

// 2. Print numbers from the array that are greater than or equal to 15
console.log("Numbers greater than or equal to 15:");
for (let num of numbers) {
  if (num >= 15) {
    console.log(num);
  }
}

// 3. Print only the odd numbers from the array
console.log("Odd numbers in the array:");
for (let num of numbers) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}

// 4. Print values from the array whose indices are multiples of three
console.log("Values at indices that are multiples of three:");
for (let i = 0; i < numbers.length; i++) {
  if (i % 3 === 0) {
    console.log(numbers[i]);
  }
}

// 5. Calculate and print the sum of odd numbers in the array
const oddSum = numbers.reduce((sum, num) => {
  return sum + (num % 2 !== 0 ? num : 0);
}, 0);
console.log("Sum of odd numbers:", oddSum);

// 6. Calculate the difference between the sum of even and odd numbers
const evenSum = numbers.reduce((sum, num) => {
  return sum + (num % 2 === 0 ? num : 0);
}, 0);
const difference = Math.abs(evenSum - oddSum);
console.log("Difference between the sum of even and odd numbers:", difference);
