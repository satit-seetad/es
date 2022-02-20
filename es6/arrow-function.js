//### Basic
let add = function (x, y) {
	return x + y;
};

//### Without {}
let add = (x, y) => x + y;

//### With return
let add = (x, y) => { return x + y; };

//### Single parameter
let names = ['John', 'Mac', 'Peter'];
let lengths = names.map(name => name.length);

console.log(lengths); // [ 4, 3, 5 ]

//### No parameter
let logDoc = () => console.log(window.document);
logDoc();