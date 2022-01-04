const express = require("express");
const productModel = require("./models/products.js");
const app = express();

app.post("/add_product", async (request, response) => {
    const product = new productModel(request.body);
    
    try {
      await product.save();
      console.log(product)
      response.send(request.body);
    } catch (error) {
      console.log(request.body)
      response.status(500).send(error);
    }
});

app.get("/products", async (request, response) => {
    const products = await productModel.find({});
  
    try {
      response.send(products);
    } catch (error) {
      response.status(500).send(error);
    }
});

module.exports = app;
