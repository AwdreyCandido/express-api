import express from "express";
const productRouter = express.Router();

productRouter
  .route("/")
  .get((req, res) => {
    res.json({ message: "Product Router - GET Method" });
  })
  .post((req, res) => {
    res.json({ message: "Product Router - POST Method" });
  });

productRouter
  .route("/:id")
  .get((req, res) => {
    res.json({ message: "Product Router - GET Method" });
  })
  .patch((req, res) => {
    res.json({ message: "Product Router - PATCH Method" });
  })
  .delete((req, res) => {
    res.json({ message: "Product Router - DELETE Method" });
  });

export default productRouter;
