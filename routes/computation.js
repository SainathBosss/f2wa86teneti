var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var num1=Math.floor(Math.random()*10)
    var num2=(Math.random())
    var num3=Math.floor(Math.random()*10)
    var num4=Math.floor(Math.random()*10)
    var atanFunction=Math.cos(num1);
    var expFunction=Math.asin(num2);
    var expm1Function=Math.asinh(num3)


    res.render('computation',
    {
        title:'Sainath Teneti Computes Functions',
        num1:num1,
        num2:num2,
        num3:num3,
        num4:num4,
        atan:atanFunction,
        exp:expFunction,
        expm1:expm1Function,
    });
     

});
module.exports=router;