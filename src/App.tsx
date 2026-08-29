import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages (Stubs for now)
import Home from './pages/Home';
import Menu from './pages/Menu';
import MenuItemDetails from './pages/MenuItemDetails';
import About from './pages/About';
import Chefs from './pages/Chefs';
import ChefDetails from './pages/ChefDetails';
import Gallery from './pages/Gallery';
import Reservations from './pages/Reservations';
import Order from './pages/Order';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-sans bg-ivory text-charcoal">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:id" element={<MenuItemDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/chefs" element={<Chefs />} />
              <Route path="/chefs/:id" element={<ChefDetails />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/order" element={<Order />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order/success" element={<OrderSuccess />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
