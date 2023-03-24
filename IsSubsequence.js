function isSubsequence(str1, str2) {
    let shorterString
    let longerString

    if (str1.length > str2.length) {
        longerString = str1
        shorterString = str2
}
    else {
        longerString = str2
        shorterString = str1
    }

    
}

console.log(isSubsequence("abcd", "abcdef"))



// What are we trying to do?
// We want to check if str1 appears somewhere in str2 in the 
// correct order
// If it does, it should return true, otherwise return false

// Pseudocode: We want to make sure that all of str1 is inside of str2
// One challenge is making sure that true is not returned before all of
// str1 is checked; Using a subtraction method would probably work best - 
// meaning whichever string is longer should have letters removed until the other
// string is found