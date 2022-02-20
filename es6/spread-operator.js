//### Basic
const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined); //[ 2, 4, 6, 1, 3, 5 ]

//### Push array
let rivers = ['Nile', 'Ganges', 'Yangte'];
let moreRivers = ['Danube', 'Amazon'];

rivers.push(...moreRivers);
console.log(rivers); //[ 'Nile', 'Ganges', 'Yangte', 'Danube', 'Amazon' ]

//### Construct array
let initialChars = ['A', 'B'];
let chars = [...initialChars, 'C', 'D'];
console.log(chars); //["A", "B", "C", "D"]

//### Concat array
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // [1, 2, 3, 4]

//### Copy array
let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores); // [80, 70, 90]

//### String spread
let chars = ['A', ...'BC', 'D'];
console.log(chars); // ["A", "B", "C", "D"]