function binarySearch(sarray, num) {

    let x = 0
    let y = sarray.length - 1
    let z = Math.floor((x + y)/2)

    while (sarray[z] !== num && x <= y){
        if (sarray[z] < num) {
            x = z + 1
        }
        else {
            y = z -1
    }
     z = Math.floor((x + y)/2)
}
    return sarray[z] === num ? z : -1

}

console.log(binarySearch([1, 2 ,3, 5, 7], 3))