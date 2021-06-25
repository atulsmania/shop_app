export default function reducer(products, action) {
  if (action.type === "add") {
    products[action.payload].inCart = true;
  }
  if (action.type === "remove") {
    products[action.payload].inCart = false;
  }
  return [...products];
}
