import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div>
      {/* Common Navigation Bar */}
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

      {/* Render the children routes */}
      <Outlet />
    </div>
  )
}

export default App
