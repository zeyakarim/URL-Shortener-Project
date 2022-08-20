const express = require('express');
const app = express();
const port = 5000;
const db = require('./config/mongoose');


app.set('view engine','ejs');
app.set('views','./views');


app.use(express.urlencoded({extended:false}));
app.use(express.static('assets'));

app.use('/',require('./routes'))

app.listen(port,function(err){
    if(err){
        console.log("Error in running the server",err);
        return;
    }
    console.log('Successfully Running Express Server');
})