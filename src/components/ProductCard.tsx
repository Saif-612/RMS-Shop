
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ShoppingBag, Heart } from "lucide-react";
import { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  className?: string;
  index?: number;
}

const ProductCard = ({ product, className, index = 0 }: ProductCardProps) => {
  // Calculate animation delay based on index
  const animationDelay = `${0.1 + index * 0.05}s`;

  return (
    <div 
      className={cn(
        "group relative product-card rounded-xl overflow-hidden bg-white animate-fade-in opacity-0 shadow-md", 
        className
      )}
      style={{ animationDelay, animationFillMode: "forwards" }}
    >
      {/* Product image */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick actions overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300">
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingBag size={18} />
            </button>
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart size={18} />
            </button>
          </div>
        </div>
      </Link>
      
      {/* Product details */}
      <div className="p-4">
        <Link 
          to={`/product/${product.id}`}
          className="block transition-colors hover:text-primary"
        >
          <h3 className="font-medium text-base mb-1 truncate">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
        <div className="flex justify-between items-center">
          <span className="font-medium">${product.price.toFixed(2)}</span>
          <div className="flex space-x-1">
            {product.colors.slice(0, 3).map((color, i) => (
              <span 
                key={i}
                className="w-3 h-3 rounded-full border border-border shadow-sm" 
                style={{ 
                  backgroundColor: color.toLowerCase(),
                  opacity: color.toLowerCase() === "white" ? 0.8 : 1
                }}
                title={color}
              ></span>
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-muted-foreground">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
