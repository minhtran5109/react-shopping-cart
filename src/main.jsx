import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Home from './pages/Home'
import Shop from './pages/Shop.jsx'
import About from './pages/About.jsx'
import { CartProvider } from './context/CartContext.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Common layout that includes the Navbar
    children: [
      { path: "/", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "about", element: <About /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
