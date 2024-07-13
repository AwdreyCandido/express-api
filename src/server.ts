import express from "express";
import productRouter from "./router/productRouter";
import Database from "./services/database";
import fs from "fs";
import https from "https";
import path from "path";

const app = express();
const database = Database.getInstance();
const PORT = 3000;

app.use(express.json());
app.use("/api/v1/products", productRouter);

// read SSL certificates and key files
const options = {
  key: fs.readFileSync(path.join(__dirname, "localhost-key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "localhost.pem")),
};

// create HTTPS server
const server = https.createServer(options, app);

server.listen(PORT, async () => {
  try {
    await database.getConnection();
    console.log(`Server is running on https://localhost:${PORT}`);
  } catch (error) {
    console.log("Error while connecting with database.", error);
  }
});
