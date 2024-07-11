import mysql from "mysql2/promise";

class Database {
  private static instance: mysql.Connection | null = null;

  public static async getIstance(): Promise<mysql.Connection> {
    if (this.instance == null) {
      const instance: mysql.Connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "1234",
        database: "products",
      });

      return instance;
    }

    return this.instance;
  }
}

export default Database;
