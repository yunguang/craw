/**
 * Created by zhouyg on 2017/3/26.
 */
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/craw');

let MovieScheme=new mongoose.Schema({
    name:String,
    url:String
});
module.exports=mongoose.model('Movie',MovieScheme);