import express from "express";
import productRouter from "./router/productRouter";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/v1/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
