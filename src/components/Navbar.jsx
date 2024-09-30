import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Navbar.css'

function Navbar() {
  const currentRoute = useLocation();

  const { numberOfItems } = useContext(CartContext);

  return (
    <nav>
      <ul>
        <li>
          <Link className="navbar-btn" to="/">Home</Link>
        </li>
        <li>
          <Link className="navbar-btn" to="/shop">Shop</Link>
        </li>
        <li>
          <Link className="navbar-btn" to="/about">About</Link>
        </li>
        {currentRoute.pathname === '/shop' && (
        <div className='cart'>
          <div>Cart: ({numberOfItems})</div>
          <button>Checkout</button>
        </div>
      )}
      </ul>


    </nav>
  )
}

export default Navbar;
