const Product = require('../models/products.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true } )

const product = new Product({
    imagePaths: ['../catalogueImages/tb1'],
    title: 'NYLON FOLSOM JACKET',
    price: 150.00,
    description: 'Contrast stitch coach jacket with metal snap placket and cuffs, slant welt pockets, and rounded interior chest pocket. Finished with drawcord hem, and Stüssy logo embroidery at chest.',
    materialDescription: 'Regular fit 100% Nylon Imported',
    sizesAvailable: ['S','M','L','XL','XXL']
})

product.save(mongoose.disconnect());