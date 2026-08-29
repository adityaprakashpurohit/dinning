export type Offer = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  validity: string;
  terms: string;
};

export const offersData: Offer[] = [
  {
    id: "date-night",
    title: "Date Night",
    description: "A curated two-course dinner for two featuring our most romantic and decadent dishes. Includes a complimentary dessert.",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80&w=800",
    validity: "Valid Monday to Thursday",
    terms: "T&C Apply. Not valid on public holidays."
  },
  {
    id: "weekend-brunch",
    title: "Weekend Brunch",
    description: "An unlimited contemporary Indian brunch menu featuring exclusive weekend specials, live grills, and endless flavours.",
    price: "₹1,299/person",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
    validity: "Valid Saturday & Sunday, 12 PM - 4 PM",
    terms: "Prior reservation recommended."
  },
  {
    id: "family-feast",
    title: "Family Feast",
    description: "A generous sharing meal for four. Choose 2 starters, 3 main courses, and an assortment of breads and rice.",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800",
    validity: "Valid Daily",
    terms: "Available for dine-in and delivery."
  },
  {
    id: "chefs-table",
    title: "Chef's Table Experience",
    description: "An intimate, seven-course curated tasting menu guided personally by Executive Chef Arjun Mehra.",
    price: "₹3,499/person",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
    validity: "Valid Friday & Saturday Dinner",
    terms: "Requires 48-hour advance booking. Minimum 2 guests."
  }
];
