import express from "express";
import {
  addNewProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/productsController";

const productRouter = express.Router();

productRouter
  .route("/")
  .get(getAllProducts)
  .post(addNewProduct);

productRouter
  .route("/:id")
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

export default productRouter;
