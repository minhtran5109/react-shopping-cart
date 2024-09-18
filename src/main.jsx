import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Home from './components/Home'
import Shop from './components/Shop.jsx'
import About from './components/About.jsx'
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
    <RouterProvider router={router} />
  </StrictMode>,
)
