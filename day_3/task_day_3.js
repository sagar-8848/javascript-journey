// ? task  (Array + Object)

const producsts = [
  {
    name: "Laptop",
    price: 1000,
    category: "Electronics",
    inStock: true,
  },
  {
    name: "Shirt",
    price: 100,
    category: "clothing",
    inStock: false,
  },
  {
    name: "Carrot",
    price: 10,
    category: "groceries",
    inStock: true,
  },
];

// * task 1 --  Filter only products that are inStock: true

// ? the long one
const filteredOne = producsts.filter((curProd) => {
  return curProd.inStock === true;
});

const prodNames = filteredOne.map((curProd) => curProd.name);
console.log(prodNames);

// the short one 
// const ProductNames = producsts.filter((curProd)=> curProd.inStock === true).map((curProd)=> curProd.name);


producsts.forEach((curProd) => {
  console.log(
    `Product : ${curProd.name} | Price : ${curProd.price} | Category : ${curProd.category}`,
  );
});

console.log(Object.keys(producsts[0]));
