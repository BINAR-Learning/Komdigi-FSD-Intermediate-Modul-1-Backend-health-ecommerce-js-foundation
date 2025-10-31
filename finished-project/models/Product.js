/**
 * Product Class (OOP Base Class)
 * Foundation untuk Health E-Commerce product management
 *
 * Catatan: Class ini akan jadi base untuk Mongoose schema di Modul 2
 */

class Product {
  constructor(name, price, stock, category, manufacturer) {
    this.id = Date.now() + Math.random();
    this.name = name;
    this._price = price;
    this._stock = stock;
    this.category = category;
    this.manufacturer = manufacturer;
    this.createdAt = new Date();
    this.isActive = true;
  }

  // Getter
  get price() {
    return this._price;
  }

  // Setter dengan validation (Encapsulation)
  set price(value) {
    if (value < 0) {
      throw new Error("Price must be positive");
    }
    this._price = value;
  }

  get stock() {
    return this._stock;
  }

  set stock(value) {
    if (value < 0) {
      throw new Error("Stock cannot be negative");
    }
    this._stock = value;
  }

  // Methods
  getInfo() {
    return `${this.name} (${this.category}) - Rp ${this._price.toLocaleString(
      "id-ID"
    )}`;
  }

  calculateTotal(quantity) {
    if (!this.checkStock(quantity)) {
      throw new Error("Insufficient stock");
    }
    return this._price * quantity;
  }

  checkStock(quantity) {
    return this._stock >= quantity;
  }

  updateStock(quantity) {
    if (!this.checkStock(quantity)) {
      return { success: false, message: "Insufficient stock" };
    }
    this._stock -= quantity;
    return { success: true, newStock: this._stock };
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      price: this._price,
      stock: this._stock,
      category: this.category,
      manufacturer: this.manufacturer,
      isActive: this.isActive,
      createdAt: this.createdAt,
    };
  }
}

module.exports = Product;
