//concat
const concat = (a, b) => [...a, ...b];

console.log(concat([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"])); // [ 1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e' ]
console.log(concat(["a", "b", "c", "d", "e"], ["L", "e", "m", "o", "n"])); // [ 'a', 'b', 'c', 'd', 'e', 'L', 'e', 'm', 'o', 'n' ]
console.log(concat(["L", "e", "m", "o", "n"], ["C", "o", "d", "e"])); // [ 'L', 'e', 'm', 'o', 'n', 'C', 'o', 'd', 'e' ]


//optional
const concat2 = function (...arrays) {
    return arrays.reduce((result, array) => [...result, ...array], []);
}
console.log(concat2([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"], ["L", "e", "m", "o", "n"])); // [ 1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e', 'L', 'e', 'm', 'o', 'n' ]
console.log(concat2(["a", "b", "c", "d", "e"], ["L", "e", "m", "o", "n"], ["C", "o", "d", "e"])); // [ 'a', 'b', 'c', 'd', 'e', 'L', 'e', 'm', 'o', 'n', 'C', 'o', 'd', 'e' ]
console.log(concat2(["L", "e", "m", "o", "n"], ["C", "o", "d", "e"])); // [ 'L', 'e', 'm', 'o', 'n', 'C', 'o', 'd', 'e' ]