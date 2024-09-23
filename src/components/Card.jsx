import { useEffect, useState } from "react";
import '../styles/Card.css'

function Card({product}) {
  return (
    <div className="card">
        <p>Name: {product.title}</p>
        <p>Price: {product.price}</p>
        <img src={product.image}></img>
    </div>
  )
}

export default Card;
