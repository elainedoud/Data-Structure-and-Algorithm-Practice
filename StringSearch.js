function stringSearch(str1, str2){
    let count = 0
    for (let i=0; i<str1.length; i++){
        for (let j=0; j<str2.length; j++){
            if (str2[j] !== str1[i + j]){
                break
            }
            if (j === str2.length - 1){
                count++
            }
    }
}
    return count
}

function stringSearchFirstAttempt(str1, str2){

    let z = 0

    for (i = 0; i < str1.length; i++){
        str1_num = str1[i];
        for (j = 0; j < str2.length; j++){
            str2_num = str2[j];
            if (str1_num === str2_num){
                z++ 
                j++
            }
            else {
                i++
            }
    }

}
        return z
}


console.log(stringSearch('reibadnxoyebadein', 'bad'))
console.log(stringSearch('mazyamama', 'ma'))
console.log(stringSearch('lorie loled', 'lol'))

//For above exapmle, we want it to return 2

//Loop over the longer string
// Loop over the shorter string
// If the characters don’t match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

// Planning: 1. Looping over presumably means incrementing and assiging a value to an integer
// We will want to do this over each string
// 2. Then we want to compare these to each other
// Break resets j to 0, but the outer loop (i) keeps going & incrementing