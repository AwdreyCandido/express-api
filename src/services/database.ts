import mysql from "mysql2/promise";

class Database {
  private static instance: mysql.Pool | null = null;

  private constructor() { }

  public static getInstance(): mysql.Pool {
    if (this.instance == null) {
      this.instance = mysql.createPool({
        host: 'sql10.freemysqlhosting.net',
        user: 'sql10720237',
        password: 'TiPlIASGc5',
        database: 'sql10720237',
        port: 3306,
        charset: 'utf8',
        connectionLimit: 10
      });
    }

    return this.instance;
  }
}

export default Database;

/*
  LOCAL MYSQL HOSTING
  this.instance = mysql.createPool({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "1234",
    database: "products",
  });
*/

/*
  FREE MYSQL WEB HOSTING
  Database name: sql10720237
  Host: sql10.freemysqlhosting.net
  User: sql10720237
  Password: TiPlIASGc5
  Port: 3306
*/
