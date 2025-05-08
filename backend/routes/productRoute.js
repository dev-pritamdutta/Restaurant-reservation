import express from "express";

import {
  addProduct,
  listProducts,
  removeProduct,
  singelProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post("/add", upload.single("image"), adminAuth, addProduct);
productRouter.get("/list", listProducts);
productRouter.delete("/remove/:id", adminAuth, removeProduct);
productRouter.get("/single", singelProduct);

export default productRouter;
