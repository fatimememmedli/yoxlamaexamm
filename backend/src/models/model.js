const mongoose = require("mongoose")
const { Schema } = mongoose;

const productchema = new Schema({
  name: String, // String is shorthand for {type: String}
  image: String,
  price:Number
  
},{collection:"products"});
const Model = mongoose.model('Product', productchema);
module.exports = Model

