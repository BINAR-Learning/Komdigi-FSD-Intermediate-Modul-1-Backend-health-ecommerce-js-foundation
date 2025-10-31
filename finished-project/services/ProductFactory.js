/**
 * Product Factory (Factory Pattern)
 * Centralized product creation untuk Health E-Commerce
 *
 * Pattern ini akan berguna di Modul 3 saat create products via API
 */

const Vitamin = require("../models/Vitamin");
const Supplement = require("../models/Supplement");

class ProductFactory {
  static createProduct(type, data) {
    switch (type.toLowerCase()) {
      case "vitamin":
        return new Vitamin(
          data.name,
          data.price,
          data.stock,
          data.manufacturer,
          data.dosage
        );

      case "supplement":
        return new Supplement(
          data.name,
          data.price,
          data.stock,
          data.manufacturer,
          data.ingredients
        );

      default:
        throw new Error(`Unknown product type: ${type}`);
    }
  }

  // Bulk create products
  static createMultiple(productsData) {
    return productsData.map((item) => this.createProduct(item.type, item.data));
  }
}

module.exports = ProductFactory;
