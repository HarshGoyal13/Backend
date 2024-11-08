



const express = require("express");
const app = express();

const PORT = 5000;



app.get("/", (req,res)=>{
    res.send("<h1>Root Route</h1>");
})


// SUBREDDIT
app.get("/r/:subreddit", (req, res) => {
    console.log(req.params);
    let {subreddit} = req.params;
    res.send(`<h1>${subreddit} Route</h1>`)
    
});



app.listen(PORT, ()=>{
    console.log(`Server Connected at Port - ${PORT}`)
})

