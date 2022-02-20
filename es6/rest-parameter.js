//### Basic
function fn(a, b, ...c) {
    console.log(a, b, c);
}

fn(1, 2, 3, 'a', 'b', 'c'); //1 2 [ 3, 'a', 'b', 'c' ]

const sum = (...n) => {
    return n.reduce((total, v)=>{
        return total = total + v;
    });
}

console.log(sum(1, 2, 3));  //6