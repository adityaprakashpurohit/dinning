export type GalleryImage = {
  id: string;
  url: string;
  category: string;
  caption: string;
};

export const galleryData: GalleryImage[] = [
  { id: "1", url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200", category: "Restaurant", caption: "Main Dining Room" },
  { id: "2", url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200", category: "Chefs", caption: "Chef plating the signature dish" },
  { id: "3", url: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=1200", category: "Food", caption: "Smoked Paneer Tikka" },
  { id: "4", url: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80&w=1200", category: "Food", caption: "Gourmet Plating" },
  { id: "5", url: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1200", category: "Behind the Scenes", caption: "The Charcoal Tandoor" },
  { id: "6", url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200", category: "Restaurant", caption: "Intimate Seating" },
  { id: "7", url: "https://images.unsplash.com/photo-1601314151745-f09c69d80d19?auto=format&fit=crop&q=80&w=1200", category: "Food", caption: "Gulab Jamun Cheesecake" },
  { id: "8", url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200", category: "Restaurant", caption: "Bar Area" },
  { id: "9", url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200", category: "Food", caption: "Rustic Flavours" },
  { id: "10", url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=1200", category: "Food", caption: "Fresh Spices" },
  { id: "11", url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200", category: "Events", caption: "Chef's Table Event" },
  { id: "12", url: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=1200", category: "Guests", caption: "Weekend Dining" },
  { id: "13", url: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=1200", category: "Food", caption: "Butter Chicken" },
  { id: "14", url: "https://images.unsplash.com/photo-1615486171448-4fd1fb14c466?auto=format&fit=crop&q=80&w=1200", category: "Behind the Scenes", caption: "Fresh Ingredients" },
  { id: "15", url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=1200", category: "Chefs", caption: "Executive Chef Arjun Mehra" }
];

export const galleryCategories = ["All", "Food", "Restaurant", "Chefs", "Events", "Guests", "Behind the Scenes"];
