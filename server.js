/**
 * Created by zhouyg on 2017/3/26.
 */
const express=require('express');
const app=express();
const path=require('path');
let Movie=require('./model');
app.use(express.static(path.resolve('node_modules')));
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.get('/',function (req,res) {
   Movie.find({},function (err,movies) {
       res.render('index',{movies})
   })
});
app.listen(8080);