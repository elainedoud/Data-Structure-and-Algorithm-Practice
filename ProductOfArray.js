function productOfArray(arr){

    let num = 1

    if (arr === []) return 1

    if (arr !== []){
        return arr[num] * productOfArray(arr.slice[num +1])
    }

}

console.log(productOfArray([1, 2, 3, 4, 5]))

//Write a function called productOfArray 
// which takes in an array of numbers and returns the product of them all.


// Planning - Will want to take the first item of the array [0] and assign it to a variable
// Then, using recursion, multiply that by productOfArray, but this time do array [1] - until we get
// to the end of the array
// What is our base case?
// How do we get to each part of the array?
// Why is it returning NaN?