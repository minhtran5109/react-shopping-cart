import { useEffect, useState } from "react";
import '../styles/Card.css'

function Card({product}) {
  return (
    <div className="card">
      <p>Name: {product.title}</p>
      <p>Price: {product.price}</p>
      <img src={product.image}></img>

    <div>
      <button>+</button>
      <input type="text" placeholder="0"></input>
      <button>-</button>
      <br />
      <button>Add to Cart</button>
    </div>

    </div>
  )
}

export default Card;
