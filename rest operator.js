function a(...num) {
    return num;
};
console.log(a(10, 20, 30, 40, 50, 60));

function b(...num) {
    return num.reduce((a, b) => a + b);
}
console.log(b(10, 20, 30, 40, 10, 500000));


function some(a, b, ...c) {
    return c;
};
console.log(some(10, 20, 30, 40, 50));