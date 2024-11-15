function calculateProbability(n) {
    let pAll = 1;

    for (let i = 0; i < n; i++) {
        pAll *= (365 - i) / 365;
    }

    let probality = 1 - pAll;
    return probality.toFixed(2)
}

console.log(calculateProbability(23));