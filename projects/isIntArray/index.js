function isIntArray(arr) {
    if (arr.length === 0) {
      return true;
    }
    
    for (let number of arr) {
      if(!Number.isInteger(number) || number == NaN){
        return false;
        console.log(number);
      }
      console.log(number);
    return true;
    }
  }
  
    console.log(isIntArray([1, 2, 3, NaN]))