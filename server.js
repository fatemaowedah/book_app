'use strict';
require('dotenv').config();
const express = require('express');
const superagent = require('superagent');
const PORT = process.env.PORT || 4000;
const app = express();
//  static css file
app.use(express.static('./public'));
//  receve server data
app.use(express.urlencoded({extended: true}));
// set the view engine
app.set('view engine', 'ejs');
// route 
app.get('/hello' , (req,res) =>{
    res.render('pages/index')
});
app.listen(PORT, () => console.log(`runing in port ${PORT}`))