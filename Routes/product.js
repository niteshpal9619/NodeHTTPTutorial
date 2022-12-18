const express=require('express')
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handeling GET request to /products'
    });
});

router.post('/',(req,res,next)=>{
    const product={
        name:req.body.name,
        price:req.body.price
    };
    res.status(200).json({
        message:'Handeling POST request to /products',
        createdProduct:product        
    });
});

router.get('/:productid',(req,res,next)=>{
    const id=req.params.productid;
    if (id==='special'){
        res.status(200).json({
            message:'found special id',
            id: id
        });
    }else if(id==='one'){
        res.status(200).json({
            message:'found one id'
        });
    }
    else{
        res.status(200).json({
            message:'you passed an id'
        });
    }
});


router.patch('/:productid',(req,res,next)=>{
    res.status(200).json({
        message:'updated product'
    });
});

router.delete('/:productid',(req,res,next)=>{
    res.status(200).json({
        message:'delete product'
    });
});

module.exports=router;