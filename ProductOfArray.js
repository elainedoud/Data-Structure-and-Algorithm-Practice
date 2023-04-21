function productOfArray(arr){

    if (arr.length === 0) return 1

    let num = arr[0]
    let our_array = arr.slice(1)

    return num * productOfArray(our_array)

}

console.log(productOfArray([1, 2, 3, 4, 5]))

//Write a function called productOfArray 
// which takes in an array of numbers and returns the product of them all.