function countOccurrences(obj, value) {
    let count = 0;
    
    // Iterate over the values of the object
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === value) {
        count++;
      }
    }
    
    return count;
  }
  
  // Example usage
  const myObject = {
    key1: 'apple',
    key2: 'banana',
    key3: 'apple',
    key4: 'orange',
    key5: 'apple',
    key6: 'plum',
    key7: 'plum',
    key8: 'plum',
    key9: 'plum',
  };
  
  const valueToCount = 'plum';
  const occurrences = countOccurrences(myObject, valueToCount);
  
  console.log(`The value '${valueToCount}' occurs ${occurrences} times in the object.`);

  //Above example I got offline
  //The method hasOwnProperty is a method to be used on an object that returns a boolean
  // (true or falsse) if key is found in the Object

  function keyTest(obj){

    for (let key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === '7'){
        return true;
  }
}
    return false;
}

  const cardDeck = {ones:'4', twos:'4', jack:'1', three:'3'};

  console.log(keyTest(cardDeck))

  function letsCount(obj, value){
    let count = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === value){
            count++;
        }
    }
    return count;
  }

  console.log(letsCount(cardDeck, '4'));