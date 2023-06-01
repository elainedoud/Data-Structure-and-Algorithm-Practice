function radixSort(nums){
    let maxDigitCount = mostDigits(nums)
    for (let k= 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i= 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}


function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(getDigit(875, 2))

// i is the space of the number
// 0 is the 1 column, 1 is the tens, 2 is the hundreds, ect.

function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums){
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}