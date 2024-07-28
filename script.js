'use strict'

function getSum() {
    let total = 0;

    return function(value) {
        total += value;
        return total;
    };
}

const sum = getSum();

console.log(sum(4)); // 4

console.log(sum(6)); // 10

console.log(sum(10)); // 20

console.log(sum(7)); // 27