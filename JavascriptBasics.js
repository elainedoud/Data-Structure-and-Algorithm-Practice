function isThisSwitch(expression){

    switch(expression){
        case "happy":
            return ("That's great!");
         break;
        case "sad":
            return ("I'm sorry");
         break;
        default:
            return ("Hello");
}
}

//console.log(isThisSwitch("happy"));
// It's working; switch syntax is an alternative to if/else statements

function thisIsPop(arr){
let our_array = arr;
return our_array.pop();
}
//console.log(thisIsPop(["nap", "hat", "cat"]));
//Pop takes the last element of array and returns it;
// Pop mutates the array

function thisIsPush(arr){
    let our_array = arr;
    let new_array = our_array.push("bat");
    return our_array;
}
//console.log(thisIsPush(["nap", "hat", "cat"]))

// Push mutates the original array; if you ask for array to be returned it will have the 
// new elements on the end of it

function thisIsSearch(mystring){
    return mystring.search('a')
}

//console.log(thisIsSearch('happy'))
//Search will search for an element in a string and return the index of it.  For example, a is
// 1 because it is the second letter of the string

const myString = "Am I doing this right?"

const firstString = myString.split('?')
//console.log(firstString)

const secondString = myString.split('')
//console.log(secondString)

const revisedString = secondString.join('')
//console.log(revisedString)

function usingSplit(){
const normUrl = input.split("?");
const normParams = normUrl[1].split("&");
const sortedParams = normParams.sort()
return `${normUrl[0]}?${sortedParams.join(",")}`
}

Math.min(2, 6, 1, 5) //Will return the lowest number
Math.max(2, 6, 1, 5) //Will return the largest number
