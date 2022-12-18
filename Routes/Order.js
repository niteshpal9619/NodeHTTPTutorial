const express=require('express')
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Get Request for Orders'
    });
});

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:'POST Request for Orders'
    });
});

router.get('/:orderid',(req,res,next)=>{
    res.status(200).json({
        message:'Get Orders details by id',
    });
});

router.delete('/:orderid',(req,res,next)=>{
    res.status(200).json({
        message:'Orders details deleted by id'
    });
});

module.exports=router;