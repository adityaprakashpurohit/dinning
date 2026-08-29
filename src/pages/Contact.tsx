import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 uppercase tracking-widest">COME FIND US.</h1>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto font-light">
            "Whether you want to book a private event, or just say hello, we'd love to hear from you."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <div className="bg-charcoal text-ivory p-10 shadow-lg h-full">
              <h2 className="text-2xl font-serif mb-10">Get in touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-terracotta mr-4 mt-1" />
                  <div>
                    <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-warm-gray mb-2">Address</h3>
                    <p className="text-lg">Ember & Spice<br/>123 Food Street<br/>Bhubaneswar, Odisha<br/>India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-terracotta mr-4 mt-1" />
                  <div>
                    <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-warm-gray mb-2">Phone</h3>
                    <p className="text-lg"><a href="tel:+919000000000" className="hover:text-terracotta transition-colors">+91 90000 00000</a></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-terracotta mr-4 mt-1" />
                  <div>
                    <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-warm-gray mb-2">Email</h3>
                    <p className="text-lg"><a href="mailto:hello@emberandspice.com" className="hover:text-terracotta transition-colors">hello@emberandspice.com</a></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-terracotta mr-4 mt-1" />
                  <div>
                    <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-warm-gray mb-2">Hours</h3>
                    <div className="text-lg">
                      <p><span className="inline-block w-24">Mon–Thu:</span> 12 PM – 10:30 PM</p>
                      <p><span className="inline-block w-24">Fri–Sun:</span> 12 PM – 11:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-ivory/20 flex flex-col sm:flex-row gap-4">
                <Button to="/reservations" variant="primary" className="flex-1">Reserve Table</Button>
                <Button to="/order" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal flex-1">Order Online</Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 border border-ivory-dark shadow-sm">
            <h2 className="text-2xl font-serif mb-8 text-charcoal">Send us a message</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 text-center h-full flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold mb-2">MESSAGE SENT</h3>
                <p>"Thank you for contacting Ember & Spice. We will get back to you shortly."</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-sans mb-2 text-charcoal font-bold uppercase tracking-widest">Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-ivory border border-ivory-dark px-4 py-3 focus:outline-none focus:border-terracotta transition-colors" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-sans mb-2 text-charcoal font-bold uppercase tracking-widest">Email</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-ivory border border-ivory-dark px-4 py-3 focus:outline-none focus:border-terracotta transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-sans mb-2 text-charcoal font-bold uppercase tracking-widest">Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-ivory border border-ivory-dark px-4 py-3 focus:outline-none focus:border-terracotta transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-sans mb-2 text-charcoal font-bold uppercase tracking-widest">Subject</label>
                  <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="w-full bg-ivory border border-ivory-dark px-4 py-3 focus:outline-none focus:border-terracotta transition-colors" />
                </div>

                <div>
                  <label className="block text-sm font-sans mb-2 text-charcoal font-bold uppercase tracking-widest">Message</label>
                  <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full bg-ivory border border-ivory-dark px-4 py-3 focus:outline-none focus:border-terracotta transition-colors resize-none"></textarea>
                </div>

                <Button type="submit" fullWidth>Send Message</Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
