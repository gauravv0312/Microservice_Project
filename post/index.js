const express  = require('express');
const app = express();
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');
const exp = require('constants');
app.use(express.json());
const posts = {};

app.get('/posts',(req,res)=>{
     res.send(posts);
});

app.post('/posts',(req,res)=>{
    const id  = randomBytes(4).toString('hex');
    const {title} = req.body;
    posts[id]={
        id,title
    };

    res.status(201).json(posts[id]);
});


app.listen(4000,()=>{
    console.log((`server is running on the 4000 port`));
});