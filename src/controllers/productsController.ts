import Database from "../services/database";
import IProduct from "../interfaces/IProduct";
import { Request, Response } from "express";
import ProductsRepository from "../repositories/productsRepository";

const database = Database.getInstance();
const productsRepository = new ProductsRepository(database);

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productsRepository.getAll();

    res
      .status(200)
      .json({ message: "success", data: products });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Um erro ocorreu ao buscar os produtos.",
        data: error
      })
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const id: number = +req.params.id;
    const product = await productsRepository.find(id);

    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado." })
    }

    res
      .status(200)
      .json({
        message: "success",
        data: product,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Um erro ocorreu ao buscar o produto.",
        data: error
      })
  }
};

export const addNewProduct = async (req: Request, res: Response) => {
  try {
    const newProduct: IProduct = req.body;
    const result = await productsRepository.create(newProduct);

    res
      .status(201)
      .json({ message: "success", data: result });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Um erro ocorreu ao criar novo produto.",
        data: error
      })
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const id: number = +req.params.id;
    const updatedProduct: IProduct = req.body;

    const result = await productsRepository.update(id, updatedProduct);

    if (!result) {
      return res.status(404).json({
        message: "Produto não encontrado."
      });
    }

    res
      .status(200)
      .json({
        message: "success",
        data: result,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Um erro ocorreu ao atualizar o produto.",
        data: error
      })
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id: number = +req.params.id;
    const result = await productsRepository.delete(id);

    res.json({
      message: "success",
      data: result,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Um erro ocorreu ao excluir o produto.",
        data: error
      })
  }
};
