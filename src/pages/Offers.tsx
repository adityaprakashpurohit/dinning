import { useEffect } from 'react';
import { offersData } from '../data/offers';
import Button from '../components/Button';

const Offers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-6xl mb-16">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 uppercase tracking-widest">EXPERIENCES & OFFERS.</h1>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto font-light">
            "Curated menus and special experiences for when a regular meal just isn't enough."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {offersData.map(offer => (
            <div key={offer.id} className="bg-white border border-ivory-dark group hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-terracotta text-white font-sans font-bold px-4 py-2 text-lg shadow-md">
                  {offer.price}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-3xl font-serif mb-4 text-charcoal">{offer.title}</h3>
                <p className="text-warm-gray mb-8 flex-grow">{offer.description}</p>
                
                <div className="border-t border-ivory-dark pt-6 mt-auto">
                  <div className="mb-6">
                    <p className="font-sans font-bold text-xs uppercase tracking-widest text-charcoal mb-1">Validity</p>
                    <p className="text-sm text-warm-gray">{offer.validity}</p>
                  </div>
                  <div className="mb-8">
                    <p className="font-sans font-bold text-xs uppercase tracking-widest text-charcoal mb-1">Terms</p>
                    <p className="text-xs text-warm-gray">{offer.terms}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button to="/reservations" variant="primary" className="flex-1">Reserve Experience</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Offers;
