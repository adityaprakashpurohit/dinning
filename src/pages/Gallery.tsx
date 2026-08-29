import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryData, galleryCategories } from '../data/gallery';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredGallery = activeCategory === 'All' 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex(prev => (prev! > 0 ? prev! - 1 : filteredGallery.length - 1));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex(prev => (prev! < filteredGallery.length - 1 ? prev! + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 uppercase tracking-widest">GALLERY</h1>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto font-light">
            "A visual taste of Ember & Spice."
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 border font-sans text-xs tracking-widest uppercase transition-all ${
                activeCategory === category 
                  ? 'border-charcoal bg-charcoal text-white' 
                  : 'border-ivory-dark text-warm-gray hover:border-charcoal hover:text-charcoal'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredGallery.map((img, index) => (
            <div 
              key={img.id} 
              className="break-inside-avoid cursor-pointer group relative overflow-hidden"
              onClick={() => setLightboxIndex(index)}
            >
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-sans text-sm uppercase tracking-wider font-bold">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center backdrop-blur-sm transition-opacity">
          
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-terracotta transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-10 h-10" />
          </button>
          
          <button 
            onClick={() => setLightboxIndex(prev => (prev! > 0 ? prev! - 1 : filteredGallery.length - 1))}
            className="absolute left-6 text-white hover:text-terracotta transition-colors z-10 p-2"
            aria-label="Previous"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          
          <div className="max-w-5xl max-h-[80vh] px-20 relative outline-none flex flex-col items-center">
            <img 
              src={filteredGallery[lightboxIndex].url} 
              alt={filteredGallery[lightboxIndex].caption}
              className="max-w-full max-h-[75vh] object-contain shadow-2xl"
            />
            <p className="text-white mt-6 font-sans tracking-widest uppercase text-sm">
              {filteredGallery[lightboxIndex].caption} 
              <span className="text-white/50 ml-4">
                {lightboxIndex + 1} / {filteredGallery.length}
              </span>
            </p>
          </div>
          
          <button 
            onClick={() => setLightboxIndex(prev => (prev! < filteredGallery.length - 1 ? prev! + 1 : 0))}
            className="absolute right-6 text-white hover:text-terracotta transition-colors z-10 p-2"
            aria-label="Next"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

        </div>
      )}
    </div>
  );
};

export default Gallery;
