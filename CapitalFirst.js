function capitalizeFirst (arr){
    let newArr

    if (arr.length < 1){
        return newArr
    }
    else {
        newArr = arr[arr.length - 1]
    }
}

console.log(capitalizeFirst(['happy', 'sad', 'bad']))

// Write a recursive function called capitalizeFirst.
//  Given an array of strings, capitalize the first letter of each string in the array.

// Planning: Using recursion to go through each string in the array [2], [1], [0]
// Use recursion again to with charAt() and toUpperCase() to make the first letter capitalized