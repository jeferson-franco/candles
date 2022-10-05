function solution(candlesNumber, makeNew) {
    let total = candlesNumber;
    let left = candlesNumber;
    while (left >= makeNew) {
        total += Math.floor(left / makeNew);
        left = Math.floor(left / makeNew) + (left % makeNew);
    }
    return total;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test candles

// alternative solution
