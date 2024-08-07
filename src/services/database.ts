import mysql from "mysql2/promise";

class Database {
  private static instance: mysql.Pool | null = null;

  private constructor() { }

  public static getInstance(): mysql.Pool {
    if (this.instance == null) {
      this.instance = mysql.createPool(MYSQL_WEB_HOST_CONFIG);
    }

    return this.instance;
  }
}

export default Database;


const MYSQL_WEB_HOST_CONFIG = {
  host: 'sql5.freemysqlhosting.net',
  user: 'sql5721754',
  password: 'bfxiPf7YLe',
  database: 'sql5721754',
  port: 3306,
  charset: 'utf8',
  connectionLimit: 10
}

const MYSQL_LOCAL_CONFIG = {
  host: "localhost",
  user: "root",
  password: "1234",
  database: "products",
  port: 3306,
  charset: 'utf8',
  connectionLimit: 10
}
