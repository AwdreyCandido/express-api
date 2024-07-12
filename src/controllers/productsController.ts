import Database from "../services/database";
import IProduct from "../interfaces/IProduct";
import mysql from "mysql2/promise";
import { Request, Response } from "express";

// var database: mysql.Connection;

// Database.getInstance().then((con) => {
//   database = con;
//   return database;
// });

export const getAllProducts = async (req: Request, res: Response) => {
  const db = await Database.getInstance();
  const [products] = await db.execute("SELECT * FROM products");

  res
    .status(200)
    .json({ message: "Product Router - GET Method", data: products });
};

export const getProduct = async (req: Request, res: Response) => {
  const db = await Database.getInstance();
  const id = req.params.id;
  const [product] = await db.execute(
    `SELECT * FROM products WHERE products.id = ${id}`
  );
  res.json({
    message: `Product Router - GET Method - Query Id = ${id}`,
    data: product,
  });
};

export const addNewProduct = async (req: Request, res: Response) => {
  const db = await Database.getInstance();
  const newProduct: IProduct = req.body;

  const [result] = await db.execute(
    `INSERT INTO products (name, description, price) VALUES ("${newProduct.name}", "${newProduct.description}", ${newProduct.price})`
  );

  res.json({ message: `Product Router - POST Method`, data: result });
};

export const updateProduct = async (req: Request, res: Response) => {
  const db = await Database.getInstance();
  const id = req.params.id;
  const updatedProduct: IProduct = req.body;

  const [result] = await db.execute(`
    UPDATE products SET name="${updatedProduct.name}", description="${updatedProduct.description}", price="${updatedProduct.price}" WHERE id = ${id}
  `);

  res.json({
    message: `Product Router - PATCH Method - Query Id = ${id}`,
    data: result,
  });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const db = await Database.getInstance();
  const id = req.params.id;

  const [result] = await db.execute(`
    DELETE FROM products WHERE id = "${id}"
  `);

  res.json({
    message: `Product Router - DELETE Method - Query Id = ${id}`,
    data: result,
  });
};
