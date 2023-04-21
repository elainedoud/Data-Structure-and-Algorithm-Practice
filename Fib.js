function fib(n){
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n -2);
}

  console.log(fib(8))


  // Instructions: Write a recursive function called fib which accepts a number and returns the nth number in the 
  // Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
  // which starts with 1 and 1, 
  // and where every number thereafter is equal to the sum of the previous two numbers.

  // Planning: So, if we were to enter 8, it would return 21 because of the Fibonacci sequence
  // 1, 1, 2, 3, 5, 8, 13, 21, 34
  // So, working backwards, 

  // With first iteration, it's just returning whatever number we enter
  // Now everything is going way too high; 10 is returning 19958400
  // This is just adding numbers in a backwards sequence
  // Can we create the fibonacci sequence in an array and then pull the item from the correct position?

  // Let's put aside the recursion for a moment; in perfect scenario, what would we like to see
            // If input is 6; x = 1 y = 1 and x + y = z (2); then we want to do y + z = (3), then 
            // We basically want to do x + y = z for six times
  // I think we're really close with the structure; I think the key is determining what to do with n during
  // the recusion to make sure this works