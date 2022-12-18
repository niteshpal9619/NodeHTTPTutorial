const express=require('express');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const app=express();
const productRoute=require('./Routes/product');

const OrderRoute=require('./Routes/Order');

app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());


/*app.use((req,res,next)=>{
    res.status(200).json({
        message:'it works'
    });
});*/

app.use('/product',productRoute);
app.use('/Order',OrderRoute);

app.use((req,res,next)=>{
    const error=new Error('Not Found');
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    });
});

module.exports=app;