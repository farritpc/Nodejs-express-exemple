const express = require('express')
const app = express();
const fs = require('fs')
app.set('view engine','ejs');
app.set('views','view');
app.get('/',function(req,res){
    fs.readFile('./data.json',(err,data)=>{
        const listobj = JSON.parse(data);
        if(err){
            res.status(400).send('error list not found');
        }else{
            res.render('index',{lists:listobj})
        }
    })
});
app.listen(3000,function(){
    console.log('Listening on port 3000');
});