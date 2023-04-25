function reverse (str){

    if (str.length <= 1) return str;

    return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));

}
console.log(reverse('abc'))
//str.charAt(1) will return the first character in the string
//str.substring(0, str.length - 1) will remove the last character from the string
// Since we're doing this recursively, the string keeps getting smaller, eventually exiting the function



function second_reverse (str){
    if (str === " ")
    return " ";
    
    else
        return reverse(str.substr(1)) + str.charAt(0)

}



function first_reverse(str){
 
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
        
        return reverse(second_str)
    }
    else {

    return new_str

    }

}



// Write a recursive function which accepts a string and returns a new string in reverse

// If string length is 1 or less, we will just want to return the str
// Create a new string; Can we have first letter of beginning of string added to new string?
// I think combining arrays, pop, and push is a way to do this

// Starting over...

// Exceeded call stack; need to more deliberately end the recursion
// I think the str in the recursive function needs to be changed; just not sure how to best do that

//Good news! No longer maxing out the call stack.  However, now it is only returning "c"

// Why are both letter and second_str doing the same thing?  Need a way to obtain the string without the letter - 
// and then have this new string called in the recursive function
// first_reverse function is not working