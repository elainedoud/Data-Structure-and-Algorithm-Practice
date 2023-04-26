






function fibonacci(y){
    if (y <= 2) return 1;
    return fibonacci(y - 1) + fibonacci(y -2);
}

  console.log(fibonacci(9))

  
  
  
  //Fibonacci sequence is 1, 1, 2, 3, 5, 8, 13, 21, 34





  function countDownToSummer (x){
    if (x < 1) return 0;
    console.log(x)
    return countDownToSummer(x - 1)
}

console.log(countDownToSummer(56))




