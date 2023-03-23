function averagePair(arr, x){

    let j

    for (let i = 0; j == arr.length -1 ; i < j){
        let avg = (arr[i] + arr[j])/2
        if (avg === x){
            return true;
        } else if (avg < x){
            i++;
    }   else  {
        j--;
    }
    console.log(i)
    }
}

console.log(averagePair([1,2,4,6], 9))


// What are we needing to complete?  We want two numbers in the array 
// to be combined and if they equal the target number (x), then they will
// return true.  If none of the numbers added equal the target, then 
// return false.

// Pseudo coding:  Need to have window #1 be first number in array
// Then window #2 needs to iterate over all the other elements in array
// If nothing is still found, window #1 should move one space up

// I think I'm missing the "Sliding Window Pattern"; need to figure out how to
// incorporate this pattern