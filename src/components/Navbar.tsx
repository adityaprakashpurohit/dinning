import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Chefs', path: '/chefs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || !isHome || isMobileMenuOpen
      ? 'bg-ivory/95 backdrop-blur-md shadow-sm py-4'
      : 'bg-transparent py-6'
  }`;

  const textClass = `transition-colors duration-300 font-sans text-sm tracking-wider uppercase ${
    isScrolled || !isHome || isMobileMenuOpen ? 'text-charcoal hover:text-terracotta' : 'text-white hover:text-muted-gold'
  }`;
  
  const logoClass = `transition-colors duration-300 font-serif font-bold text-2xl tracking-widest ${
    isScrolled || !isHome || isMobileMenuOpen ? 'text-charcoal' : 'text-white'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className={logoClass}>
            EMBER & SPICE
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className={textClass}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/reservations" 
              className={`transition-colors duration-300 font-sans text-sm tracking-wider uppercase border px-4 py-2 ${
                isScrolled || !isHome ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white' : 'border-white text-white hover:bg-white hover:text-charcoal'
              }`}
            >
              Reserve Table
            </Link>
            <Link 
              to="/order" 
              className={`transition-colors duration-300 font-sans text-sm tracking-wider uppercase px-4 py-2 ${
                isScrolled || !isHome ? 'bg-charcoal text-white hover:bg-terracotta' : 'bg-white text-charcoal hover:bg-terracotta hover:text-white'
              }`}
            >
              Order Online
            </Link>
            
            <Link to="/cart" className={`relative flex items-center ${isScrolled || !isHome ? 'text-charcoal' : 'text-white'}`}>
              <ShoppingCart className="w-5 h-5 hover:text-terracotta transition-colors" />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-terracotta text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Toggles */}
          <div className="lg:hidden flex items-center space-x-6">
            <Link to="/cart" className={`relative flex items-center ${isScrolled || !isHome || isMobileMenuOpen ? 'text-charcoal' : 'text-white'}`}>
              <ShoppingCart className="w-5 h-5" />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-terracotta text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled || !isHome || isMobileMenuOpen ? 'text-charcoal' : 'text-white'}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-ivory shadow-lg border-t border-charcoal/10 flex flex-col items-center py-8 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-charcoal text-lg font-sans uppercase tracking-widest hover:text-terracotta"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col items-center space-y-4 pt-4 w-full px-6">
            <Link to="/reservations" className="w-full text-center border border-charcoal text-charcoal py-3 uppercase tracking-wider font-sans">
              Reserve Table
            </Link>
            <Link to="/order" className="w-full text-center bg-charcoal text-white py-3 uppercase tracking-wider font-sans">
              Order Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
