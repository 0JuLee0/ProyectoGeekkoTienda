
const { Schema, model} = require('mongoose');
const productSchema = new Schema({
        id: {
            type : Number,
            required: true,
            unique : true
        },
        name: {
            type : String,
            required: true
        },
        price: {
            type : Number,
            required: true
        },
        img: {
            type : String,
            required: true
        },
        stock:{
            type : Number,
            required: true
        },
        quanty:{
            type : Number,
        }
});


module.exports = model('Product',productSchema);