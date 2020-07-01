let arr = [10, 20, 30, 40, 50, 60, 70];
console.log(...arr);
let sum = [...arr].reduce((a, b) => a + b);
console.log(sum);


/*
      arr=[...arr];
*/