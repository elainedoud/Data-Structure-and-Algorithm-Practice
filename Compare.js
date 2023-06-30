function compare(a, b) {
    return a - b;
}

let ournumbers = [3, 7, 1, 0, 5, 2]

console.log(ournumbers.sort(compare));

//This will return the numbers sorted lowest to highest [0, 1, 2, 3, 5, 7]
//Doing return b - a in compare function will return the numbers
// highest to lowest 
