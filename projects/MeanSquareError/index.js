var solution = function(firstArray, secondArray) {
    let len = firstArray.length;
if (len !== secondArray.length) {
  console.log("Array gotta have same length");
  return;
}

let sqrs = [];

for(let i = 0; i < len; i++) {
  sqrs.push(Math.pow((firstArray[i] - secondArray[i]), 2));
}

return sqrs.reduce((acc, i) => acc + i, 0) / len;  
}