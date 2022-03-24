const mongoose = require('mongoose')
const dbUrl = "mongodb+srv://testwork:1234@cluster0.z2gib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("connect success")})
.catch(err=>console.log(err))

//Schema
let productSchema = mongoose.Schema({
    product_ID: String,
    product_Name:String ,
    product_volume: Number,
    product_Amount: Number,
    product_sent:Array 
})

const Product = mongoose.model("th_products",productSchema)

const Model = {Product}

module.exports = Model;