import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { chefsData } from '../data/chefs';
import { menuData } from '../data/menu';
import MenuCard from '../components/MenuCard';

const ChefDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const chef = chefsData.find(c => c.id === id);

  if (!chef) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center text-center bg-ivory">
        <h1 className="text-4xl font-serif mb-4">Chef not found</h1>
        <button onClick={() => navigate('/chefs')} className="text-terracotta underline uppercase tracking-widest font-sans text-sm font-bold">Back to Chefs</button>
      </div>
    );
  }

  const chefSignatures = menuData.filter(item => chef.signatureDishes.includes(item.id));

  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <button 
          onClick={() => navigate('/chefs')}
          className="flex items-center text-warm-gray hover:text-terracotta transition-colors mb-12 text-sm font-sans uppercase tracking-widest font-bold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Chefs
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <div className="relative h-[600px] w-full overflow-hidden shadow-xl border border-ivory-dark">
              <img 
                src={chef.image} 
                alt={chef.name} 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-terracotta text-sm font-bold uppercase tracking-widest block mb-4">{chef.position}</span>
            <h1 className="text-5xl md:text-6xl font-serif mb-8 text-charcoal">{chef.name}</h1>
            
            <p className="text-2xl font-serif italic font-light text-warm-gray mb-10 leading-relaxed border-l-4 border-muted-gold pl-6 py-2">
              "{chef.philosophy}"
            </p>
            
            <div className="text-lg leading-relaxed text-charcoal mb-10 space-y-4 font-light">
              <p>{chef.biography}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-ivory-dark pt-8">
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-warm-gray mb-4">Specializations</h4>
                <ul className="space-y-2">
                  {chef.specialties.map(spec => (
                    <li key={spec} className="flex items-center text-charcoal">
                      <span className="w-1.5 h-1.5 bg-terracotta rounded-full mr-3"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-warm-gray mb-4">Awards & Recognition</h4>
                <ul className="space-y-2">
                  {chef.awards.map(award => (
                    <li key={award} className="flex items-center text-charcoal">
                      <span className="w-1.5 h-1.5 bg-muted-gold rounded-full mr-3"></span>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Signature Dishes section */}
        {chefSignatures.length > 0 && (
          <div className="bg-white p-12 border border-ivory-dark shadow-sm">
            <h2 className="text-3xl font-serif mb-2 text-center">SIGNATURE DISHES</h2>
            <p className="text-warm-gray text-center mb-10 uppercase tracking-widest text-sm font-sans">Crafted by {chef.name}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chefSignatures.map(dish => (
                <MenuCard key={dish.id} item={dish} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ChefDetails;
