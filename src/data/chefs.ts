export type Chef = {
  id: string;
  name: string;
  position: string;
  image: string;
  specialties: string[];
  experience: string;
  philosophy: string;
  biography: string;
  awards: string[];
  signatureDishes: string[]; // dish IDs
};

export const chefsData: Chef[] = [
  {
    id: "arjun-mehra",
    name: "Arjun Mehra",
    position: "Executive Chef",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800",
    specialties: ["Modern Indian", "Tandoor", "Regional Cuisine"],
    experience: "15 Years",
    philosophy: "To respect the roots of Indian cooking while elevating it through modern techniques and global influences.",
    biography: "Chef Arjun Mehra began his culinary journey in the bustling streets of Delhi before honing his skills in Michelin-starred kitchens across London and New York. His vision for Ember & Spice is to showcase the incredible diversity of Indian cuisine, moving beyond the familiar to introduce diners to complex, nuanced regional flavours.",
    awards: ["Best Contemporary Indian Chef 2024", "Culinary Excellence Award"],
    signatureDishes: ["smoked-paneer-tikka", "lamb-rogan-josh"]
  },
  {
    id: "ananya-rao",
    name: "Ananya Rao",
    position: "Pastry Chef",
    image: "https://images.unsplash.com/photo-1581299894007-aaa502973166?auto=format&fit=crop&q=80&w=800",
    specialties: ["Desserts", "Chocolate", "Indian Sweets Fusion"],
    experience: "8 Years",
    philosophy: "A dessert should be a celebration—familiar enough to comfort, yet surprising enough to excite.",
    biography: "With a background in classic French patisserie and a deep love for the traditional mithai of her childhood, Chef Ananya creates desserts that bridge two worlds. Her approach to sweetness is balanced, often incorporating unexpected spices and savoury elements to create truly unique conclusions to a meal.",
    awards: ["Innovator in Pastry 2025"],
    signatureDishes: ["gulab-jamun-cheesecake"]
  },
  {
    id: "rahul-sen",
    name: "Rahul Sen",
    position: "Sous Chef",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800",
    specialties: ["Grill", "Seafood", "Contemporary Cuisine"],
    experience: "10 Years",
    philosophy: "Fire is the most primal and honest ingredient. It transforms, it demands respect, and it never lies.",
    biography: "Chef Rahul is the master of the flame at Ember & Spice. Specializing in seafood and grill techniques, he brings a robust, elemental energy to the kitchen. His meticulous attention to the charcoal tandoor ensures that every dish that touches the fire emerges with the perfect char and smokiness.",
    awards: ["Rising Star Chef 2023"],
    signatureDishes: ["malai-prawns"]
  }
];
