function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function pivot(arr, start=0, end=arr.length + 1){
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]){
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex;
}

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))
