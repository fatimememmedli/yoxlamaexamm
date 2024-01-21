const Product = require("./../models/model")

const getAllData = async (req,res)=>{
    let datas = await Product.find({})
    res.send(datas)
}
const postData = async (req,res)=>{
    let newProduct = new Product(req.body)
    await newProduct.save()
    res.send(newProduct)
}
const deleteData = async (req,res)=>{
    let id = req.params.id
    let deleteProduct = await Product.findByIdAndDelete(id)
    res.send(deleteProduct)
}
module.exports = {getAllData,postData,deleteData}