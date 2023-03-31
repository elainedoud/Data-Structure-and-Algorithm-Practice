function maxSubarraySum(arr, x){
    i = 0 
    j = 1
let group1 = arr[i] + arr[i +1]
let group2 = arr[j] + arr[j + 1]

    if (group1 > group2){
        j++
    }
    else if (group1 < group2){
        i = i + 2
    }

}
// Prompt: Given an array of integers and a number, write a function called maxSubarraySum, 
// which finds the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array. 
// In the first example below, [100, 200, 300] is a subarray of the original array, 
//but [100, 300] is not.

// Example: ([100, 200, 300, 400], 2) will return // 700

// What we need to do is:
//          Determine what x is
//          Compare sums of the array to each other
//          For example, for the above array, we would want to compare 100 + 200 to 300 + 400
//          We need two groups of arrays at a time, whichever group is smaller will need to 
//          slide to the next values in line
//          Once the highest value that can be obtained is determined, we need to return that value

// Let's start backwards; let's assume x is 2; let's create two groups & see if we can get their sum to 
// appear correctly
// Ok, that's working. Now, can we incorporate the slide?

console.log(maxSubarraySum([1,5,7,2,-1,0], 2))