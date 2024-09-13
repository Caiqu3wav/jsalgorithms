Array.prototype.square = function() { return this.map(num => num ** 2); };
Array.prototype.cube = function() { return this.map(num => num ** 3); };
Array.prototype.sum = function() { return this.reduce()((acc, num) => acc + num, 0); };
Array.prototype.average = function() { return this.length === 0 ? NaN : this.sum() / this.length; };
Array.prototype.even = function() { return this.filter(num => num  % 2 === 0); };
Array.prototype.odd = function() { return this.filter(num => num  % 2 !== 0); };

function cube(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i] * nums[i] * nums[i])
    }

    return result;
}


function average(nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return sum / nums.length;
}

function cube(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i] * nums[i] * nums[i])
    }

    return result;
}


function sum(nums) {
     let sum = 0;

     for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
     }

     return sum;
}

function even(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) result.push(nums[i]);
    }

    return result;
}


function odd(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 != 0) result.push(nums[i]);
    }

    return result;
}