//### Basic
// greeting.js
export let message = 'Hi';

export function setMessage(msg) {
  message = msg;
}

// app.js
import {message, setMessage } from './greeting.js';
console.log(message); // 'Hi'

setMessage('Hello');
console.log(message); // 'Hello' 

//### Binding
// foo.js
export foo = 10;
export bar = (val) = console.log(val);

// app.js
import { foo, bar } from './foo.js';
console.log(foo); // 10;

bar(20); // 20

//### Namespace import
// app.js
import * as fn from './foo.js';
console.log(fn.foo); // 10;

fn.bar(20); // 20

//## Alias export
// math.js  
function add( a, b ) {
    return a + b;
 }
 
 export { add as sum };

 // app.js
 import {sum as total} from './math.js';

 //## Default export
 // sort.js
export default function(arr) {
    // sorting here
}

export function heapSort(arr) {
    // heapsort
}

// app.js
import sort from sort.js;
import sort, {heapSort} from './sort.js';
import { default as quicksort, heapSort} from './sort.js';