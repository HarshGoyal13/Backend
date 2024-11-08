

const express = require("express")
const app = express();

const PORT = 4000;

const path = require('path')

app.set('view engine', 'ejs')

app.use(express.urlencoded()); // for parsing formDAta

app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))


app.get("/", (req,res)=>{
    res.render("index")
})

// this handels GET Request
app.get("/user", (req,res)=>{
    console.log(req.query);
    let {username, age} = req.query;
    res.render("response", {username,age});
})


// this handels POST Request
app.post("/user", (req,res)=>{
    let {username, age} = req.body; // by default this is UNDEFINED, because POST mrthod send entire data as format  of formData(typr of data), and expree cant show that direactly, that's why we parse this from urlencoded
    console.log(req.body)
    res.render("response", {username,age});
})




app.listen(PORT, ()=>{
    console.log(`Server Connected at PORT - ${PORT}`)
})

