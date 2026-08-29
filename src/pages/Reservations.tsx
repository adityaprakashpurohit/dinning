import { useState, useEffect } from 'react';
import Button from '../components/Button';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: 'Dinner',
    requests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Get today's date formatted as YYYY-MM-DD for the min attribute
  const today = new Date().toISOString().split('T')[0];

  if (submitted) {
    return (
      <div className="bg-ivory text-charcoal min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 uppercase tracking-widest">TABLE REQUEST RECEIVED.</h1>
        <p className="text-warm-gray text-lg max-w-xl mx-auto mb-10">
          "We've received your reservation request. Our team will contact you shortly to confirm your table."
        </p>
        <Button onClick={() => setSubmitted(false)} variant="primary">Make Another Booking</Button>
      </div>
    );
  }

  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-24 pb-20">
      
      {/* Hero */}
      <section className="relative py-24 px-6 flex items-center justify-center text-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000" 
            alt="Ember & Spice Dining" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">YOUR TABLE AWAITS.</h1>
          <p className="text-xl text-ivory/80 font-light max-w-2xl mx-auto">
            "Join us for an evening of bold flavours, warm hospitality, and unforgettable moments."
          </p>
        </div>
      </section>

      {/* Form Section */}
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-white p-8 md:p-12 shadow-xl border border-ivory-dark">
          
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-sans mb-2 text-charcoal font-bold uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full bg-transparent border-b border-ivory-dark px-0 py-3 focus:outline-none focus:border-terracotta transition-colors" 
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-sans mb-2 text-charcoal font-bold uppercase tracking-widest">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="w-full bg-transparent border-b border-ivory-dark px-0 py-3 focus:outline-none focus:border-terracotta transition-colors" 
                  placeholder="Enter phone number"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-sans mb-2 text-charcoal font-bold uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full bg-transparent border-b border-ivory-dark px-0 py-3 focus:outline-none focus:border-terracotta transition-colors" 
                  placeholder="Enter email address"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              <div>
                <label className="block text-sm font-sans mb-2 text-charcoal font-bold uppercase tracking-widest">Date</label>
                <input 
                  type="date" 
                  name="date" 
                  required 
                  min={today}
                  value={formData.date} 
                  onChange={handleChange} 
                  className="w-full bg-transparent border-b border-ivory-dark px-0 py-3 focus:outline-none focus:border-terracotta transition-colors text-charcoal" 
                />
              </div>
              <div>
                <label className="block text-sm font-sans mb-2 text-charcoal font-bold uppercase tracking-widest">Time</label>
                <select 
                  name="time" 
                  required
                  value={formData.time} 
                  onChange={handleChange} 
                  className="w-full bg-transparent border-b border-ivory-dark px-0 py-3 focus:outline-none focus:border-terracotta transition-colors text-charcoal cursor-pointer"
                >
                  <option value="" disabled>Select time</option>
                  <optgroup label="Lunch">
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="1:30 PM">1:30 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                  </optgroup>
                  <optgroup label="Dinner">
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="7:30 PM">7:30 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                    <option value="8:30 PM">8:30 PM</option>
                    <option value="9:00 PM">9:00 PM</option>
                  </optgroup>
                </select>
              </div>
              <div>
                <label className="block text-sm font-sans mb-2 text-charcoal font-bold uppercase tracking-widest">Guests</label>
                <input 
                  type="number" 
                  name="guests" 
                  min="1" 
                  max="20"
                  required 
                  value={formData.guests} 
                  onChange={handleChange} 
                  className="w-full bg-transparent border-b border-ivory-dark px-0 py-3 focus:outline-none focus:border-terracotta transition-colors text-charcoal" 
                />
              </div>
            </div>

            <div className="pt-4">
              <label className="block text-sm font-sans mb-2 text-charcoal font-bold uppercase tracking-widest">Occasion</label>
              <div className="flex flex-wrap gap-3">
                {['Dinner', 'Birthday', 'Anniversary', 'Business', 'Date Night', 'Family', 'Other'].map(occ => (
                  <button
                    type="button"
                    key={occ}
                    onClick={() => setFormData({ ...formData, occasion: occ })}
                    className={`px-4 py-2 border font-sans text-xs tracking-wider uppercase transition-all ${formData.occasion === occ ? 'border-terracotta bg-terracotta text-white' : 'border-ivory-dark text-warm-gray hover:border-charcoal hover:text-charcoal'}`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <label className="block text-sm font-sans mb-2 text-charcoal font-bold uppercase tracking-widest">Special Requests</label>
              <textarea 
                name="requests" 
                rows={3}
                value={formData.requests} 
                onChange={handleChange} 
                className="w-full bg-transparent border-b border-ivory-dark px-0 py-3 focus:outline-none focus:border-terracotta transition-colors resize-none" 
                placeholder="Any allergies or special requirements?"
              />
            </div>

            <div className="pt-8 text-center">
              <Button type="submit" className="w-full md:w-auto px-12">
                Request Table
              </Button>
            </div>

          </form>

        </div>
      </div>

    </div>
  );
};

export default Reservations;
