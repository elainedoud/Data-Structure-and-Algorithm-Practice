function insertSort(arr){
    for (let i=1; i < arr.length; i++) {
        let currentValue = arr[i]
        let j
        for (j=i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j]
            }
            arr[j+1] = currentValue
        }
        return arr;

    }

    


console.log(insertSort([9, 3, 1, 5, 4]))

// we want to create a function for swap that can be used
// We want to compare index[1] to index[0]; if it's less than index[0] they need to switch places
// Then we move onto index[2] and compare it to both index[0] and index[1] & move it to the correct place
// We do this for the entire array