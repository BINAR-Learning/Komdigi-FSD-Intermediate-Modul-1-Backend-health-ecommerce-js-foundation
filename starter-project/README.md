# Starter Project - Product Management System (OOP)

## Deskripsi

Starter project untuk latihan JavaScript Lanjutan & OOP dalam konteks **Health E-Commerce Backend**.

**Catatan Penting:** Project ini adalah **tahap awal** dari Health E-Commerce system. Classes yang kamu buat di sini (Product, Vitamin, Supplement) akan menjadi foundation untuk:

- **Modul 2:** Mongoose schemas (based on these classes)
- **Modul 3:** Express controllers (use these patterns)
- **Modul 4:** User class untuk authentication

Lengkapi file-file dengan implementasi OOP concepts dan design patterns.

## Tugas

###  1. Lengkapi `models/Product.js`

Buat base class Product dengan:

- Constructor: name, price, stock, manufacturer
- Private fields: `#price`, `#stock`
- Getters & Setters dengan validation
- Method `getInfo()`, `calculateShipping()`, `checkStock(quantity)`
- Observer support: `subscribe(observer)`, `notifyObservers(data)`

###  2. Lengkapi `models/Vitamin.js`

Buat class Vitamin extends Product dengan:

- Additional property: dosage
- Override `calculateShipping()` return 5000
- Method `getDosageInfo()`

###  3. Lengkapi `models/Supplement.js`

Buat class Supplement extends Product dengan:

- Additional property: ingredients (array)
- Override `calculateShipping()` return 7500
- Method `getIngredients()`

###  4. Lengkapi `services/ProductFactory.js`

Implement Factory Pattern:

- Static method `createProduct(type, data)`
- Support types: 'vitamin', 'supplement'
- Return appropriate class instance

###  5. Lengkapi `services/Inventory.js`

Implement Singleton Pattern:

- Private static instance
- Private products array
- Methods: `addProduct()`, `getAllProducts()`, `getProductsByCategory()`, `getTotalValue()`

###  6. Lengkapi `services/OrderService.js`

Implement Order Processing:

- Static method `processOrder(product, quantity)`
- Calculate subtotal, shipping, total
- Update product stock
- Return order details

###  7. Lengkapi `observers/EmailNotifier.js`

Implement Observer Pattern:

- Method `update(data)` untuk receive notifications
- Log email notification ketika stock berubah

##  Testing

```bash
node test.js
```

Semua tests harus pass!

##  Tips

1. Start dengan Product base class
2. Test inheritance satu-satu
3. Implement design patterns step-by-step
4. Use finished-project untuk reference (jangan langsung copy!)

**Selamat mengerjakan! **
