import { useEffect, useState } from "react";
import '../styles/Card.css'

//prevent 0 from always showing in user input

function Card({product, updateAmount, addToCart}) {
  function handleInputChange(id, value) {
    const newAmountValue = value === '' ? '' : parseInt(value, 10);
    updateAmount(id, isNaN(newAmountValue) ? '' : newAmountValue);
  }

  return (
    <div className="card">
      <p>{product.title}</p>
      <p>Price: {product.price}</p>
      <img src={product.image}></img>

    <div>
      {/* <p>Current amount: {product.amount}</p> */}
      <button onClick={() => updateAmount(product.id, product.amount === '' ? 1 : product.amount + 1)}>+</button>
      <input 
        type="number"
        value={product.amount}
        placeholder="0"
        onChange={(e) => handleInputChange(product.id, e.target.value)}
      />
      <button onClick={() => updateAmount(product.id, Math.max(product.amount-1, 1))}>-</button>
      <br />
      <button onClick={addToCart}>Add to Cart</button>
    </div>

    </div>
  )
}

export default Card;
