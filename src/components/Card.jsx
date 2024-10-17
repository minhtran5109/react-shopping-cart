import '../styles/Card.css'

//prevent 0 from always showing in user input

function Card({product, updateAmount, addToCart}) {
  function handleInputChange(id, value) {
    const newAmountValue = value === '' ? '' : parseInt(value, 10);
    updateAmount(id, isNaN(newAmountValue) ? '' : newAmountValue);
  }

  return (
    <div className="card">
      <img src={product.image}></img>
      <div className="product-info">
        <p className='product-name'>{product.title}</p>
        <p className='price'><span className='dollar-sign'>$</span>{product.price}</p>
      </div>

      <div>
        {/* <p>Current amount: {product.amount}</p> */}
        <button onClick={() => updateAmount(product.id, product.amount === '' ? 1 : product.amount + 1)} className="adjust-btn">+</button>
        <input 
          type="number"
          value={product.amount}
          placeholder="1"
          data-testid={`product-input-${product.id}`}
          onChange={(e) => handleInputChange(product.id, e.target.value)}
          className='input-number'
        />
        <button onClick={() => updateAmount(product.id, Math.max(product.amount-1, 1))} className="adjust-btn">-</button>
        <br />
        <button onClick={addToCart} className="add-to-cart">Add to Cart</button>
      </div>

    </div>
  )
}

export default Card;
