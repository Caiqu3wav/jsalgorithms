function fibonacci(max) {
    let fN = [0, 1];
    let sum = 0;
    
  for(; fN[1] < max; fN = [fN[1], fN[0] + fN[1]]) fN[1] % 2 === 0 && (sum += fN[1]);
    
    return sum;
  }