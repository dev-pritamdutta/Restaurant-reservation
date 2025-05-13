import productModel from "../models/productModels.js";
import {v2 as cloudinary } from "cloudinary";

const addProduct = async (req, res) => {
  try {
    const { name, category, price, description } = req.body;
    const image = req.file;
    let imageUrl = "";
    if (image) {
      let result = await cloudinary.uploader.upload(image.path, {
        resouce_type: "image",
      });
      imageUrl = result.secure_url;
    } else {
      imageUrl = "https://via.placeholder.com/150";
    }

    const productData = {
      name,
      category,
      price: Number(price),
      description,
      image: imageUrl,
      date: Date.now(),
    };
    // console.log(productData);
    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added successfully", product });
  } catch (error) {
    // console.log(error);
    res.json({ success: false, message: "Can't added product" });
  }
};

const listProducts = async (req, res) => {

    try {
        const products = await productModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        // console.log(error);
        res.json({ success: false, message: "Can't get products" });
    }
};

const removeProduct = async (req, res) => {
  const { id } = req.params; // Extract the product ID from the route parameter
  try {
    const deletedProduct = await productModel.findByIdAndDelete(id); // Use the ID to delete the product
    if (!deletedProduct) {
      return res.json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    // console.log(error);
    res.json({ success: false, message: "Server error", error: error.message });
  }
};
const singelProduct = async (req, res) => {};

export { addProduct, listProducts, removeProduct, singelProduct };
