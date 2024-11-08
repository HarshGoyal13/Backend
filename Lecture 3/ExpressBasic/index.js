



const express = require("express");  // Returns a function


// this is instance to your entire project

const app = express();  // it returns a entire new object


let PORT = 8080;  // Everything is runs on MicroProcessor, and micoprocessor have small pins that we called PORTS, and from these some ports are reserves for system work
 


// Server Creation -> Generally we use 3000 to 9000 PORTS, not mondaotry

app.listen(PORT, ()=>{
    console.log(`Server connected at ${PORT}`);
})



// we called machine as a localhost , where we check our server is created good or not, because we created server on our local machine , not on cloud
// ->    http://localhost:8080/

