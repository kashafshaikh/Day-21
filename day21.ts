
// Day 21

// ### Question 1: Sum of Digits
// *Problem:*  
// Write a function sumOfDigits that takes a number as input and returns the sum of its digits.

// *Example:*  
// typescript
// sumOfDigits(123); // Output: 6 (1 + 2 + 3)
// sumOfDigits(4567); // Output: 22 (4 + 5 + 6 + 7)


// *Hint:*  
// You can convert the number to a string, split it into individual digits, and then sum them up.

// ---
function sumOfDigits(num: number):number{
    let sum = 0;

    const digits = num.toString().split("");   // ["1", "2", "3"] 

    for(let i=0; i<digits.length; i++){
        sum += parseInt(digits[i]);
    }
    return sum
}

console.log(sumOfDigits(123)); // Output: 6
console.log(sumOfDigits(4567)); // Output: 22

// ### Question 2: Count Consonants in a String
// *Problem:*  
// Write a function countConsonants that takes a string as input and returns the number of consonants in the string. Consonants are all alphabetical characters except a, e, i, o, u (both lowercase and uppercase).

// *Example:*  
// typescript
// countConsonants("hello"); // Output: 3
// countConsonants("TypeScript"); // Output: 7


// *Hint:*  
// Loop through the string and check each character to see if it is a consonant by excluding vowels.

function countConsonants(str:string):number{
    let count = 0;
    let vowels = "aeiouAEIOU";

    for(let i=0; i<str.length; i++){
        const char = str[i];

    if(/[a-zA-Z]/.test(char) && !vowels.includes(char)){
        count++
      }
    }
    return count
}

console.log(countConsonants("hello")); // Output: 3
console.log(countConsonants("TypeScript")); // Output: 8











