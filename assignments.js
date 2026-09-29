
/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let obj={}
    for(let i=0;i<transactions.length;i++)
    {
     let category = transactions[i].category
     let price = transactions[i].price
     obj[category]= (obj[category] || 0) + price
    }
    let result = [];

    for (let category in obj) {
        result.push({
            category: category,
            totalSpent: obj[category]
        });
    }
  return [];
}
/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max=numbers[0]
    for(let i=0;i<numbers.length;i++)
    {
        if(numbers[i]>max)
        {
            max=numbers[i]
        }
    }
    return max
}

module.exports = findLargestElement;

/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count = 0
    for(let i=0;i<str.length;i++)
    {
      if (
            str[i] === 'a' || str[i] === 'A' ||
            str[i] === 'e' || str[i] === 'E' ||
            str[i] === 'i' || str[i] === 'I' ||
            str[i] === 'o' || str[i] === 'O' ||
            str[i] === 'u' || str[i] === 'U'
        ) 
        {
          count ++;
        }
    }
    return count
}
console.log(countVowels("weghsuha"))
module.exports = countVowels;

/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum = 0
    let starttime= Date.now();
    for(let i=0;i<n;i++)
    {
        sum +=i
    }
    let endtime = Date.now();
    return (starttime-endtime) / 1000;
}
console.log(calculateTime(100000000))
console.log(calculateTime(100))
console.log(calculateTime(100000))
/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str2= ""
  for(let i=str.length-1;i>=0;i--)
  {
   str2= str2 + str[i]
  }
 if(str2===str){
  return true;
}
  return false
}
console.log(isPalindrome("madan"))
module.exports = isPalindrome;

// 2nd way using two pointers
function isPalindromes(str)
{
  left = 0;
  right = str.length-1
 while(left < right)
 {
  if(str[left]!==str[right])
  {
    return false
  }
  left++;
  right--;
 }
 return true
}
