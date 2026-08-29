import { useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Button from '../components/Button';
import MenuCard from '../components/MenuCard';
import { menuData } from '../data/menu';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const signatureDishes = menuData.filter(item => item.bestseller).slice(0, 6);

  return (
    <div className="bg-ivory text-charcoal">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=2000" 
            alt="Ember & Spice Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-white tracking-[0.3em] text-xs font-bold uppercase mb-6 drop-shadow-md">
            Contemporary Indian Cuisine
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-ivory mb-8 drop-shadow-lg leading-tight">
            FLAVOUR WITH FIRE.
          </h1>
          <p className="text-ivory/90 text-lg md:text-xl font-sans font-light max-w-2xl mb-12 drop-shadow-md">
            "Bold ingredients, thoughtful techniques, and dishes designed to turn every meal into a memorable experience."
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button to="/menu" variant="primary">Explore Menu</Button>
            <Button to="/reservations" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">Reserve a Table</Button>
          </div>
          
          <div className="absolute bottom-12 flex items-center text-ivory/70 text-xs tracking-widest uppercase">
            <span>Bhubaneswar</span>
            <span className="mx-2">·</span>
            <span>Odisha</span>
            <span className="mx-2">·</span>
            <span>India</span>
          </div>
        </div>
      </section>

      {/* Quick Action Bar */}
      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white shadow-xl">
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-ivory-dark group hover:bg-ivory-dark transition-colors">
            <h3 className="font-sans font-bold text-lg uppercase tracking-widest mb-3">View Menu</h3>
            <p className="text-warm-gray mb-6">Explore our signature dishes.</p>
            <Button to="/menu" variant="ghost" className="group-hover:text-terracotta">
              View <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-ivory-dark group hover:bg-ivory-dark transition-colors">
            <h3 className="font-sans font-bold text-lg uppercase tracking-widest mb-3">Reserve</h3>
            <p className="text-warm-gray mb-6">Book your table.</p>
            <Button to="/reservations" variant="ghost" className="group-hover:text-terracotta">
              Book <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="p-8 md:p-10 group hover:bg-ivory-dark transition-colors">
            <h3 className="font-sans font-bold text-lg uppercase tracking-widest mb-3">Order Online</h3>
            <p className="text-warm-gray mb-6">Enjoy Ember & Spice at home.</p>
            <Button to="/order" variant="ghost" className="group-hover:text-terracotta">
              Order <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Restaurant Introduction */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-terracotta tracking-widest text-sm font-bold uppercase mb-4 block">Welcome to Ember & Spice</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-charcoal leading-tight">
              WHERE TRADITION MEETS FIRE.
            </h2>
            <p className="text-warm-gray text-lg leading-relaxed mb-10">
              "Ember & Spice celebrates the depth of Indian cuisine through contemporary presentation, seasonal ingredients, and techniques inspired by kitchens around the world."
            </p>
            <Button to="/about" variant="outline">
              Our Story <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800" 
              alt="Chef plating food" 
              className="w-4/5 ml-auto object-cover h-[500px]"
            />
            <img 
              src="https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=600" 
              alt="Signature dish" 
              className="absolute bottom-10 left-0 w-2/3 border-8 border-ivory object-cover h-[350px] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="bg-ivory-dark py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-charcoal">DISHES WORTH TALKING ABOUT.</h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              "Some flavours deserve more than one visit."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureDishes.map((dish) => (
              <MenuCard key={dish.id} item={dish} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/menu" variant="primary">Explore Full Menu</Button>
          </div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-12 text-charcoal">A TASTE OF EMBER & SPICE.</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=400"
          ].map((img, index) => (
            <div key={index} className="relative group overflow-hidden aspect-square cursor-pointer">
              <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-sans text-xs uppercase tracking-widest font-bold border border-white px-4 py-2">Follow Us</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-charcoal text-ivory py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-16">WHAT OUR GUESTS SAY.</h2>
          <div className="mb-12">
            <div className="flex justify-center mb-6 text-muted-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
            <p className="text-2xl md:text-3xl font-serif italic font-light mb-8 leading-relaxed text-ivory/90">
              "Every dish was beautifully presented and packed with flavour. The smoked paneer was outstanding."
            </p>
            <p className="font-sans uppercase tracking-widest text-sm text-warm-gray">— Riya</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-32 px-6 flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2000" 
            alt="Dining Table" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">READY FOR SOMETHING DELICIOUS?</h2>
          <p className="text-xl text-ivory/80 mb-10 font-light">
            "Reserve your table or order your favourites from Ember & Spice."
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button to="/reservations" variant="primary">Reserve Table</Button>
            <Button to="/order" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">Order Online</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
