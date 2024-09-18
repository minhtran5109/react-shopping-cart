import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const currentRoute = useLocation();
  console.log(currentRoute);

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
    </nav>
  )
}

export default Navbar;
