function sameFrequency(x, y) {

    let strNum1 = x.toString()
    let strNum2 = y.toString()

    const forX = {}
    const forY = {}

    for (let i = 0; i < strNum1.length; i++) {
        forX[strNum1[i]] = (forX[strNum1[i]] || 0) + 1
    }

    for (let j = 0; j < strNum2.length; j++) {
        forY[strNum2[j]] = (forY[strNum2[j]] || 0) + 1
    }

    for (let key in forX) {
        if (forX[key] === forY[key])
            return true
    
    else 
        return false

}
}

console.log(sameFrequency(880,880))

// Use frequency counter pattern to determine if x and y have the 
// same frequency of digits
// Basically will want to create two objects; one object for x 
// and one object for y
// Then iterate over each x to put the frequency of digits into 
// x's object and do the same thing for y
// Then compare them; if equal then return true; if unequal then return false
//Troubleshooting; why is it returning undefined? - Because I did not put x or y in 
// their respective objects
// Still not working - why is it only returning false? - Typo in second for loop