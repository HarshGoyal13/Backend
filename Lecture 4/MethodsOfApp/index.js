


const express = require("express");
const app = express();


const PORT = 8080;


// Adding app.use
app.use("/middleware",(req,res)=>{ // callback function
    res.send("<h1>HEllo</h1>")
    console.log("You made a request at specific path middleware");

})



app.listen(PORT, ()=>{
    console.log(`Server Connected at PORT - ${PORT}`)
})



// MIDDLEWARE -> har bar run karta hai, jab bhi browser / user kisi bhi type ki request karta hai

// SERVER - store request ans response , in this request sends as an objects and server also send response as a object 



