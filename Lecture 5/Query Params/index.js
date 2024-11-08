


const express = require("express");
const app = express();

const PORT = 8000;


app.get("/", (req,res)=>{
    res.send("<h1>Hello !</h1>")
})

app.get("/search", (req,res)=>{
    console.log(req.query)
    let {search} = req.query;
    res.send(`<h1>Yours ${search}</h1>`)

})

app.listen(PORT, ()=>{
    console.log(`Server Running at PORT - ${PORT}`)
})



