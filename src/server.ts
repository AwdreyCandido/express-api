import express from "express";
import productRouter from "./router/productRouter";
import Database from "./services/database";

const app = express();
const database = Database.getInstance();
const PORT = 3000;

app.use(express.json());
app.use("/api/v1/products", productRouter);

app.listen(PORT, async () => {
  try {
    await database.getConnection();
    console.log(`Server is running on https://localhost:${PORT}`);
  } catch (error) {
    console.log("Error while connecting with database.", error);
  }
});
