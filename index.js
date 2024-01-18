function hasTargetSum(nums, target) {
  let currentIndex = nums.length - 1;

  // While loop to iterate through the array in reverse
  while (currentIndex >= 0) {

    // For loop to iterate through the array
    for (let i = 0; i < nums.length; i++) {
      let currentSum;

      // Ensure we don't add the same element to itself
      if (currentIndex !== i) {
        currentSum = nums[currentIndex] + nums[i];
        console.log(currentSum);
      }

      // Check if the sum equals the target
      if (currentSum === target) {
        return true;
      }
    }

    currentIndex--;
  }

  return false;
}

console.log(hasTargetSum([1000, 100, 10, 1], 3));

/* 
  Write the Big O time complexity of your function here
  While Loop: O(n)
  For Loop: O(n)
  Sum Calculation: O(1)
  If Statement: O(1)
  Total = O(2n^2)

  Big O = O(n^2)

  Space Complexity
  currentIndex = O(1)
  i = O(1)
  currentSum = O(1)
  Total = O(1)
*/

/* 
  Add your pseudocode here
  I need the function to have a for loop to the n of the index. 
  Each time it adds the last number to the rest until the end. 
  I iterate again with a while loop to use the rest of the numbers as constants.
*/

/*
  Add a written explanation of your solution here
  The function aims to find two numbers in an array whose sum equals the target value.
  It uses a while loop to iterate through the array in reverse, and within that, a for loop to iterate through the array.
  It calculates the sum of the current pair of numbers and checks if it equals the target value.
  The function returns true if a pair is found; otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
