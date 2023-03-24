function averagePair(arr, x){

    
    let i = 0;
    let j = arr.length - 1;

while (i < j) {
    let avg = (arr[i] + arr[j])/2
    if (avg === x){
        return true
    }
    else if (avg < x) i++;
    else {
        break
    }
    return false
}
}

console.log(averagePair([1,2,4,6], 3))


// What are we needing to complete?  We want two numbers in the array 
// to be combined and if they equal the target number (x), then they will
// return true.  If none of the numbers added equal the target, then 
// return false.

// Pseudo coding:  We have an array, and in this array we want to be able
// to slide down the array
// So, we want i to go 0, 1, 2, 3, ect - until it finds 
// a sum that leads to the avg or hits the end of the array
// If the end of the array is hit, then the second number, which was
// previously arr[0], needs to be moved to arr[1], and we need to do it again
// To do this, I think we can make j the second number and nest it within the for 
// loop

// Let's see if this works; if not - go step by step and console log each piece