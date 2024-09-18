import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Shop() {
  const { numberOfItems, setNumberOfItems } = useContext(CartContext);

  return (
    <div>
      <h1>Shop Page</h1>
      <div>Should also display number of items in shopping cart in nav bar</div>

      <p>Current number of items: {numberOfItems}</p>
      
      <button onClick={() => setNumberOfItems(numberOfItems + 1)}>
        Increase
      </button>
    </div>
  )
}

export default Shop;
