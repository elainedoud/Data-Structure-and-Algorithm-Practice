function power(num, exp){

    if (exp === 0) return 1;

    if (exp === 1) return num;

    if (exp > 1){
        return num * power(num, exp - 1)
    }
}

console.log(power(2, 0))


// Write a function called power which accepts a base and an exponent. 
// The function should return the power of the base to the exponent. 
//This function should mimic the functionality of Math.pow()  
// - do not worry about negative bases and exponents.

// What do we need to do? - Use Recursion, make sure there is a base case with return
// What does Math.pow() do? It return the value that equals the base raised to the exponent
// number.  
// Ok - we want to multiply num by itself accoring to the amount of times specified by the exponent

// Let's start with 2 to 3rd power to try to make this as easy as possible
// Currently returning NaN (but at least not creating Overflow Stack)
// Forgot to include both num and exp -1 in the recursive function.  
// A number is now being returned (16) - yeah! - Now just have to figure how to finagle this to 
// get the correct number
// Ok, 0 just had to be changed to 1 - I think it's working now