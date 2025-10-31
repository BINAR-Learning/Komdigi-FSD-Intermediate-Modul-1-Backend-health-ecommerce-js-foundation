/**
 * Vitamin Class - Extends Product
 * Inheritance example untuk Health E-Commerce
 */

const Product = require("./Product");

class Vitamin extends Product {
  constructor(name, price, stock, manufacturer, dosage) {
    super(name, price, stock, "Vitamin", manufacturer);
    this.dosage = dosage; // mg per serving
  }

  getDosageInfo() {
    return `Dosage: ${this.dosage}mg per serving`;
  }

  // Override getInfo (Polymorphism)
  getInfo() {
    return `${super.getInfo()} | ${this.getDosageInfo()}`;
  }

  // Method specific untuk Vitamin
  isHighDose() {
    return this.dosage >= 1000;
  }
}

module.exports = Vitamin;
