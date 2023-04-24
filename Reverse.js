function reverse(str){
 
    if (str.length === 1) return str

    let new_str = []

    const split_string = str.split('')

    let letter = split_string[str.length - 1]

    let second_str = split_string.pop()
    let str2 = split_string.toString()
    console.log(second_str)
    console.log(split_string)

    let newish_str = new_str.push(letter)

    if (split_string.length > 0) {
        
        return reverse(str2)
    }
    else {

    return new_str

    }

}

console.log(reverse('abc'))

// Write a recursive function which accepts a string and returns a new string in reverse

// If string length is 1 or less, we will just want to return the str
// Create a new string; Can we have first letter of beginning of string added to new string?
// I think combining arrays, pop, and push is a way to do this

// Exceeded call stack; need to more deliberately end the recursion
// I think the str in the recursive function needs to be changed; just not sure how to best do that

//Good news! No longer maxing out the call stack.  However, now it is only returning "c"

// Why are both letter and second_str doing the same thing?  Need a way to obtain the string without the letter - 
// and then have this new string called in the recursive function