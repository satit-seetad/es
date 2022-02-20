//### Basic
let [x, y, z] = [70, 80, 90];

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90

//### Undefined
let [x, y, z] = [70, 80, 90];

console.log(x); // 70
console.log(y); // 80
console.log(z); // undefined

//### Rest syntax
let [x, y, ...args] = [70, 80, 90, 100];
console.log(x); // 70
console.log(y); // 80
console.log(args); // [90, 100]

//### Default value
let [x, y, z=0] = [70, 80];
console.log(x); // 70
console.log(y); // 80
console.log(z); // 0

//### Nested array
function getProfile() {
    return [
        'John',
        'Doe',
        ['Red', 'Green', 'Blue']
    ];
}

let [
    firstName,
    lastName,
    [color1, color2, color3]
] = getProfile();

console.log(color1, color2, color3); // Red Green Blue
