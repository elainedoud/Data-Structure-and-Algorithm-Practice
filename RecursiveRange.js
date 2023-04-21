function recursiveRange(num){
    if (num === 1) return 1;

    return num + recursiveRange(num -1)

}

console.log(recursiveRange(3))

// Write a function called recursiveRange which accepts a number and adds up 
// all the numbers from 0 to the number passed to the function 

// Planning; So if num = 3, we want our function to return 3 + 2 + 1 + 0, so 6