import { useEffect } from 'react';
import Button from '../components/Button';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ivory text-charcoal min-h-screen">
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Ember & Spice Kitchen" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">FOOD WITH A POINT OF VIEW.</h1>
          <p className="text-xl text-ivory/80 font-light max-w-2xl mx-auto">
            "Discover the story, people, and passion behind Ember & Spice."
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6 text-charcoal uppercase tracking-widest text-sm">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 text-charcoal leading-tight">
              A JOURNEY OF FLAVOUR.
            </h3>
            <div className="text-warm-gray text-lg leading-relaxed space-y-6">
              <p>
                Founded in 2026, Ember & Spice was born from a simple belief: that Indian cuisine is not a monolith, but a dynamic, evolving art form. 
              </p>
              <p>
                We set out to create a space where the warmth of traditional hospitality meets the precision of modern culinary techniques. Our founders, inspired by their travels across the diverse culinary landscape of India, wanted to capture the essence of regional flavours while presenting them in a contemporary context.
              </p>
              <p>
                The result is a menu that respects the past but isn't bound by it. We embrace the fire of the tandoor, the complexity of slow-cooked gravies, and the vibrant freshness of seasonal produce to create dishes that are both comforting and surprising.
              </p>
            </div>
          </div>
          <div className="relative h-full min-h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&q=80&w=800" 
              alt="Spices" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-charcoal text-ivory py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-sans uppercase tracking-widest text-warm-gray mb-8">Our Philosophy</h2>
          <p className="text-3xl md:text-5xl font-serif italic font-light leading-relaxed text-ivory/90">
            "Great food begins with great ingredients, but it becomes memorable through care."
          </p>
        </div>
      </section>

      {/* Ingredients & Kitchen */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <img src="https://images.unsplash.com/photo-1615486171448-4fd1fb14c466?auto=format&fit=crop&q=80&w=800" alt="Fresh ingredients" className="w-full h-[400px] object-cover mb-8" />
            <h3 className="text-2xl font-serif mb-4">Our Ingredients</h3>
            <p className="text-warm-gray leading-relaxed">
              We source our ingredients with meticulous care. From hand-picked seasonal produce from local farmers to premium spices sourced directly from single-estate growers in Kerala and Kashmir, every element on your plate has a story of quality and sustainability.
            </p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800" alt="Kitchen" className="w-full h-[400px] object-cover mb-8" />
            <h3 className="text-2xl font-serif mb-4">Our Kitchen</h3>
            <p className="text-warm-gray leading-relaxed">
              At the heart of Ember & Spice is our open kitchen. It's a theatre of fire and flavour where our chefs combine traditional methods like the charcoal tandoor with modern precision to extract the maximum depth from every ingredient.
            </p>
          </div>
        </div>

        <div className="text-center bg-ivory-dark p-16 border border-charcoal/10">
          <h3 className="text-2xl font-serif mb-4">Our Community</h3>
          <p className="text-warm-gray leading-relaxed max-w-2xl mx-auto mb-8">
            A restaurant is more than a place to eat; it's a gathering space. We are proud to be part of the Bhubaneswar community, actively supporting local food initiatives and fostering an environment of genuine hospitality where every guest is treated like family.
          </p>
          <Button to="/reservations" variant="outline">Join Us for Dinner</Button>
        </div>
      </section>

    </div>
  );
};

export default About;
