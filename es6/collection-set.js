//### Initialisation
let chars = new Set();
let chars = new Set(['a', 'a', 'b', 'c', 'c']);

//### Get element by key
userRoles.get('john'); // admin

//### Add element
userRoles.add('f');

//### Check existence
chars.has('g'); // false
chars.has('a'); // true

//### Delete by key
userRoles.delete('a');

//### Clear all element
userRoles.clear();

//### Size
console.log(chars.size); // 5

//### Iterate over element
for (let char of chars) {
    console.log(char);
}}

//### Iterate with forEach
chars.forEach(char => console.log(char));

//### Conver to array
var keys = [...userRoles.keys()];
let roles = [...userRoles.values()];


