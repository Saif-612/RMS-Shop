
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Black Abaya",
    price: 129.99,
    category: "Abayas",
    description: "A timeless black abaya made from premium soft crepe fabric. Features elegant minimal design with subtle embroidery details at the sleeves.",
    images: [
      "/images/abaya1-1.jpg",
      "/images/abaya1-2.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Dark Brown"],
    featured: true,
  },
  {
    id: "2",
    name: "Embroidered Open Abaya",
    price: 159.99,
    category: "Abayas",
    description: "Stunning open abaya with intricate floral embroidery along the front edges. Made from high-quality nida fabric that offers comfort and elegance.",
    images: [
      "/images/abaya2-1.jpg",
      "/images/abaya2-2.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Dusty Pink", "Sage Green", "Gray"],
    featured: true,
  },
  {
    id: "3",
    name: "Pearl Detailed Abaya",
    price: 189.99,
    category: "Abayas",
    description: "Luxurious abaya adorned with hand-sewn pearl details. Features a modern butterfly cut and made from premium silk-blend fabric for exceptional drape.",
    images: [
      "/images/abaya3-1.jpg",
      "/images/abaya3-2.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy", "Dark Gray"],
    featured: true,
  },
  {
    id: "4",
    name: "Modern Kimono Abaya",
    price: 169.99,
    category: "Abayas",
    description: "Contemporary kimono-style abaya with wide sleeves and a belted waist. Made from lightweight crepe that provides comfort while maintaining an elegant silhouette.",
    images: [
      "/images/abaya4-1.jpg",
      "/images/abaya4-2.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Camel", "Olive", "Charcoal"],
    featured: true,
  },
  {
    id: "5",
    name: "Lace Trimmed Abaya",
    price: 149.99,
    category: "Abayas",
    description: "Elegant abaya with delicate lace trim details on the sleeves and hem. Made from soft, flowing nida fabric that creates a graceful silhouette.",
    images: [
      "/images/abaya5-1.jpg",
      "/images/abaya5-2.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy", "Cream"],
    featured: false,
  },
  {
    id: "6",
    name: "Gold Embellished Abaya",
    price: 199.99,
    category: "Abayas",
    description: "Stunning abaya with gold thread embellishments creating intricate patterns. Perfect for special occasions, made from premium quality crepe fabric.",
    images: [
      "/images/abaya6-1.jpg",
      "/images/abaya6-2.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gold", "Burgundy", "Navy"],
    featured: false,
  },
  {
    id: "7",
    name: "Minimalist Button-Down Abaya",
    price: 139.99,
    category: "Abayas",
    description: "Modern button-down abaya with a clean, minimalist aesthetic. Features practical side pockets and is made from comfortable, breathable linen-blend fabric.",
    images: [
      "/images/abaya7-1.jpg",
      "/images/abaya7-2.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Dark Gray", "Navy", "Olive"],
    featured: false,
  },
  {
    id: "8",
    name: "Pleated Sleeve Abaya",
    price: 179.99,
    category: "Abayas",
    description: "Sophisticated abaya with beautiful pleated sleeves for a touch of elegance. Made from premium Japanese crepe that offers both comfort and a luxurious drape.",
    images: [
      "/images/abaya8-1.jpg",
      "/images/abaya8-2.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Dark Green", "Burgundy"],
    featured: false,
  },
];

// Categories
export const categories = Array.from(new Set(products.map(product => product.category)));

// Sizes
export const allSizes = Array.from(
  new Set(products.flatMap(product => product.sizes))
).sort((a, b) => {
  // Custom sorting for letter sizes
  const sizeOrder = { XS: 1, S: 2, M: 3, L: 4, XL: 5, XXL: 6 };
  if (sizeOrder[a as keyof typeof sizeOrder] && sizeOrder[b as keyof typeof sizeOrder]) {
    return sizeOrder[a as keyof typeof sizeOrder] - sizeOrder[b as keyof typeof sizeOrder];
  }
  return a.localeCompare(b);
});

// Colors
export const allColors = Array.from(
  new Set(products.flatMap(product => product.colors))
).sort();

// Price ranges
export const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 to $100", min: 50, max: 100 },
  { label: "$100 to $200", min: 100, max: 200 },
  { label: "Over $200", min: 200, max: Infinity },
];

// Featured products
export const featuredProducts = products.filter(product => product.featured);
