import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Card from "../components/Card";

const BASED_API = "https://fakestoreapi.com/products"
const query = '?limit=5';

function Shop() {
  const { numberOfItems, setNumberOfItems } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await fetch(`${BASED_API}${query}`);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    loadData();
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  // console.log(products)
  return (
    <div>
  
      <h1>Shop Page</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            // <div key={product.id}>
            //   <h3>{product.title}</h3>
            // </div>
            <Card 
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>


    </div>

  )
}

export default Shop;
