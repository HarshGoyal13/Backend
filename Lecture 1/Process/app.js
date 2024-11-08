

let ans = process.argv;    // Process -> this stores all informataion regarding NODEJS task  and That argv return array of where my task run
console.log(ans)


let arr = process.argv.slice(2);
console.log(arr);


// Take no. As input and print counting from 0 to No.
let task = parseInt(process.argv.slice(2));
for(let i =0; i <= task; i++){
    console.log(i);
}

// Take Name as Input and add some extra words with them
let task2 = process.argv.slice(2);
for(let i of arr){
    console.log(`hello from ${i}`);
}




// CWD -> CURRENT WORKING DIRECTORY

console.log(process.cwd())  // JHA SE PROJECT RUN KAR RAHE HO -> CWD

// --dirname -> this will tell me code kha chal rha h

console.log(__dirname);