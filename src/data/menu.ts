export type MenuItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  vegetarian: boolean;
  vegan: boolean;
  spicy: boolean;
  bestseller: boolean;
  ingredients: string[];
};

export const menuData: MenuItem[] = [
  {
    id: "smoked-paneer-tikka",
    name: "Smoked Paneer Tikka",
    category: "Starters",
    price: 420,
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800",
    description: "Charred cottage cheese with smoked peppers and coriander chutney.",
    rating: 4.9,
    reviews: 128,
    vegetarian: true,
    vegan: false,
    spicy: true,
    bestseller: true,
    ingredients: ["Paneer", "Bell peppers", "Yogurt", "Coriander", "Indian spices"]
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    category: "Main Course",
    price: 520,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800",
    description: "Slow-cooked chicken in a rich tomato, butter, and aromatic spice gravy.",
    rating: 4.8,
    reviews: 342,
    vegetarian: false,
    vegan: false,
    spicy: false,
    bestseller: true,
    ingredients: ["Chicken", "Tomatoes", "Butter", "Cream", "Fenugreek"]
  },
  {
    id: "truffle-dal-makhani",
    name: "Truffle Dal Makhani",
    category: "Main Course",
    price: 480,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800",
    description: "Slow-cooked black lentils, finished with cream and a hint of truffle oil.",
    rating: 4.9,
    reviews: 210,
    vegetarian: true,
    vegan: false,
    spicy: false,
    bestseller: true,
    ingredients: ["Black Lentils", "Kidney Beans", "Cream", "Butter", "Truffle Oil"]
  },
  {
    id: "malai-prawns",
    name: "Malai Prawns",
    category: "Starters",
    price: 680,
    image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=800",
    description: "Char-grilled prawns marinated in coconut, saffron, and subtle chili.",
    rating: 4.7,
    reviews: 89,
    vegetarian: false,
    vegan: false,
    spicy: false,
    bestseller: false,
    ingredients: ["Prawns", "Coconut Cream", "Saffron", "Green Chili", "Garlic"]
  },
  {
    id: "saffron-biryani",
    name: "Saffron Biryani",
    category: "Rice & Biryani",
    price: 450,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    description: "Aromatic basmati rice cooked with saffron, seasonal vegetables, and herbs.",
    rating: 4.6,
    reviews: 145,
    vegetarian: true,
    vegan: true,
    spicy: true,
    bestseller: false,
    ingredients: ["Basmati Rice", "Saffron", "Mixed Vegetables", "Mint", "Whole Spices"]
  },
  {
    id: "lamb-rogan-josh",
    name: "Lamb Rogan Josh",
    category: "Main Course",
    price: 650,
    image: "https://images.unsplash.com/photo-1544025162-835fa324545f?auto=format&fit=crop&q=80&w=800",
    description: "Tender lamb cooked in a vibrant red chili and yogurt gravy.",
    rating: 4.8,
    reviews: 256,
    vegetarian: false,
    vegan: false,
    spicy: true,
    bestseller: true,
    ingredients: ["Lamb", "Kashmiri Chili", "Yogurt", "Fennel", "Ginger"]
  },
  {
    id: "gulab-jamun-cheesecake",
    name: "Gulab Jamun Cheesecake",
    category: "Desserts",
    price: 320,
    image: "https://images.unsplash.com/photo-1601314151745-f09c69d80d19?auto=format&fit=crop&q=80&w=800",
    description: "A fusion dessert combining classic gulab jamun with rich cheesecake, garnished with pistachio.",
    rating: 4.9,
    reviews: 178,
    vegetarian: true,
    vegan: false,
    spicy: false,
    bestseller: true,
    ingredients: ["Cream Cheese", "Gulab Jamun", "Graham Cracker", "Pistachio", "Cardamom"]
  },
  {
    id: "palak-chaat",
    name: "Crispy Palak Chaat",
    category: "Starters",
    price: 350,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=800",
    description: "Batter-fried spinach leaves topped with sweet yogurt, tamarind, and mint chutney.",
    rating: 4.7,
    reviews: 112,
    vegetarian: true,
    vegan: false,
    spicy: true,
    bestseller: false,
    ingredients: ["Spinach", "Chickpea Flour", "Yogurt", "Tamarind", "Mint"]
  },
  {
    id: "tandoori-roti",
    name: "Tandoori Roti",
    category: "Breads",
    price: 80,
    image: "https://images.unsplash.com/photo-1626200419188-f1a164450f9e?auto=format&fit=crop&q=80&w=800",
    description: "Whole wheat flatbread baked in a clay oven.",
    rating: 4.5,
    reviews: 400,
    vegetarian: true,
    vegan: true,
    spicy: false,
    bestseller: false,
    ingredients: ["Whole Wheat Flour", "Water", "Salt"]
  },
  {
    id: "garlic-naan",
    name: "Garlic Naan",
    category: "Breads",
    price: 110,
    image: "https://images.unsplash.com/photo-1618337725917-a9a3b687f87e?auto=format&fit=crop&q=80&w=800",
    description: "Soft refined flour bread topped with minced garlic and butter.",
    rating: 4.8,
    reviews: 512,
    vegetarian: true,
    vegan: false,
    spicy: false,
    bestseller: true,
    ingredients: ["Refined Flour", "Garlic", "Butter", "Yeast", "Yogurt"]
  },
  {
    id: "mango-lassi",
    name: "Alphonso Mango Lassi",
    category: "Beverages",
    price: 220,
    image: "https://images.unsplash.com/photo-1546850893-a1c1d88c2250?auto=format&fit=crop&q=80&w=800",
    description: "Creamy yogurt drink blended with premium Alphonso mangoes.",
    rating: 4.8,
    reviews: 198,
    vegetarian: true,
    vegan: false,
    spicy: false,
    bestseller: false,
    ingredients: ["Yogurt", "Alphonso Mango", "Sugar", "Cardamom"]
  }
];

export const menuCategories = [
  "All",
  "Starters",
  "Soups",
  "Salads",
  "Main Course",
  "Breads",
  "Rice & Biryani",
  "Desserts",
  "Beverages"
];
