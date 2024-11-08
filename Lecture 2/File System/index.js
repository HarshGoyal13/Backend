


// WHAT IS FILE SYSTEM? WHY DO WE USE IT? 

// -> IN TODAY'S THAT WORK DONE BY DATABASE , AS SAME AS FILS SYSTEM DO BUT IN VERY LOCAL AND SLOW WAY



// I DONT NEED TO INSTALL ANYTHING IN ORDER TO USE MY NODE MODULES


const fs = require('fs');


// WE WILL PERFORM CRUD THROUGH THIS FS , (CREATE , READ, UPDATE, DELETE)


// CREATE OR write

let data = "that's harsh Coding"
let data2 = "that's Kush Coding"

fs.writeFile('data.txt', data, {
    encoding:'utf-8',
    flag:'w'
}, (err) => {
    if(err){throw err}
    console.log("File written Successfully");
})


// OR

fs.writeFileSync('data2.text', data2)


// -------------------------------------------------------------------

// READ

fs.readFile('data.txt', {
    encoding:"utf-8",
    flag:"r"
}, (err, data)=>{
    if(err){throw err}
    console.log(data);
})



// OR

// Reading a FS to avoid buffer output we use ** ENCODING ** &&  **TO STRING NETHOD**

let text = fs.readFileSync('data2.text')
console.log(text.toString());


// --------------------------------------------------------------

// UPDATE

fs.appendFile('data.txt', " okay bosss", (err)=>{
    if(err){throw err}
    console.log("File Updated Successfully");
})

// OR

fs.appendFileSync('data2.txt', "okay hai bosss");


// --------------------------------------------------------------

// DELETE

fs.unlink('data2.txt',(err)=>{
    if(err){throw err}
    console.log("File Unlinked Successfully");
} )








