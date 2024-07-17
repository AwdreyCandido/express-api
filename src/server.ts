import express from "express";
import productRouter from "./router/productRouter";
import Database from "./services/database";
const cors = require("cors")

const app = express();
const database = Database.getInstance();
const PORT = 3000;

app.use(express.json());
app.use(cors())
app.use("/api/v1/products", productRouter);

app.listen(PORT, async () => {
  try {
    await database.getConnection();
    console.log(`Server is running.`);
  } catch (error) {
    console.error(error);
    throw new Error("Error while connecting with database.")
  }
});


export default app