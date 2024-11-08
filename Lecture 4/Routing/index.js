

//  ROUTING -> For each incoming request you will get different response


// Types or request  or https methods are same thing


// JO MAI REQUEST BEJTA HU MERE SERVER KO, US REQUEST KO HAMARA SERVER 2 CHEJO SE SAMJTA HAI : > 1. METHODS  2. PATH

/*
HTTP Methods

- GET > to fetch data

- POST

- PUT

- PATCH

- DELETE
*/


// BY DEFAULT MY METHOD IS GET


const express = require("express");
const app = express();


const PORT = 9000;


app.get('/', (req,res)=>{    // this accept Path and Callback function
    res.send("<h1> Hello.! </h1>")
})

// Handel Bad Request
app.get("*", (req,res)=>{
    res.send("<h1>Bad Request</h1>")
})



app.listen(PORT, ()=>{
    console.log(`Server Connected at PORT - ${PORT}`)
})






