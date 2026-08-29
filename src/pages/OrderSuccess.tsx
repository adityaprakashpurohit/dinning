import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Redirect if no state is present (e.g. user refreshed the page)
    if (!location.state) {
      navigate('/');
    }
  }, [location, navigate]);

  if (!location.state) return null;

  const { orderNumber, method, total, customerDetails } = location.state;

  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center">
      <div className="bg-white border border-ivory-dark p-12 max-w-2xl w-full text-center shadow-lg">
        
        <div className="flex justify-center mb-6 text-green-600">
          <CheckCircle className="w-16 h-16" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif mb-4">YOUR ORDER IS CONFIRMED.</h1>
        <p className="text-warm-gray text-lg mb-8">
          "Thank you for choosing Ember & Spice. We've received your order."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left bg-ivory-dark/30 p-6 border border-ivory-dark">
          <div>
            <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-warm-gray mb-2">Order Number</h3>
            <p className="font-sans font-bold text-lg">{orderNumber}</p>
          </div>
          <div>
            <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-warm-gray mb-2">Estimated Time</h3>
            <p className="font-sans font-bold text-lg">30–40 minutes</p>
          </div>
          <div>
            <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-warm-gray mb-2">Method</h3>
            <p className="font-sans font-bold text-lg capitalize">{method}</p>
          </div>
          <div>
            <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-warm-gray mb-2">Total Amount</h3>
            <p className="font-sans font-bold text-lg text-terracotta">₹{total}</p>
          </div>
        </div>

        <div className="text-left mb-10 border-t border-ivory-dark pt-6">
          <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-warm-gray mb-4">Customer Details</h3>
          <p className="text-charcoal font-bold mb-1">{customerDetails.name}</p>
          <p className="text-warm-gray text-sm mb-1">{customerDetails.phone}</p>
          <p className="text-warm-gray text-sm">{customerDetails.email}</p>
        </div>

        <Button to="/menu" variant="primary">
          Back to Menu
        </Button>

      </div>
    </div>
  );
};

export default OrderSuccess;
