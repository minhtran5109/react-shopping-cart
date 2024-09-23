import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const currentRoute = useLocation();

  const { numberOfItems } = useContext(CartContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      {currentRoute.pathname === '/shop' && (
        <div>
          <span>Cart: ({numberOfItems})</span>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
