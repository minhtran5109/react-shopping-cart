import { useEffect, useState } from "react";
import '../styles/Card.css'

function Card({product, updateAmount, addToCart}) {
  return (
    <div className="card">
      <p>Name: {product.title}</p>
      <p>Price: {product.price}</p>
      <img src={product.image}></img>

    <div>
      {/* <p>Current amount: {product.amount}</p> */}
      <button onClick={() => updateAmount(product.id, product.amount+1)}>+</button>
      <input 
        type="number"
        value={product.amount}
        onChange={(e) => updateAmount(product.id, parseInt(e.target.value) || 0)}
      />
      <button onClick={() => updateAmount(product.id, Math.max(product.amount-1, 1))}>-</button>
      <br />
      <button onClick={addToCart}>Add to Cart</button>
    </div>

    </div>
  )
}

//TODO: adjust input field to not always display 0 when user clears input
export default Card;
