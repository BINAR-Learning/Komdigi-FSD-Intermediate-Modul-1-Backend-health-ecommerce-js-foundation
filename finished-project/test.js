/**
 * Test Script untuk Product Management OOP
 * Health E-Commerce - Modul 1
 *
 * Catatan: Classes yang dibuat di sini akan diintegrasikan dengan:
 * - Modul 2: MongoDB schemas (Product schema based on this class)
 * - Modul 3: Express API (Controllers use these patterns)
 * - Modul 4: Authentication (User class similar structure)
 */

const Product = require("./models/Product");
const Vitamin = require("./models/Vitamin");
const Supplement = require("./models/Supplement");
const ProductFactory = require("./services/ProductFactory");

console.log(" === Health E-Commerce - Product Management OOP ===\n");

// Test 1: Base Product class
console.log(" 1. Testing Product Base Class (Encapsulation):");
const product = new Product(
  "Termometer Digital",
  75000,
  60,
  "Medical Equipment",
  "PT Aiman"
);
console.log(product.getInfo());
console.log(
  `   Check stock untuk 5 units: ${
    product.checkStock(5) ? " Available" : "Not enough"
  }`
);
console.log(
  `   Total untuk 3 units: Rp ${product
    .calculateTotal(3)
    .toLocaleString("id-ID")}`
);
console.log("");

// Test 2: Inheritance - Vitamin
console.log(" 2. Testing Inheritance (Vitamin extends Product):");
const vitaminC = new Vitamin("Vitamin C 1000mg", 85000, 50, "PT Aiman", 1000);
console.log(vitaminC.getInfo()); // Should show dosage!
console.log(`   High dose vitamin? ${vitaminC.isHighDose() ? "Yes" : "No"}`);
console.log("");

// Test 3: Inheritance - Supplement
console.log(" 3. Testing Inheritance (Supplement extends Product):");
const omega3 = new Supplement("Omega-3 Fish Oil", 200000, 25, "PT Aila", [
  "Fish Oil",
  "EPA",
  "DHA",
]);
console.log(omega3.getInfo());
console.log(`   Has EPA? ${omega3.hasIngredient("EPA") ? "Yes" : "No"}`);
console.log("");

// Test 4: Polymorphism
console.log(" 4. Testing Polymorphism (Same interface, different outputs):");
function displayProduct(product) {
  console.log(`   ${product.getInfo()}`);
}
displayProduct(vitaminC); // Vitamin version
displayProduct(omega3); // Supplement version
console.log("");

// Test 5: Factory Pattern
console.log(" 5. Testing Factory Pattern:");
const vitD = ProductFactory.createProduct("vitamin", {
  name: "Vitamin D3 2000 IU",
  price: 120000,
  stock: 30,
  manufacturer: "PT Aila",
  dosage: 2000,
});
console.log(`   Created via Factory: ${vitD.getInfo()}`);

// Bulk create
const bulkProducts = ProductFactory.createMultiple([
  {
    type: "vitamin",
    data: {
      name: "Vitamin B Complex",
      price: 95000,
      stock: 45,
      manufacturer: "PT Aiman",
      dosage: 500,
    },
  },
  {
    type: "supplement",
    data: {
      name: "Probiotics",
      price: 165000,
      stock: 35,
      manufacturer: "PT Aila",
      ingredients: ["Lactobacillus", "Bifidobacterium"],
    },
  },
]);
console.log(`   Bulk created: ${bulkProducts.length} products`);
console.log("");

// Test 6: toJSON untuk API response
console.log(" 6. Testing toJSON (untuk API responses):");
console.log("   Product as JSON:", JSON.stringify(vitaminC.toJSON(), null, 2));
console.log("");

console.log(" All OOP tests passed!");
console.log("\n  Next Steps:");
console.log("   → Modul 2: Convert these classes to Mongoose schemas");
console.log("   → Modul 3: Use in Express controllers untuk CRUD API");
console.log("   → Modul 4: Add User class dengan authentication");
console.log("   → Final Project: Complete Health E-Commerce system!\n");
