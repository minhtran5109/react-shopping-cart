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
      const productsWithAmounts = data.map(product => ({
        ...product,
        amount: '',
      }));
      setProducts(productsWithAmounts);
      setLoading(false);
    };

    loadData();
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(products);

  function updateAmount(productId, newAmountValue) {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId 
        ? { ...product, amount: newAmountValue}
        : product
        )
    );
  }

  function resetAmount(productId) {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId 
        ? { ...product, amount: '' }
        : product
        )
    );
  }

  function addToCart(product) {
    const productAmount = product.amount === '' ? 1 : product.amount;
    setNumberOfItems(numberOfItems + productAmount)
    resetAmount(product.id)
  }

  return (
    <div className="page">
  
      <h1>Shop Page</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <Card 
              key={product.id}
              product={product}
              updateAmount={updateAmount}
              addToCart= {() => addToCart(product)}
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
