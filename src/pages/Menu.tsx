import { useState, useEffect, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import MenuCard from '../components/MenuCard';
import Button from '../components/Button';
import { menuData, menuCategories } from '../data/menu';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filters
  const [vegOnly, setVegOnly] = useState(false);
  const [veganOnly, setVeganOnly] = useState(false);
  const [bestsellerOnly, setBestsellerOnly] = useState(false);
  
  // Sorting
  const [sortBy, setSortBy] = useState('Recommended'); // Recommended, Price: Low to High, Price: High to Low, Rating

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredMenu = useMemo(() => {
    let result = menuData;

    // Category
    if (activeCategory !== 'All') {
      result = result.filter(item => item.category === activeCategory);
    }

    // Search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) ||
        item.ingredients.some(i => i.toLowerCase().includes(query))
      );
    }

    // Filters
    if (vegOnly) result = result.filter(item => item.vegetarian);
    if (veganOnly) result = result.filter(item => item.vegan);
    if (bestsellerOnly) result = result.filter(item => item.bestseller);

    // Sorting
    switch (sortBy) {
      case 'Price: Low to High':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'Rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'Recommended':
      default:
        // Keep original order or sort by bestseller
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
        break;
    }

    return result;
  }, [activeCategory, searchQuery, vegOnly, veganOnly, bestsellerOnly, sortBy]);

  const clearFilters = () => {
    setVegOnly(false);
    setVeganOnly(false);
    setBestsellerOnly(false);
    setSortBy('Recommended');
  };

  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif mb-4">THE MENU</h1>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto font-light">
            "Explore bold flavours, seasonal ingredients, and Ember & Spice signatures."
          </p>
        </div>

        {/* Search & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search dishes, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-ivory-dark pl-12 pr-4 py-3 focus:outline-none focus:border-terracotta transition-colors shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-warm-gray w-5 h-5" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-warm-gray hover:text-charcoal"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-ivory-dark px-4 py-3 focus:outline-none focus:border-terracotta transition-colors shadow-sm cursor-pointer w-full md:w-auto text-sm uppercase tracking-wider font-sans"
            >
              <option value="Recommended">Recommended</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Rating">Highest Rated</option>
            </select>
            
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center justify-center gap-2 border px-4 py-3 transition-colors shadow-sm w-full md:w-auto text-sm uppercase tracking-wider font-sans ${isFilterOpen ? 'bg-charcoal text-white border-charcoal' : 'bg-white border-ivory-dark text-charcoal hover:border-charcoal'}`}
            >
              <Filter className="w-4 h-4" />
              Filters {(vegOnly || veganOnly || bestsellerOnly) && '(Active)'}
            </button>
          </div>
        </div>

        {/* Expanded Filters */}
        {isFilterOpen && (
          <div className="bg-white p-6 border border-ivory-dark shadow-sm mb-8 flex flex-col md:flex-row gap-8">
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 border flex items-center justify-center transition-colors ${vegOnly ? 'bg-terracotta border-terracotta' : 'border-charcoal group-hover:border-terracotta'}`}>
                  {vegOnly && <div className="w-2.5 h-2.5 bg-white" />}
                </div>
                <input type="checkbox" className="hidden" checked={vegOnly} onChange={() => setVegOnly(!vegOnly)} />
                <span className="text-sm font-sans uppercase tracking-wider">Vegetarian</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 border flex items-center justify-center transition-colors ${veganOnly ? 'bg-terracotta border-terracotta' : 'border-charcoal group-hover:border-terracotta'}`}>
                  {veganOnly && <div className="w-2.5 h-2.5 bg-white" />}
                </div>
                <input type="checkbox" className="hidden" checked={veganOnly} onChange={() => setVeganOnly(!veganOnly)} />
                <span className="text-sm font-sans uppercase tracking-wider">Vegan</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 border flex items-center justify-center transition-colors ${bestsellerOnly ? 'bg-terracotta border-terracotta' : 'border-charcoal group-hover:border-terracotta'}`}>
                  {bestsellerOnly && <div className="w-2.5 h-2.5 bg-white" />}
                </div>
                <input type="checkbox" className="hidden" checked={bestsellerOnly} onChange={() => setBestsellerOnly(!bestsellerOnly)} />
                <span className="text-sm font-sans uppercase tracking-wider">Bestsellers</span>
              </label>
            </div>
            
            {(vegOnly || veganOnly || bestsellerOnly) && (
              <button 
                onClick={clearFilters}
                className="text-sm text-warm-gray hover:text-terracotta underline font-sans tracking-wider"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar border-b border-ivory-dark">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-4 font-sans text-sm tracking-widest uppercase transition-colors relative ${
                activeCategory === category 
                  ? 'text-terracotta font-bold' 
                  : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-terracotta"></span>
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        {filteredMenu.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMenu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white border border-ivory-dark">
            <h3 className="text-2xl font-serif mb-2">NOTHING DELICIOUS FOUND.</h3>
            <p className="text-warm-gray mb-6">"Try another dish or category."</p>
            <Button onClick={() => {setSearchQuery(''); clearFilters(); setActiveCategory('All');}} variant="outline">
              Clear All Filters
            </Button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Menu;
