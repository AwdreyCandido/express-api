import mysql from "mysql2/promise";

class Database {
  private static instance: mysql.Connection | null = null;

  private constructor() {}

  public static async getInstance(): Promise<mysql.Connection> {
    if (this.instance == null) {
      this.instance = await mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "1234",
        database: "products",
      });

      this.instance.on("error", (error) => {
        console.error("MySql connection error", error);
        this.instance = null;
      });
    }

    return this.instance;
  }
}

export default Database;
