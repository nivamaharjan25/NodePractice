const express = require('express')
const app = express()
const port = 3000
const calculationHelper = require("./calculationHelper")
const bodyparser = require("body-parser");


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended:false }));

app.get('/get-sum', (req, res) => {
    // console.log(req.query['name'])
    // console.log(req.params['name']);  
    // req.header()  
    const first = parseInt(req.query['num1']);
    const second = parseInt(req.query['num2']);
    add (first, second);
    res.status(202).send('Hello world');
})

function add(first,second){
    const sum = first+second;
    console.log(sum);
}

app.get('/calculate', (req, res) => {
    // console.log(calculationHelper.sum(1,2))
    console.log(calculationHelper.login({"username":"Niva"}));
    res.status(202).send('hi');
})

app.post('/login', (req, res)=>{
    console.log("=======",req.body)
    // const response = calculationHelper.login(req.body);
    res.status(202).send("response");
})

app.listen(port,()=>{
    console.log(`Example listening on port ${port}`)
})
