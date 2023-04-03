function maxSubarraySum(arr, n){

    if (arr.length < n) return null;

  let max = 0
  let sum = 0

  for (let i = 0; i < n; i++){
    sum += arr[i]
    max = sum
  }

  for (let i = n; i < arr.length; i++){
    sum += arr[i] - arr[i -n];
        max = Math.max(max, sum);
  }
  return max;

}


// Prompt: Given an array of integers and a number, write a function called maxSubarraySum, 
// which finds the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array. 
// In the first example below, [100, 200, 300] is a subarray of the original array, 
//but [100, 300] is not.

// Example: ([100, 200, 300, 400], 2) will return // 700