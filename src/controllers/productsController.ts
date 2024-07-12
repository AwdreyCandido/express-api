import Database from "../services/database";
import IProduct from "../interfaces/IProduct";
import { Request, Response } from "express";
import ProductsRepository from "../repositories/productsRepository";

const database = Database.getInstance();
const productsRepository = new ProductsRepository(database);

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await productsRepository.getAll();

  res
    .status(200)
    .json({ message: "Product Router - GET Method", data: products });
};

export const getProduct = async (req: Request, res: Response) => {
  const id: number = +req.params.id;
  const product = await productsRepository.find(id);

  res.json({
    message: `Product Router - GET Method - Query Id = ${id}`,
    data: product,
  });
};

export const addNewProduct = async (req: Request, res: Response) => {
  const newProduct: IProduct = req.body;
  const result = await productsRepository.create(newProduct);

  res.json({ message: `Product Router - POST Method`, data: result });
};

export const updateProduct = async (req: Request, res: Response) => {
  const id: number = +req.params.id;
  const updatedProduct: IProduct = req.body;

  const result = await productsRepository.update(id, updatedProduct);

  res.json({
    message: `Product Router - PATCH Method - Query Id = ${id}`,
    data: result,
  });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const id: number = +req.params.id;
  const result = await productsRepository.delete(id);

  res.json({
    message: `Product Router - DELETE Method - Query Id = ${id}`,
    data: result,
  });
};
