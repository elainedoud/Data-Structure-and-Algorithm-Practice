//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//An input string is valid if:

//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type.

function isValid(s){
    let origarr = s.split('');
    let origlength = origarr.length;
    if(origlength % 2 !== 0){
        return false;
    }

    for (let i = 0; i < origlength; i){
        if (origarr[i] === 
    }
  
}

console.log(isValid('()()'))

//If the input string has (, {, or [ - it must have the corresponding brackets 
// to be true

//Therefore, an odd number of characters will automatically be true (X)
//We can also change the string into an array
//We can check through array to see if there are matching elements
               // Determining the matching elements may be the most difficult
               // part, because they need to be opposite
//Items that match should be pushed to a new array
//Then true will only be returned if the original array is empty