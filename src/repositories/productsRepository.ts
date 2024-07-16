import { Pool } from "mysql2/promise";
import Database from "../services/database";
import IProduct from "../interfaces/IProduct";

const database = Database.getInstance();

class ProductsRepository {
  private database: Pool;

  constructor(database: Pool) {
    this.database = database;
  }

  async getAll() {
    const [products] = await database.execute("SELECT * FROM products");
    return products;
  }

  async find(id: number) {
    const [product] = await database.execute(
      `
      SELECT 
        products.id, 
        products.name, 
        products.description, 
        products.price, 
        products.createdAt,
        products.quantity,
        products.tags,
        categories.category,
        departments.department
      FROM products 
      JOIN departments ON departments.id = products.departmentId 
      JOIN categories ON categories.id = products.categoryId 
      WHERE products.id = ${id}
      `
    );
    return product;
  }

  async create(newProduct: IProduct) {
    const [result] = await database.execute(
      `INSERT INTO products (
        name, 
        description, 
        price, 
        quantity, 
        categoryId, 
        departmentId, 
        tags,
        createdAt)
       VALUES (
        "${newProduct.name}", 
        "${newProduct.description}", 
         ${newProduct.price}, 
         ${newProduct.quantity}, 
         ${newProduct.departmentId}, 
         ${newProduct.categoryId}, 
        "${newProduct.tags}",
        NOW()
       )
      `
    );

    return result;
  }

  async update(id: number, updatedProduct: IProduct) {
    const [result] = await database.execute(`
      UPDATE products SET 
        name="${updatedProduct.name}", 
        description="${updatedProduct.description}", 
        price=${updatedProduct.price},
        quantity=${updatedProduct.quantity},
        categoryId=${updatedProduct.categoryId},
        departmentId=${updatedProduct.departmentId},
        tags="${updatedProduct.tags}"
      WHERE id = ${id}
    `);

    return result;
  }

  async delete(id: number) {
    const [result] = await database.execute(`
    DELETE FROM products WHERE id = "${id}"
  `);
    return result;
  }
}

export default ProductsRepository;
