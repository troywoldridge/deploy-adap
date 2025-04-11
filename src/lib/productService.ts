import { getDBPool } from "./db";
import { RowDataPacket } from "mysql2/promise";

// Define the ProductRow interface
export interface ProductRow extends RowDataPacket {
  id: number;
  sinalite_id: string;
  slug: string;
  price: string;
  description: string;
  name: string;
  image_url: string;
}

// Define the ProductOptionRow interface
export interface ProductOptionRow extends RowDataPacket {
  id: number;
  sinalite_id: number;
  group_name: string; // ✅ Renamed 'group' to 'group_name' (avoid reserved keyword issues)
  name: string;
  hidden: number;
  created_at: string;
  updated_at: string;
  option_chain: string;
  value: string;
  price_modifier: string;
}

// Service to fetch product and options
export const productService = {
  /**
   * Get product by slug.
   * Converts slug array into string if needed.
   */
  getProductBySlug: async (slug: string | string[]): Promise<ProductRow> => {
    try {
      if (Array.isArray(slug)) {
        slug =
          slug.length === 3
            ? `${slug[0]}-${slug[2]}-${slug[1]}`
            : slug.join("-");
      }

      console.log("Fetching product with slug:", slug);
      const pool = await getDBPool();

      const [rows] = await pool.execute<RowDataPacket[]>(
        "SELECT * FROM products WHERE slug = ? LIMIT 1",
        [slug]
      );

      if (rows.length === 0) {
        throw new Error("Product not found");
      }
      return rows[0] as ProductRow;
    } catch (error) {
      console.error("Error in getProductBySlug:", error);
      throw error;
    }
  },

  /**
   * Fetch product options by `sinalite_id`
   */
  getProductOptions: async (sinaliteId: string): Promise<ProductOptionRow[]> => {
    try {
      const pool = await getDBPool();
      const schemaName = process.env.DB_NAME || "adapnow_db";

      // Ensure table exists before querying
      const [tableCheck] = await pool.execute<RowDataPacket[]>(
        "SELECT TABLE_NAME FROM information_schema.tables WHERE table_schema = ? AND table_name = ?",
        [schemaName, "product_option_details"]
      );
      if (tableCheck.length === 0) {
        throw new Error("Table 'product_option_details' does not exist");
      }

      const query = `
        SELECT po.*, pod.option_chain, pod.value, pod.price_modifier 
        FROM ${schemaName}.product_options AS po
        INNER JOIN ${schemaName}.product_option_details AS pod 
          ON FIND_IN_SET(po.id, pod.option_id) > 0
        WHERE po.sinalite_id = ?
        ORDER BY po.id, pod.id
      `;

      console.log("Executing query:", query);
      const [rows] = await pool.execute<RowDataPacket[]>(query, [sinaliteId]);

      return rows as ProductOptionRow[];
    } catch (error) {
      console.error("Error in getProductOptions:", error);
      throw error;
    }
  },

  /**
   * Get base price of a product
   */
  getBasePrice: async (productId: number): Promise<number | null> => {
    try {
      const pool = await getDBPool();
      const [rows] = await pool.execute<RowDataPacket[]>(
        "SELECT price FROM products WHERE id = ? LIMIT 1",
        [productId]
      );

      return rows.length ? parseFloat(rows[0].price) : null;
    } catch (error) {
      console.error("Error in getBasePrice:", error);
      throw error;
    }
  },

  /**
   * Calculate final price based on selected options
   */
  calculateFinalPrice: async (
    productId: number,
    selectedOptions: Record<string, unknown>,
    basePrice: number
  ): Promise<number> => {
    let finalPrice = basePrice;
    try {
      const pool = await getDBPool();

      for (const [optionName] of Object.entries(selectedOptions)) {
        const [rows] = await pool.execute<RowDataPacket[]>(
          "SELECT price_modifier FROM product_option_details WHERE value = ? AND hidden = 0 LIMIT 1",
          [optionName]
        );
        if (rows.length) {
          finalPrice += parseFloat(rows[0].price_modifier);
        }
      }
      return finalPrice;
    } catch (error) {
      console.error("Error in calculateFinalPrice:", error);
      throw error;
    }
  },
};
