
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
    name: "Essential Cotton T-Shirt",
    price: 29.99,
    category: "T-Shirts",
    description: "A premium cotton t-shirt with a clean, minimalist design. Made from 100% organic cotton for ultimate comfort and breathability.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray", "Navy"],
    featured: true,
  },
  {
    id: "2",
    name: "Relaxed Fit Jeans",
    price: 79.99,
    category: "Jeans",
    description: "Contemporary relaxed fit jeans with a timeless design. Features a comfortable mid-rise waist and straight leg for versatile styling options.",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800",
    ],
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Dark Blue", "Black"],
    featured: true,
  },
  {
    id: "3",
    name: "Merino Wool Sweater",
    price: 119.99,
    category: "Sweaters",
    description: "Luxurious merino wool sweater providing exceptional warmth without bulk. Features a refined crewneck design and ribbed cuffs for a tailored finish.",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1609587312208-cea54be969e7?auto=format&fit=crop&w=800",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Charcoal", "Camel", "Burgundy", "Navy"],
    featured: true,
  },
  {
    id: "4",
    name: "Tailored Suit Jacket",
    price: 249.99,
    category: "Jackets",
    description: "Impeccably crafted suit jacket made from premium Italian wool. Features a classic notch lapel, two-button closure, and thoughtfully designed interior pockets.",
    images: [
      "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800",
    ],
    sizes: ["38R", "40R", "42R", "44R", "46R"],
    colors: ["Charcoal", "Navy", "Black"],
    featured: true,
  },
  {
    id: "5",
    name: "Silk Blouse",
    price: 89.99,
    category: "Blouses",
    description: "Elegant silk blouse with a relaxed fit and subtle sheen. Features a classic collar and hidden button placket for a clean, minimal aesthetic.",
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=800",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Black", "Blush", "Navy"],
    featured: false,
  },
  {
    id: "6",
    name: "Cashmere Scarf",
    price: 69.99,
    category: "Accessories",
    description: "Luxuriously soft cashmere scarf made from the finest Mongolian cashmere. Adds a sophisticated touch to any winter outfit.",
    images: [
      "https://images.unsplash.com/photo-1606076165932-a8ec9315443b?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1520807525461-a576d0a0dd45?auto=format&fit=crop&w=800",
    ],
    sizes: ["One Size"],
    colors: ["Camel", "Gray", "Black", "Burgundy"],
    featured: false,
  },
  {
    id: "7",
    name: "Leather Derby Shoes",
    price: 159.99,
    category: "Shoes",
    description: "Timeless leather derby shoes crafted from premium calfskin. Features a sleek silhouette, Goodyear welted construction, and durable leather soles.",
    images: [
      "https://images.unsplash.com/photo-1614253429340-98120bd6d753?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?auto=format&fit=crop&w=800",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "Brown", "Oxblood"],
    featured: false,
  },
  {
    id: "8",
    name: "Linen Button-Up Shirt",
    price: 69.99,
    category: "Shirts",
    description: "Breathable linen shirt perfect for warm weather. Features a relaxed fit, button-up front, and clean, minimal design.",
    images: [
      "https://images.unsplash.com/photo-1626497764746-6dc36546b388?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=800",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Blue", "Sand", "Olive"],
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
