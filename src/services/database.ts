import mysql from "mysql2/promise";

class Database {
  private static instance: mysql.Pool | null = null;

  private constructor() {}

  public static getInstance(): mysql.Pool {
    if (this.instance == null) {
      this.instance = mysql.createPool({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "1234",
        database: "products",
      });
    }

    return this.instance;
  }
}

export default Database;

// const database = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   port: 3306,
//   password: "1234",
//   database: "products",
// });

// export default database;
