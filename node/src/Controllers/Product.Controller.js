const productsCtrl = {};
const Product = require('../Models/Products')
const {writeFile} = require('fs/promises')
const fs = require('fs');

productsCtrl.getProducts = async(req,res)=>{
    const products = await Product.find();
    res.json(products)
}

productsCtrl.getProduct = async(req,res)=>{
    const product = await Product.findById(req.params.id);;
    res.json(product)
}

productsCtrl.createProduct = async(req,res)=>{
    const {id,name,price,stock} = req.body;
    let img = req.body.img;
    img = img.replace(/^data:image\/png;base64,/, '');
    const imgName = `${id}.png`
    await writeFile(`public/image/${imgName}`, img, 'base64');
    const newProduct = new Product({
        id: id,
        name: name,
        price: price,
        img: imgName,
        stock: stock,
        quanty: 1
    });
    await newProduct.save();
    res.json({message: 'Product created'});
}

productsCtrl.updateProduct = async(req,res)=>{
    const {id,name,price,image,stock} = req.body;
    await Product.findOneAndUpdate({_id:req.params.id},{
        id,
        name,
        price,
        image,
        stock
    });
    res.json({message: 'Product updated'});
}

productsCtrl.deleteProducts = async(req,res)=>{
    const product = await Product.findOneAndUpdate({_id:req.params._id})
    fs.unlinkSync(`public/image/${product.id}.png`,(error)=>{
        if(error) throw error;
    })
    await Product.findOneAndDelete(req.params.id);
    res.json({message:'Product Deleted'})
}


module.exports = productsCtrl;