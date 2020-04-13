const express = require('express')
const app = express();
app.set('view engine','ejs');
app.set('views','view');
app.get('/',function(req,res){
    res.render('index',{name:'farrit'});
});
app.listen(3000,function(){
    console.log('Listening on port 300');
});