function bubblesort(arr){
    let noSwaps;
    for (let i = arr.length - 1; i >= 0; i--){
        noSwaps = true;
        for (let j = 0; j <= arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]){
                swap(arr, j, j + 1);
                noSwaps = false;
        }
    }
    if (noSwaps) break;
}
    return arr
}

function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp; 
}

console.log(bubblesort([8, 5, 6, 8, 10]))

// Goal is to return the sorted array