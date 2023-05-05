function selectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j=i+1; j < arr.length; j++) {
            if (arr[min] > arr[j]){
                min = j;
            }
    } if (i !== min){
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

}
return arr;
}



function selectionSortFirstAttempt(arr){
    let min = arr[0]
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
            swap(arr, min, arr[i])
            arr.pop(arr[i])
        }
    }
    return arr;
}

function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp; 
}

console.log(selectionSort([7, 4, 5, 2, 9, 1]))