import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home/Home';
import OrderDetail from './Orders/OrderDetail';
import Orders from './Orders/Orders';
import PaymentScreen from './Payment/Payment';
import Products from './Products/Products';
import Fulfillment from './Fulfillment/Fulfillment';


function App() {

  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }


  return (
    <Router>
      <div className="grid-container">
        <body>
          <div>
            <header className="header">
              <div className="brand">
                <button onClick={openMenu}>&#9776;</button>
                <a href="index.html">Olive Porcupine</a>
              </div>
              <div className="header-links">
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/Payment">Payment</Link>
                <Link to='/fulfillment'>Fulfillment</Link>
              </div>
            </header>
            <aside className="sidebar">
              <h3>Shopping Categories</h3>
              <button className="sidebar-close-button" onClick={closeMenu}>x</button>
              <ul>
                <li>
                  <a href="index.html">All Products</a>
                </li>
                <li>
                  <a href="index.html">Shirts</a>
                </li>
                <li>
                  <a href="index.html">Pants</a>
                </li>
                <li>
                  <a href="index.html">Shoes</a>
                </li>
              </ul>
            </aside>
            <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Products />} />
                <Route path="orders" element={<Orders />}></Route>
                <Route path="/order/:id" element={<OrderDetail />}></Route>
                <Route path="/Payment" element={<PaymentScreen />}></Route>
                <Route path="/Fulfillment" element={<Fulfillment />}></Route>
              </Routes>
            </main>
            <footer className="footer">
              &copy; 2023 Olive Porcupine
            </footer>
          </div>
        </body>
      </div>
    </Router>
  );
}

export default App;