import { useEffect } from 'react';
import { chefsData } from '../data/chefs';
import Button from '../components/Button';

const Chefs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-24 pb-20">
      
      <div className="container mx-auto px-6 max-w-6xl mb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 uppercase tracking-widest">MEET THE PEOPLE BEHIND THE FLAVOUR.</h1>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto font-light">
            "Our kitchen is led by visionaries who respect tradition but aren't bound by it."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {chefsData.map(chef => (
            <div key={chef.id} className="bg-white border border-ivory-dark group hover:shadow-lg transition-all duration-300">
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={chef.image} 
                  alt={chef.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-8">
                <span className="text-terracotta text-xs font-bold uppercase tracking-widest block mb-2">{chef.position}</span>
                <h3 className="text-2xl font-serif mb-4">{chef.name}</h3>
                
                <div className="mb-6">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-warm-gray mb-2">Specialties</h4>
                  <p className="text-sm text-charcoal">{chef.specialties.join(', ')}</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-warm-gray mb-2">Experience</h4>
                  <p className="text-sm text-charcoal">{chef.experience}</p>
                </div>

                <Button to={`/chefs/${chef.id}`} variant="outline" fullWidth className="group-hover:bg-charcoal group-hover:text-white transition-colors">
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Chefs;
