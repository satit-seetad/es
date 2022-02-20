//### Basic
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

let { firstName, lastName } = person;

console.log(firstName); // 'John'
console.log(lastName); // 'Doe'

//### Undefined
let { firstName, lastName, middleName } = person;

console.log(middleName); // undefined

//### Default value
let { firstName, lastName, middleName = ''} = person;

console.log(middleName); // ''

//## Null value
let { firstName, lastName } = null || {};

//## Nested object
let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

let {
    name: { firstName, lastName }
} = employee;

console.log(firstName); // John
console.log(lastName); // Doe
