
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ShoppingBag, Heart } from "lucide-react";
import { Product } from "@/lib/data";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  className?: string;
  index?: number;
}

const ProductCard = ({ product, className, index = 0 }: ProductCardProps) => {
  // Calculate animation delay based on index
  const animationDelay = `${0.1 + index * 0.05}s`;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${product.name} added to cart`);
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${product.name} added to wishlist`);
  };

  return (
    <div 
      className={cn(
        "group relative product-card rounded-none overflow-hidden bg-white animate-fade-in opacity-0", 
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
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
        
        {/* Quick actions overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300">
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg text-black hover:bg-black hover:text-white transition-colors"
              aria-label="Add to cart"
              onClick={handleAddToCart}
            >
              <ShoppingBag size={18} />
            </button>
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg text-black hover:bg-black hover:text-white transition-colors"
              aria-label="Add to wishlist"
              onClick={handleAddToWishlist}
            >
              <Heart size={18} />
            </button>
          </div>
        </div>
      </Link>
      
      {/* Product details */}
      <div className="p-4 text-center">
        <Link 
          to={`/product/${product.id}`}
          className="block transition-colors hover:text-primary"
        >
          <h3 className="font-light text-base mb-1 truncate">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
        <div className="flex justify-center items-center">
          <span className="font-light text-black">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
