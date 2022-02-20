//### Array.of()
let numbers = Array.of(3);
console.log(numbers.length); // 1
console.log(numbers[0]); // 3

let chars = Array.of('A', 'B', 'C');
console.log(chars.length); // 3
console.log(chars); // ['A','B','C']

//### Array.from()
// from array
function arrayFromArgs() {
    return Array.from(arguments);
}

console.log(arrayFromArgs(1, 'A')); // [ 1, 'A' ]

// from array function
function addOne() {
    return Array.from(arguments, x => x + 1);
}
console.log(addOne(1, 2, 3));

//### find()    => find first element and return value
let numbers = [1, 2, 3, 4, 5];
let value = numbers.find(e => e % 2 == 0); // 2

//### findIndex()   => find first element and return index
let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex(rank => rank === 7); // 2