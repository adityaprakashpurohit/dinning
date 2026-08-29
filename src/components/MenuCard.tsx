import { Link } from 'react-router-dom';
import { Leaf, Flame, Star, Plus } from 'lucide-react';
import type { MenuItem } from '../data/menu';
import { useCart } from '../context/CartContext';

type Props = {
  item: MenuItem;
};

const MenuCard = ({ item }: Props) => {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: item.id,
      name: item.name,
      quantity: 1,
      basePrice: item.price,
      finalPrice: item.price,
    });
  };

  return (
    <Link 
      to={`/menu/${item.id}`} 
      className="group flex flex-col bg-white border border-ivory-dark overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {item.bestseller && (
            <span className="bg-muted-gold text-white text-xs font-bold px-2 py-1 uppercase tracking-wider shadow-sm">
              Bestseller
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3 flex gap-1">
          {item.vegetarian && (
            <span className="bg-green-100 text-green-700 p-1.5 rounded-full shadow-sm" title="Vegetarian">
              <Leaf className="w-3.5 h-3.5" />
            </span>
          )}
          {item.vegan && (
            <span className="bg-green-200 text-green-800 p-1.5 rounded-full shadow-sm" title="Vegan">
              <Leaf className="w-3.5 h-3.5" />
            </span>
          )}
          {item.spicy && (
            <span className="bg-red-100 text-red-600 p-1.5 rounded-full shadow-sm" title="Spicy">
              <Flame className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-terracotta transition-colors">{item.name}</h3>
          <span className="font-sans font-bold text-charcoal">₹{item.price}</span>
        </div>
        
        <p className="text-warm-gray text-sm mb-4 line-clamp-2 flex-grow">{item.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-ivory-dark">
          <div className="flex items-center text-sm font-medium text-warm-gray">
            <Star className="w-4 h-4 text-muted-gold fill-current mr-1" />
            {item.rating} <span className="ml-1 text-xs opacity-70">({item.reviews})</span>
          </div>
          
          <button 
            onClick={handleAdd}
            className="flex items-center text-xs font-bold uppercase tracking-wider text-terracotta hover:text-burnt-orange transition-colors"
            aria-label={`Add ${item.name} to cart`}
          >
            <Plus className="w-4 h-4 mr-1" />
            Add
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MenuCard;
