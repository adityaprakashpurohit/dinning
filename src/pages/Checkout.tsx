import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';

const Checkout = () => {
  const { cart, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  const [method, setMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    house: '',
    street: '',
    area: '',
    city: '',
    pin: '',
    time: 'ASAP'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (cart.length === 0) {
      navigate('/cart');
    }
  }, [cart, navigate]);

  const subtotal = getCartTotal();
  const taxes = Math.round(subtotal * 0.05);
  const packaging = cart.length > 0 ? 30 : 0;
  const deliveryFee = method === 'delivery' ? 50 : 0;
  const total = subtotal + taxes + packaging + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    clearCart();
    navigate('/order/success', { 
      state: { 
        orderNumber: `ES-${new Date().getFullYear()}-${Math.floor(Math.random() * 90000) + 10000}`,
        method,
        total,
        customerDetails: formData
      } 
    });
  };

  if (cart.length === 0) return null;

  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center">CHECKOUT</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Details Form */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Step 1: Customer Details */}
            <section>
              <h2 className="font-sans font-bold uppercase tracking-widest text-sm text-warm-gray mb-6 pb-4 border-b border-ivory-dark">1. Customer Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-sans mb-2 text-charcoal">Full Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-white border border-ivory-dark px-4 py-3 focus:outline-none focus:border-terracotta transition-colors shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-sans mb-2 text-charcoal">Phone Number</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full bg-white border border-ivory-dark px-4 py-3 focus:outline-none focus:border-terracotta transition-colors shadow-sm" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-sans mb-2 text-charcoal">Email Address</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-white border border-ivory-dark px-4 py-3 focus:outline-none focus:border-terracotta transition-colors shadow-sm" />
                </div>
              </div>
            </section>

            {/* Step 2: Method */}
            <section>
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-ivory-dark">
                <h2 className="font-sans font-bold uppercase tracking-widest text-sm text-warm-gray">2. Delivery / Pickup</h2>
              </div>
              
              <div className="flex gap-4 mb-8">
                <button 
                  type="button"
                  onClick={() => setMethod('delivery')}
                  className={`flex-1 py-4 border text-center font-sans uppercase tracking-widest text-sm transition-all ${method === 'delivery' ? 'border-charcoal bg-charcoal text-white' : 'border-ivory-dark bg-white hover:border-charcoal'}`}
                >
                  Delivery
                </button>
                <button 
                  type="button"
                  onClick={() => setMethod('pickup')}
                  className={`flex-1 py-4 border text-center font-sans uppercase tracking-widest text-sm transition-all ${method === 'pickup' ? 'border-charcoal bg-charcoal text-white' : 'border-ivory-dark bg-white hover:border-charcoal'}`}
                >
                  Pickup
                </button>
              </div>

              {method === 'delivery' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 border border-ivory-dark shadow-sm">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-sans mb-2 text-charcoal">House / Flat No.</label>
                    <input type="text" name="house" required value={formData.house} onChange={handleInputChange} className="w-full bg-ivory border border-ivory-dark px-4 py-3 focus:outline-none focus:border-terracotta transition-colors" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-sans mb-2 text-charcoal">Street / Area</label>
                    <input type="text" name="street" required value={formData.street} onChange={handleInputChange} className="w-full bg-ivory border border-ivory-dark px-4 py-3 focus:outline-none focus:border-terracotta transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-sans mb-2 text-charcoal">City</label>
                    <input type="text" name="city" required value={formData.city} onChange={handleInputChange} className="w-full bg-ivory border border-ivory-dark px-4 py-3 focus:outline-none focus:border-terracotta transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-sans mb-2 text-charcoal">PIN Code</label>
                    <input type="text" name="pin" required value={formData.pin} onChange={handleInputChange} className="w-full bg-ivory border border-ivory-dark px-4 py-3 focus:outline-none focus:border-terracotta transition-colors" />
                  </div>
                </div>
              ) : (
                <div className="bg-white p-6 border border-ivory-dark shadow-sm flex flex-col gap-4">
                  <p className="text-warm-gray text-sm">Estimated preparation time: <strong className="text-charcoal font-bold">25–35 min</strong></p>
                  <div>
                    <label className="block text-sm font-sans mb-2 text-charcoal">Pickup Time</label>
                    <select name="time" value={formData.time} onChange={handleInputChange} className="w-full bg-ivory border border-ivory-dark px-4 py-3 focus:outline-none focus:border-terracotta transition-colors uppercase tracking-wider text-sm font-sans cursor-pointer">
                      <option value="ASAP">As soon as possible</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                    </select>
                  </div>
                </div>
              )}
            </section>
            
            {/* Step 4: Payment */}
            <section>
              <h2 className="font-sans font-bold uppercase tracking-widest text-sm text-warm-gray mb-6 pb-4 border-b border-ivory-dark">3. Payment</h2>
              <div className="bg-white p-6 border border-ivory-dark shadow-sm">
                <label className="flex items-center gap-4 cursor-pointer">
                  <div className="w-5 h-5 rounded-full border border-terracotta flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-terracotta rounded-full" />
                  </div>
                  <span className="font-sans text-charcoal font-bold">Cash on Delivery / Pay at Restaurant</span>
                </label>
                <p className="text-xs text-warm-gray mt-4">
                  * Note: This is a simulated checkout. No real payment is processed.
                </p>
              </div>
            </section>

          </div>

          {/* Order Review Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-ivory-dark p-8 shadow-sm sticky top-24">
              <h2 className="font-sans font-bold uppercase tracking-widest text-sm text-warm-gray mb-6 pb-4 border-b border-ivory-dark">Order Review</h2>
              
              <div className="space-y-4 mb-6 text-sm font-sans tracking-wide max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-ivory-dark pb-4 last:border-0 last:pb-0">
                    <div className="pr-4">
                      <span className="font-bold text-charcoal block mb-1">{item.name}</span>
                      <span className="text-warm-gray text-xs">Qty: {item.quantity}</span>
                    </div>
                    <span className="font-bold">₹{item.finalPrice * item.quantity}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 mb-6 pt-4 border-t border-ivory-dark text-sm font-sans tracking-wide">
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
                {method === 'delivery' && (
                  <div className="flex justify-between">
                    <span className="text-warm-gray">Delivery</span>
                    <span className="font-bold">₹{deliveryFee}</span>
                  </div>
                )}
              </div>
              
              <div className="flex justify-between items-center py-4 border-t border-ivory-dark mb-8">
                <span className="font-serif text-xl">Total</span>
                <span className="font-sans text-2xl font-bold text-terracotta">₹{total}</span>
              </div>
              
              <Button type="submit" fullWidth>
                Place Order
              </Button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Checkout;
