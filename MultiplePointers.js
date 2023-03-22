function areThereDuplicates(...n) {
    

    const checker = {}

    for (let i = 0; i < n.length; i++) {
        let letter = n[i]
        checker[letter] ? checker[letter] += 1: checker[letter] = 1;
}

    for (let j = 0; j < n.length; j++) {
        let letter = n[j]
        if (checker[letter] > 1) return true
    }

    return false

}    



// Goal: Implement function that accepts a variable number of arguments
// and checks whether there are any duplicates among the arguments passed in

// What are we trying to do?  If (1, 2, 3) is the input, than the answer is
// false.  If the input is (1, 2, 2) OR if the input is (a, b, c, a) then the
// answer is true

// Now that both n and checker are working, we need to check checker for duplicates
// Check to see how to determine if an item is in an object
// Need to iterate through n by letter/number, than if letter/number is two or 
// more in checker, need to return true