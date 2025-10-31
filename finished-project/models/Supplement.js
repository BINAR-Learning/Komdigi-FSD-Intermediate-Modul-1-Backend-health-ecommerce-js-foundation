/**
 * Supplement Class - Extends Product
 * Another inheritance example untuk Health E-Commerce
 */

const Product = require("./Product");

class Supplement extends Product {
  constructor(name, price, stock, manufacturer, ingredients) {
    super(name, price, stock, "Supplement", manufacturer);
    this.ingredients = ingredients; // Array of strings
  }

  getIngredients() {
    return this.ingredients.join(", ");
  }

  // Override getInfo
  getInfo() {
    return `${super.getInfo()} | Ingredients: ${this.getIngredients()}`;
  }

  hasIngredient(ingredient) {
    return this.ingredients.includes(ingredient);
  }
}

module.exports = Supplement;
