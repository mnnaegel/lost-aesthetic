const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    imagePaths: {type: [String], required: true},
    description: {type: String, required: true},
    materialDescription: {type: String, required: true},
    sizesAvailable: {type: [String], required: true}
})

module.exports = mongoose.model('Product', schema)
