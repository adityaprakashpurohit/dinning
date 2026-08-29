import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory pt-20 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Brand & Tagline */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="font-serif text-3xl font-bold tracking-widest mb-2">EMBER & SPICE</h2>
          <p className="font-sans text-muted-gold tracking-[0.2em] uppercase text-sm">Flavour with Fire.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Explore */}
          <div>
            <h3 className="font-sans font-bold uppercase tracking-widest mb-6 text-sm text-warm-gray">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'Menu', 'About', 'Chefs', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-terracotta transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dine */}
          <div>
            <h3 className="font-sans font-bold uppercase tracking-widest mb-6 text-sm text-warm-gray">Dine</h3>
            <ul className="space-y-4">
              <li><Link to="/reservations" className="hover:text-terracotta transition-colors">Reservations</Link></li>
              <li><Link to="/contact" className="hover:text-terracotta transition-colors">Private Dining</Link></li>
              <li><Link to="/offers" className="hover:text-terracotta transition-colors">Offers</Link></li>
              <li><Link to="/order" className="hover:text-terracotta transition-colors">Order Online</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-bold uppercase tracking-widest mb-6 text-sm text-warm-gray">Contact</h3>
            <address className="not-italic space-y-4 text-ivory/80">
              <p>123 Food Street<br/>Bhubaneswar, Odisha<br/>India</p>
              <p><a href="tel:+919000000000" className="hover:text-terracotta transition-colors">+91 90000 00000</a></p>
              <p><a href="mailto:hello@emberandspice.com" className="hover:text-terracotta transition-colors">hello@emberandspice.com</a></p>
            </address>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-sans font-bold uppercase tracking-widest mb-6 text-sm text-warm-gray">Hours</h3>
            <div className="space-y-4 text-ivory/80 mb-8">
              <p><span className="block font-bold text-ivory">Mon–Thu</span>12 PM – 10:30 PM</p>
              <p><span className="block font-bold text-ivory">Fri–Sun</span>12 PM – 11:30 PM</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-all text-xs" aria-label="Instagram">IG</a>
              <a href="#" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-all text-xs" aria-label="Facebook">FB</a>
              <a href="#" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-all text-xs" aria-label="YouTube">YT</a>
              <a href="#" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-all text-xs" aria-label="Twitter">TW</a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-b border-ivory/10 py-12 mb-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
            <h3 className="font-serif text-2xl mb-2">Get the latest from our kitchen</h3>
            <p className="text-ivory/60">Sign up for seasonal menus, special events, and offers.</p>
          </div>
          <form className="flex w-full md:w-auto max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border border-ivory/30 px-4 py-3 w-full focus:outline-none focus:border-terracotta transition-colors rounded-l-none"
              required
            />
            <button type="submit" className="bg-terracotta text-white px-6 py-3 uppercase tracking-wider font-sans text-sm hover:bg-burnt-orange transition-colors">
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-ivory/40">
          <p>© 2026 Ember & Spice. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-ivory transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-ivory transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
