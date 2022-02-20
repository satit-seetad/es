//### Initialisation
let userRoles = new Map();
let userRoles = new Map([
    ['john', 'admin'],
    ['lily', 'editor'],
    ['peter', 'subscriber']
]);

//### Get element by key
userRoles.get('john'); // admin

//### Set element
userRoles.set(john, 'hr');

//### Check existence by key
userRoles.has('foo'); // false
userRoles.has('lily'); // true

//### Delete by key
userRoles.delete('john');

//### Clear all element
userRoles.clear();

//### Size
console.log(userRoles.size); // 3

//### Iterate over key
for (const user of userRoles.keys()) {
    console.log(user); // john lily peter
}

//### Iterate over value
for (let role of userRoles.values()) {
    console.log(role); // admin editor subscriber
}

//### Iterate over element
for (const role of userRoles.entries()) {
    console.log(`${role[0].name}: ${role[1]}`);
}

//### Iterate with forEach
userRoles.forEach((role, user) => console.log(`${user}: ${role}`));

//### Conver to array
var keys = [...userRoles.keys()];
let roles = [...userRoles.values()];
