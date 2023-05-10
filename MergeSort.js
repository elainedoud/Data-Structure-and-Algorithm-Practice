function mergingArrays(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while (j <arr2.length){
        result.push(arr2[j]);
        j++;
    }

   return result;
}

function mergeSort(arr){
    if (arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2);
    let first_half = mergeSort(arr.slice(0, middle));
    let second_half = mergeSort(arr.slice(middle));
    return mergingArrays(first_half, second_half)
}

console.log(mergeSort([2, 9, 5, 7, 3, 8, 1, 4]));


function mergeSortMyAttepmt(arr){

    const middle = Math.floor(arr.length / 2);
    const first_half = arr.slice(0, middle);
    const second_half = arr.slice(middle);
    //Use recursion to break each array down until each array is only 1 element or less
    if (arr.length <= 1) return arr;
    
    if (arr.length > 1){
        return mergeSort(first_half);
    }

    if (arr.length > 1){
        return mergeSort(second_half);
    }

    mergingArrays(first_half, second_half);

}