// var a = 10;
// console.log(a);
// let b = 10;
// console.log(b);

// const c = 10;
// console.log(c);
/*
var a = 10;
a = 20;
console.log(a); //here a means 20;

let b = 10;
b = 20;
console.log(b); // here b means 20;

const c = 10;
c = 20;
console.log(c); //here c means error;
*/


function testVar() {
    var s = 'hi';
    if (true) {
        var s = 'hello'
    }
    console.log(s); //here s means hello because var is a functional scoped
}
testVar();

function testLet() {
    let a = 'something';
    if (true) {
        let a = 'anything';
        console.log(a);
    }
    console.log(a);
}
testLet()

/*
     let and const is block scoped;
     var is functional scoped;
*/