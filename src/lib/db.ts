// src/lib/db.ts
import mysql, { Pool } from "mysql2/promise";

/**
 * Put the pool on the global object to avoid creating multiple pools
 * in development or hot-reload scenarios.
 */
declare global {
  // eslint-disable-next-line no-var
  var cachedPool: Pool | undefined;
}

export function getDBPool(): Pool {
  // If we already have a pool in the global scope, reuse it
  if (global.cachedPool) {
    return global.cachedPool;
  }

  // Otherwise, create a new pool and store it globally
  global.cachedPool = mysql.createPool({
    host: process.env.DB_HOST || "192.168.0.50",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "Elizabeth71676!",
    database: process.env.DB_NAME || "adapnow_db",
    port: Number(process.env.DB_PORT) || 3306,
    connectionLimit: 100, // 10 or 20 is usually enough
  });

  return global.cachedPool;
}
