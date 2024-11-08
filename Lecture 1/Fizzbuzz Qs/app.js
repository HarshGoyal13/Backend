
let arr = parseInt(process.argv.slice(2));
console.log(arr);


// Approach 1
for (let i = 1; i <= arr; i++) {
    let str = "";
    if (i % 3 === 0) {
        str += "Fizz";
    }
    if (i % 5 === 0) {
        str += "Buzz";
    }
    if (str === "") {
        str += i;
    }
    console.log(str);
}



// Approach 2

let count3 = 1;
let count5 = 1;

for (let i = 1; i <= arr; i++) {
     
    let str = "";

    if (count3 == 3) {
        str += "Fizz";
        count3 = 0;
    }
    if (count5 == 5) {
        str += "Buzz";
        count5 = 0;
    }
    if (str === "") {
        str += i;
    }
    console.log(str);
    count3++;
    count5++;
}
