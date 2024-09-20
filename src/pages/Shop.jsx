import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const BASED_API = "https://fakestoreapi.com/products/"

async function fetchProduct(query = '') {
  const response = await fetch(`${BASED_API}/${query}`);
  const product = await response.json();
  return new Promise((resolve) => {
    resolve({
      category: product.category,
      name: product.title,
      img_src: product.image,
      description: product.description,
      price: product.price,
    })
  })
  // return product;
}

function Shop() {
  const { numberOfItems, setNumberOfItems } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const result = await fetchProduct(1);
      setProductData(result);
      setLoading(false);
    }
    loadData();
  }, [])
  console.log(productData);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Shop Page</h1>

      <div>
        <p>Name: {productData.name}</p>
        <p>Price: {productData.price}</p>
        <img src={productData.img_src}></img>
      </div>

      <p>Current number of items: {numberOfItems}</p>
      <button onClick={() => setNumberOfItems(numberOfItems + 1)}>
        Increase
      </button>
    </div>
  )
}

export default Shop;
