//head
const head = ([firstElement]) => firstElement;

console.log(head([1, 2, 3, 4, 5])); // 1
console.log(head(["a", "b", "c", "d", "e"])); // a
console.log(head(["L", "e", "m", "o", "n"])); // L

//tail
const tail = ([, ...restOfElements]) => restOfElements;

console.log(tail([1, 2, 3, 4, 5])); // [ 2, 3, 4, 5 ]
console.log(tail(["a", "b", "c", "d", "e"])); // [ 'b', 'c', 'd', 'e' ]
console.log(tail(["L", "e", "m", "o", "n"])); // [ 'e', 'm', 'o', 'n' ]

//init
const init = (array) => array.slice(0, -1);

console.log(init([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4 ]
console.log(init(["a", "b", "c", "d", "e"])); // [ 'a', 'b', 'c', 'd' ]
console.log(init(["L", "e", "m", "o", "n"])); // [ 'L', 'e', 'm', 'o' ]

//last
const last = (array) => array[array.length - 1];

console.log(last([1, 2, 3, 4, 5])); // 5
console.log(last(["a", "b", "c", "d", "e"])); // e
console.log(last(["L", "e", "m", "o", "n"])); // n
