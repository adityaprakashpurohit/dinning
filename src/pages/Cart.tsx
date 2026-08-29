import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { CartItem } from '../context/CartContext';
import Button from '../components/Button';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartItemCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subtotal = getCartTotal();
  const taxes = Math.round(subtotal * 0.05);
  const packaging = cart.length > 0 ? 30 : 0;
  const delivery = cart.length > 0 ? 50 : 0;
  const total = subtotal + taxes + packaging + delivery;

  if (cart.length === 0) {
    return (
      <div className="bg-ivory text-charcoal min-h-screen pt-32 pb-20 px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 uppercase tracking-widest">Your table is set.<br/>Your cart isn't.</h1>
        <p className="text-warm-gray text-lg mb-10 font-light">"Add something delicious to get started."</p>
        <Button to="/menu" variant="primary">Explore Menu</Button>
      </div>
    );
  }

  const renderCustomizations = (item: CartItem) => {
    if (!item.customizations) return null;
    
    const parts = [];
    if (item.customizations.portion && item.customizations.portion !== 'Regular') {
      parts.push(item.customizations.portion);
    }
    if (item.customizations.spice) {
      parts.push(`${item.customizations.spice} Spice`);
    }
    if (item.customizations.extras && item.customizations.extras.length > 0) {
      parts.push(...item.customizations.extras);
    }
    
    if (parts.length === 0) return null;
    
    return (
      <p className="text-sm text-warm-gray mt-1">
        {parts.join(', ')}
      </p>
    );
  };

  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center">YOUR ORDER</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-ivory-dark">
              <h2 className="font-sans font-bold uppercase tracking-widest text-sm text-warm-gray">Items ({getCartItemCount()})</h2>
              <Link to="/menu" className="text-sm font-sans uppercase tracking-widest text-terracotta hover:text-burnt-orange font-bold flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" /> Add More
              </Link>
            </div>

            <div className="space-y-6">
              {cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex flex-col sm:flex-row gap-6 bg-white p-6 border border-ivory-dark relative shadow-sm group">
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <Link to={`/menu/${item.id}`} className="font-serif text-xl font-bold hover:text-terracotta transition-colors">{item.name}</Link>
                      <span className="font-sans font-bold text-lg">₹{item.finalPrice * item.quantity}</span>
                    </div>
                    {renderCustomizations(item)}
                    
                    <div className="flex justify-between items-end mt-6">
                      <div className="flex items-center border border-ivory-dark">
                        <button 
                          className="p-2 hover:bg-ivory transition-colors text-charcoal disabled:opacity-50"
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.customizations)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-bold font-sans text-sm">{item.quantity}</span>
                        <button 
                          className="p-2 hover:bg-ivory transition-colors text-charcoal"
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.customizations)}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id, item.customizations)}
                        className="text-warm-gray hover:text-red-500 transition-colors flex items-center text-sm font-sans tracking-widest uppercase"
                      >
                        <Trash2 className="w-4 h-4 mr-2" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-ivory-dark p-8 shadow-sm sticky top-24">
              <h2 className="font-sans font-bold uppercase tracking-widest text-sm text-warm-gray mb-6 pb-4 border-b border-ivory-dark">Summary</h2>
              
              <div className="space-y-4 mb-6 text-sm font-sans tracking-wide">
                <div className="flex justify-between">
                  <span className="text-warm-gray">Subtotal</span>
                  <span className="font-bold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-gray">Taxes (5%)</span>
                  <span className="font-bold">₹{taxes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-gray">Packaging</span>
                  <span className="font-bold">₹{packaging}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-gray">Delivery</span>
                  <span className="font-bold">₹{delivery}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-4 border-t border-ivory-dark mb-8">
                <span className="font-serif text-xl">Total</span>
                <span className="font-sans text-2xl font-bold text-terracotta">₹{total}</span>
              </div>
              
              <Button onClick={() => navigate('/checkout')} fullWidth className="flex justify-between items-center group">
                Proceed to Checkout
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
