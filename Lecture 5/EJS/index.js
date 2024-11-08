


const express = require("express");
const app = express();

const path = require('path')


let PORT = 5050;


app.set('view engine', "ejs"); // set view engine for show templates

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));  // this for use static file in express



app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/random', (req,res)=>{
    let randomNo  = Math.floor(Math.random()*100);
    res.render('random', {randomNo})
})




app.listen(PORT, ()=>{
    console.log(`Server Running at PORT - ${PORT}`)
    
})



// Compulsory - WHATEVER WILL BE YOUR TEMPLATE , ALL THE FILES WILL BE MADE INSIDE A FOLDER NAMELY VIEWS






