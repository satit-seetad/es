//### Iterate over array
let scores = [80, 90, 70];

for (let score of scores) {
    console.log(score);
}

//### Object destructuring
const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
];

let sum = 0;
for (const {score} of ratings) {
    sum += score;
}

//### Iterate over string
let str = 'abc';
for (let c of str) {
    console.log(c);
}

//### Iterate over map
let colors = new Map();

colors.set('red', '#ff0000');
colors.set('green', '#00ff00');
colors.set('blue', '#0000ff');

for (let color of colors) {
    console.log(color);
}
/*
[ 'red', '#ff0000' ]
[ 'green', '#00ff00' ]
[ 'blue', '#0000ff' ]
*/

//### Iterate over set
let nums = new Set([1, 2, 3]);

for (let num of nums) {
    console.log(num);
}

//### Using for-in vs for-of
let scores = [10,20,30];
scores.message = 'Hi';

for (let score in scores) {
  console.log(score); 
}
/*
 0
1
2
message
 */

console.log('for...of:');
for (let score of scores) {
  console.log(score);
}
/*
10
20
30
*/

