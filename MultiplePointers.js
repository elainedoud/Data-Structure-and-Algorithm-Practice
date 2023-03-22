let n = []

function areThereDuplicates(n) {
    

    const checker = {}

    for (let i = 0; i < n.length; i++) {
        let letter = n[i]
        checker[letter] ? checker[letter] += 1: checker[letter] = 1;
        console.log(checker)
}
        console.log(n)

}    

areThereDuplicates('a','p','p','l','e')



// Goal: Implement function that accepts a variable number of arguments
// and checks whether there are any duplicates among the arguments passed in

// What are we trying to do?  If (1, 2, 3) is the input, than the answer is
// false.  If the input is (1, 2, 2) OR if the input is (a, b, c, a) then the
// answer is true

// I don't think n is accepting a bunch of arguments