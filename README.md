# 🎯 health-ecommerce-js-foundation

> **JavaScript Lanjutan & OOP untuk Health E-Commerce Backend**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)](https://developer.mozilla.org/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

Foundation JavaScript & OOP untuk membangun Health E-Commerce backend yang scalable dan maintainable.

---

## 📦 Apa yang Ada di Repository Ini?

Repository ini berisi **2 versi project**:

```
health-ecommerce-js-foundation/
├── README.md (Ini file yang kamu baca)
├── starter-project/     # 📝 Untuk practice (dengan TODO)
│   ├── README.md
│   ├── package.json
│   ├── models/
│   ├── services/
│   └── test.js
└── finished-project/    # ✅ Reference implementation
    ├── README.md
    ├── package.json
    ├── models/
    ├── services/
    └── test.js
```

**Pilih mana?**

- **Starter** - Jika kamu mau **belajar dengan coding** (RECOMMENDED!)
- **Finished** - Jika butuh **reference** atau stuck

---

## 🚀 Quick Start (Untuk Newbie)

### Option 1: Practice dengan Starter Project

```bash
# 1. Clone repository ini
git clone https://github.com/your-username/health-ecommerce-js-foundation.git

# 2. Masuk ke folder repository
cd health-ecommerce-js-foundation

# 3. Masuk ke starter-project
cd starter-project

# 4. Install dependencies
npm install

# 5. Jalankan tests
npm test

# Kamu akan lihat TODO yang perlu dikerjakan!
```

### Option 2: Lihat Reference Implementation

```bash
# 1. Clone repository (jika belum)
git clone https://github.com/your-username/health-ecommerce-js-foundation.git

# 2. Masuk ke folder repository
cd health-ecommerce-js-foundation

# 3. Masuk ke finished-project
cd finished-project

# 4. Install dependencies
npm install

# 5. Jalankan tests
npm test

# Semua tests akan pass! ✅
```

---

## 🎯 Apa yang Akan Kamu Pelajari?

**Modul 1** adalah foundation untuk semua backend modules!

### Konsep yang Dipelajari:

- ✅ **ES6+ Features** - async/await, destructuring, spread/rest, arrow functions
- ✅ **OOP Principles** - Class, Inheritance, Encapsulation, Polymorphism
- ✅ **Design Patterns** - Factory, Singleton, Observer
- ✅ **Clean Code** - Organized, reusable, maintainable

### Apa yang Dibangun:

- **Product Classes** (Vitamin, Supplement, Equipment) dengan inheritance
- **Factory Pattern** untuk create products by type
- **Service Layer** dengan OOP architecture

**Output:** Foundation classes yang akan jadi basis untuk Mongoose schemas di Modul 2!

---

## 📁 Struktur Starter Project

```
starter-project/
├── README.md           # Setup guide
├── package.json        # Dependencies
├── test.js            # Test script (working!)
├── models/            # ⚠️ TODO: Implement classes
│   ├── Product.js     # Base class
│   ├── Vitamin.js     # Extends Product
│   └── Supplement.js  # Extends Product
└── services/          # ⚠️ TODO: Design patterns
    └── ProductFactory.js  # Factory pattern
```

**TODOs:**

- [ ] `models/Product.js` - Create base class dengan constructor, getters/setters
- [ ] `models/Vitamin.js` - Extend Product, add dosage property
- [ ] `models/Supplement.js` - Extend Product, add ingredients
- [ ] `services/ProductFactory.js` - Implement factory pattern

---

## 📁 Struktur Finished Project

```
finished-project/
├── README.md           # Setup guide + explanations
├── package.json        # Dependencies
├── test.js            # Complete test suite
├── models/            # ✅ Complete implementations
│   ├── Product.js     # Base class with full methods
│   ├── Vitamin.js     # Inheritance example
│   └── Supplement.js  # Another inheritance
└── services/          # ✅ Design patterns
    └── ProductFactory.js  # Factory pattern complete
```

**All implemented:**

- ✅ Product class dengan encapsulation (private fields)
- ✅ Vitamin & Supplement dengan inheritance
- ✅ Factory pattern untuk product creation
- ✅ All tests passing

---

## 🧪 Testing

### Run Tests

```bash
# Di starter-project atau finished-project:
npm test

# atau
node test.js
```

**Starter Output:**

```
⚠️  TODO: Implement Product class
⚠️  TODO: Implement Vitamin class
```

**Finished Output:**

```
✅ Product class test passed
✅ Vitamin inheritance test passed
✅ Supplement inheritance test passed
✅ Factory pattern test passed
🎉 All tests passed!
```

---

## 🔗 Hubungan dengan Modul Lain

**Modul 1 (This!)** → Foundation OOP  
**Modul 2** → Classes become Mongoose schemas  
**Modul 3** → Schemas used in Express controllers  
**Modul 4** → Security added to API  
**Modul 5** → External integrations

**One Health E-Commerce system built progressively!**

---

## 💡 Tips Sukses

1. **Start dengan starter-project** - Practice makes perfect!
2. **Kerjakan step-by-step** - Don't rush
3. **Run tests frequently** - See progress
4. **Compare dengan finished** - Only when stuck
5. **Understand, don't copy** - Type code yourself

---

## 🐛 Troubleshooting

### Error: "Cannot find module"

```bash
npm install
```

### Tests not running

```bash
# Make sure you're in correct directory
cd starter-project  # or finished-project
npm test
```

### Syntax errors

- Check quotes consistency
- Ensure semicolons where needed
- Review class syntax

---

## 📚 Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)

---

## 🚀 Next Steps

After completing this module:

1. ✅ **Modul 2** - Convert these classes to MongoDB schemas
2. ✅ **Modul 3** - Use in Express API
3. ✅ **Modul 4** - Add authentication
4. ✅ **Modul 5** - External integrations

---

**Happy Learning! 🎯**

_Part of Health E-Commerce Backend Series_  
_Modul 1 - JavaScript Fundamentals & OOP_
