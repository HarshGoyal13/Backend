


// FILE 1


let pi = Math.PI;
console.log(pi)


let ans = num => num*num;
let ans2 = (a,b) => a+b;


console.log(ans);
console.log(ans2);


// EXPORT BEHAVIOUR SHOW KAREGA KIUKI REQUIRE DEKH LIYA

// BY DEFAULT EXPORTS AN EMPTY OBJECT


module.exports = {}; // BY default


module.exports = {pi, ans, ans2};



