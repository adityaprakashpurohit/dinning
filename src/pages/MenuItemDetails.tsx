import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Leaf, Flame, Star, ArrowLeft, Minus, Plus } from 'lucide-react';
import { menuData } from '../data/menu';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';

const MenuItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [portion, setPortion] = useState('Regular');
  const [spice, setSpice] = useState('Medium');
  const [extras, setExtras] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const item = menuData.find(d => d.id === id);

  if (!item) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl font-serif mb-4">Dish not found</h1>
        <Button onClick={() => navigate('/menu')}>Back to Menu</Button>
      </div>
    );
  }

  const portionOptions = [
    { label: 'Regular', price: 0 },
    { label: 'Large', price: 100 },
  ];

  const spiceOptions = ['Mild', 'Medium', 'Hot'];

  const extraOptions = [
    { label: 'Extra Sauce', price: 30 },
    { label: 'Extra Garnish', price: 20 },
    ...(item.ingredients.includes('Paneer') ? [{ label: 'Extra Paneer', price: 80 }] : []),
    ...(item.ingredients.includes('Cheese') || item.ingredients.includes('Cream Cheese') ? [{ label: 'Extra Cheese', price: 60 }] : []),
  ];

  const calculateFinalPrice = () => {
    let price = item.price;
    const selectedPortion = portionOptions.find(p => p.label === portion);
    if (selectedPortion) price += selectedPortion.price;
    
    extras.forEach(ext => {
      const option = extraOptions.find(o => o.label === ext);
      if (option) price += option.price;
    });
    
    return price;
  };

  const handleToggleExtra = (extra: string) => {
    setExtras(prev => 
      prev.includes(extra) 
        ? prev.filter(e => e !== extra)
        : [...prev, extra]
    );
  };

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      quantity,
      basePrice: item.price,
      customizations: { portion, spice, extras },
      finalPrice: calculateFinalPrice(),
    });
    navigate('/cart');
  };

  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <button 
          onClick={() => navigate('/menu')}
          className="flex items-center text-warm-gray hover:text-terracotta transition-colors mb-8 text-sm font-sans uppercase tracking-widest font-bold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Menu
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden bg-ivory-dark">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                {item.vegetarian && <span className="bg-green-100 text-green-700 p-2 rounded-full shadow-sm"><Leaf className="w-5 h-5" /></span>}
                {item.vegan && <span className="bg-green-200 text-green-800 p-2 rounded-full shadow-sm"><Leaf className="w-5 h-5" /></span>}
                {item.spicy && <span className="bg-red-100 text-red-600 p-2 rounded-full shadow-sm"><Flame className="w-5 h-5" /></span>}
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-2 flex justify-between items-center">
              <span className="text-terracotta text-sm font-bold tracking-widest uppercase">{item.category}</span>
              {item.bestseller && <span className="bg-muted-gold text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Bestseller</span>}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif mb-4">{item.name}</h1>
            
            <div className="flex items-center mb-6 text-warm-gray">
              <div className="flex text-muted-gold mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'fill-current' : 'fill-transparent'}`} />
                ))}
              </div>
              <span className="font-bold mr-2 text-charcoal">{item.rating}</span>
              <span>({item.reviews} reviews)</span>
            </div>
            
            <p className="text-lg text-warm-gray mb-8 leading-relaxed">{item.description}</p>
            
            <div className="mb-8 border-t border-b border-ivory-dark py-4">
              <h3 className="font-sans font-bold text-sm uppercase tracking-widest mb-3">Ingredients</h3>
              <p className="text-warm-gray">{item.ingredients.join(', ')}</p>
            </div>

            {/* Customizations */}
            <div className="space-y-8 mb-10">
              
              {/* Portion */}
              <div>
                <h3 className="font-sans font-bold text-sm uppercase tracking-widest mb-4">Portion</h3>
                <div className="flex flex-wrap gap-4">
                  {portionOptions.map(opt => (
                    <button
                      key={opt.label}
                      onClick={() => setPortion(opt.label)}
                      className={`px-6 py-3 border font-sans text-sm tracking-wider transition-all ${portion === opt.label ? 'border-charcoal bg-charcoal text-white' : 'border-ivory-dark bg-white hover:border-charcoal'}`}
                    >
                      {opt.label} {opt.price > 0 && `(+₹${opt.price})`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Spice Level */}
              {item.spicy && (
                <div>
                  <h3 className="font-sans font-bold text-sm uppercase tracking-widest mb-4">Spice Level</h3>
                  <div className="flex flex-wrap gap-4">
                    {spiceOptions.map(level => (
                      <button
                         key={level}
                         onClick={() => setSpice(level)}
                         className={`px-6 py-3 border font-sans text-sm tracking-wider transition-all ${spice === level ? 'border-terracotta bg-terracotta text-white' : 'border-ivory-dark bg-white hover:border-terracotta'}`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Extras */}
              <div>
                <h3 className="font-sans font-bold text-sm uppercase tracking-widest mb-4">Extras</h3>
                <div className="flex flex-col gap-3">
                  {extraOptions.map(opt => (
                    <label key={opt.label} className="flex items-center justify-between p-4 border border-ivory-dark bg-white cursor-pointer hover:border-charcoal transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 border flex items-center justify-center transition-colors ${extras.includes(opt.label) ? 'bg-terracotta border-terracotta' : 'border-charcoal'}`}>
                          {extras.includes(opt.label) && <div className="w-2.5 h-2.5 bg-white" />}
                        </div>
                        <input type="checkbox" className="hidden" checked={extras.includes(opt.label)} onChange={() => handleToggleExtra(opt.label)} />
                        <span className="font-sans">{opt.label}</span>
                      </div>
                      <span className="text-warm-gray">+₹{opt.price}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* Add to Cart Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-4 border border-ivory-dark shadow-sm">
              <div className="flex items-center border border-ivory-dark">
                <button 
                  className="p-3 hover:bg-ivory transition-colors text-charcoal disabled:opacity-50"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-12 text-center font-bold font-sans">{quantity}</span>
                <button 
                  className="p-3 hover:bg-ivory transition-colors text-charcoal"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              
              <Button onClick={handleAddToCart} fullWidth className="flex justify-between items-center">
                <span>Add to Order</span>
                <span>₹{calculateFinalPrice() * quantity}</span>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetails;
