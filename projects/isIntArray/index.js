function isIntArray(arr) {
    if (arr.length === 0) {
      return true;
    }
    
    for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i])) {
        return false;
    }
    }
      return true;
  }

  console.log(isIntArray([1, 2, 3, NaN]));