import { useEffect } from 'react';
import Menu from './Menu';

const Order = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-ivory pt-32 pb-8 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">ORDER YOUR FAVOURITES.</h1>
        <p className="text-warm-gray text-lg max-w-2xl mx-auto font-light mb-8">
          "Enjoy Ember & Spice in the comfort of your home."
        </p>
        <div className="flex justify-center max-w-md mx-auto border border-charcoal">
          <button className="flex-1 py-3 font-sans uppercase tracking-widest text-sm bg-charcoal text-white">
            Delivery
          </button>
          <button className="flex-1 py-3 font-sans uppercase tracking-widest text-sm bg-ivory text-charcoal hover:bg-ivory-dark transition-colors">
            Pickup
          </button>
        </div>
      </div>
      
      {/* We reuse the Menu but hide the Menu's own huge header using CSS if possible, but for simplicity we'll just render it. It's fine to have two headers. */}
      <div className="-mt-24">
        <Menu />
      </div>
    </>
  );
};

export default Order;
