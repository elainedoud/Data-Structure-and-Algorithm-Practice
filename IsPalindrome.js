function isPalindrome(str){

    if (str.length <= 1 ){
        if (str === new_str){
            return true;
        }
        else {
            return false;
        }
    }

    function new_str(str){
        return new_str = str.charAt(str.length - 1) + isPalindrome(str.substring(0, str.length - 1))
    }

}

console.log(isPalindrome('lool'))

// Was not able to get this one to work

// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome 
// (reads the same forward and backward). Otherwise it returns false.

// Attempting to combine function from Reverse.js with determing if the new string and old string are identical
// First attempt: It is returning "lofalse" :(
// Changed str.charAt(str.length - 1) to str.charAt(str.length); good news it is now returning just one
// word (false); bad news is that lol should be returning true.
// The portion of the function str === newstr is not working as expected; this is where the error is from
// Ok - We were able to successfully get the reverse string to appear without maxing out the stack,
// so that section of the function seems to be working

// Issue is how can we return new_str (triggering the recusion) while also returing true or false?
// Do we need to put two functions inside each other and then use recursion?
// Can we get truth to return; rather than undefined?  If yes, I'll go back in and add the 
// correct logic for both true and false