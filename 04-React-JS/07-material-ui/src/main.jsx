import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './screens/Home.jsx'
import Product from './screens/Product.jsx'
import SingleProduct from './screens/SingleProduct.jsx'
import Navbar from './components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/single-product/:id' element={<SingleProduct />} />
    </Routes>
  </BrowserRouter>
)
