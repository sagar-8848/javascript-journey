// ! Inventory System with OOPS in js

class Product {
  constructor(name, price, stock) {
    this.productName = name;
    this.productPrice = price;
    this.stock = stock;
  }

  sell(salesQty) {
    if (salesQty > this.stock) return `Not Enough Stock!`;
    this.stock -= salesQty;
    return `Sold ${salesQty} units of ${this.productName}`;
  }

  restock(restockQty) {
    if (restockQty < 1) {
      return `Restock quantity must be min 1.`;
    } else {
      this.stock += restockQty;
      return `${restockQty} ${this.productName} Restocked!`;
    }
  }

  getDetails() {
    return `Product Name: ${this.productName} | Product Price: ${this.productPrice} | Stock: ${this.stock}`;
  }
}

let p1 = new Product("Iphone", 20000, 140);
let p2 = new Product("Shirt", 100, 130);
let p3 = new Product("Pant", 200, 190);
let p4 = new Product("Washing Machine", 300, 109);

class DigitalProducts extends Product {
  constructor(name, price, stock, fileSize, format) {
    super(name, price, stock);
    this.fileSize = fileSize;
    this.format = format;
  }

  download() {
    return `Downloading ${this.productName} in ${this.format}`;
  }

  getDetails() {
    return `${super.getDetails()} |  FileSize: ${this.fileSize}MB | Format: ${this.format}`;
  }
}

let d1 = new DigitalProducts("MERN Stack Course", 1500, 15, 200, "video");
let d2 = new DigitalProducts("Data Science", 2999, 10, 2000, "pdf");
let d3 = new DigitalProducts(
  "AI and Machine Learning",
  150,
  15,
  120,
  "tutorial",
);
let d4 = new DigitalProducts("Web Development", 1000, 200, 200, "video");

class InventoryManager {
  #products;
  constructor(manager) {
    this.manager_name = manager;
    this.#products = [];
  }

  // * Add Products to the Products array

  addProduct(product) {
    this.#products.push(product);
    return `${product.productName} added!`;
  }

  // * find Product

  findProduct(userQuery) {
    return this.#products.find(
      (curItem) =>
        curItem.productName.toLowerCase() === userQuery.toLowerCase(),
    );
  }

  // * sell Product

  sellProduct(name, qty) {
    const product = this.findProduct(name);

    if (!product) return `${product} not found!`;

    return product.sell(qty);
  }

  // * restock product

  restockProduct(name, qty) {
    const product = this.findProduct(name);

    if (!product) return `${product} not found to restock!`;

    return product.restock(qty);
  }

  // * get all products

  getAllProduts() {
    return this.#products.map((curProd) => curProd.getDetails());
  }

  // * remove Products

  removeProducts(name) {
    let prodBefoRem = this.#products.length;
    this.#products = this.#products.filter(
      (curItem) => curItem.productName.toLowerCase() !== name.toLowerCase(),
    );
    if (prodBefoRem.length === this.#products.length)
      return `Product Not found to remove`;

    return `${name} remvoed!`;
  }
}

let m1 = new InventoryManager("Sagar");

console.log(m1.addProduct(d1));
console.log(m1.addProduct(d2));
console.log(m1.addProduct(d3));
console.log(m1.addProduct(d4));
console.log(m1.addProduct(p1));
console.log(m1.addProduct(p3));
console.log(m1.addProduct(p4));
console.log(m1.addProduct(p2));

console.log(m1.findProduct("Washing Machines"));
console.log(m1.sellProduct("Iphone", 15));
console.log(m1.restockProduct("Iphone", 100));
console.log(m1.removeProducts("Iphone"));
console.log(m1.getAllProduts());

// * Note:

// ? use super. to call the parent's method while overiding the parent methods
// ? use this. when you are not replacing nothing with the parent one.
