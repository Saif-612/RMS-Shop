
import React, { useState } from "react";
import { ShoppingBag, Heart, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { Product, CartItem } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  
  // Handle adding to cart
  const addToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    
    if (!selectedColor) {
      toast.error("Please select a color");
      return;
    }
    
    // Create cart item
    const cartItem: CartItem = {
      product,
      quantity,
      size: selectedSize,
      color: selectedColor,
    };
    
    // Get existing cart or initialize empty array
    const existingCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // Check if item already exists with same product, size, color
    const existingItemIndex = existingCart.findIndex(
      item => 
        item.product.id === product.id && 
        item.size === selectedSize && 
        item.color === selectedColor
    );
    
    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      existingCart.push(cartItem);
    }
    
    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));
    
    // Update other components that use cart data
    window.dispatchEvent(new Event("storage"));
    
    // Show success toast
    toast.success("Added to cart", {
      description: `${product.name} (${selectedSize}, ${selectedColor}) x ${quantity}`,
      action: {
        label: "View Cart",
        onClick: () => navigate("/cart"),
      },
    });
  };
  
  // Change image
  const changeImage = (direction: number) => {
    const newIndex = (currentImageIndex + direction + product.images.length) % product.images.length;
    setCurrentImageIndex(newIndex);
  };
  
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Product images */}
        <div className="w-full md:w-3/5">
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-cover object-center animate-fade-in"
                key={currentImageIndex}
              />
            </div>
            
            {/* Image navigation buttons */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() => changeImage(-1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Previous image"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={() => changeImage(1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Next image"
                >
                  <ArrowRight size={18} />
                </button>
              </>
            )}
          </div>
          
          {/* Thumbnail navigation */}
          {product.images.length > 1 && (
            <div className="flex gap-3 mt-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    "w-20 h-20 rounded-md overflow-hidden border-2 transition-all",
                    index === currentImageIndex
                      ? "border-primary"
                      : "border-transparent hover:border-muted-foreground/30"
                  )}
                  aria-label={`View image ${index + 1}`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - view ${index + 1}`} 
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product info */}
        <div className="w-full md:w-2/5">
          <Link 
            to="/products" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft size={16} className="mr-1" /> Back to products
          </Link>
          
          <h1 className="text-3xl font-medium mb-2">{product.name}</h1>
          <p className="text-muted-foreground mb-4">{product.category}</p>
          
          <div className="text-2xl font-medium mb-6">${product.price.toFixed(2)}</div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-3">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>
          
          {/* Size selection */}
          <div className="mb-6">
            <div className="flex justify-between mb-3">
              <h3 className="font-medium">Size</h3>
              <button className="text-sm text-muted-foreground hover:text-primary">
                Size Guide
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "w-12 h-12 rounded-md border transition-all flex items-center justify-center",
                    selectedSize === size
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-muted-foreground"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Color selection */}
          <div className="mb-8">
            <h3 className="font-medium mb-3">Color</h3>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    "w-10 h-10 rounded-full transition-all flex items-center justify-center border",
                    selectedColor === color
                      ? "ring-2 ring-primary ring-offset-2"
                      : "border-border hover:border-muted-foreground"
                  )}
                  style={{ 
                    backgroundColor: color.toLowerCase(),
                    borderColor: color.toLowerCase() === "white" ? "#e5e7eb" : "transparent"
                  }}
                  title={color}
                >
                  {selectedColor === color && (
                    <Check size={16} className={color.toLowerCase() === "white" ? "text-black" : "text-white"} />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity and Add to Cart */}
          <div className="flex gap-4 mb-8">
            {/* Quantity selector */}
            <div className="w-32 border border-border rounded-md flex">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-12 flex items-center justify-center text-muted-foreground hover:text-primary"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <div className="flex-1 h-12 flex items-center justify-center font-medium">
                {quantity}
              </div>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-12 flex items-center justify-center text-muted-foreground hover:text-primary"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
            
            {/* Add to cart button */}
            <button
              onClick={addToCart}
              className="flex-1 h-12 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
            >
              <ShoppingBag size={18} className="mr-2" />
              Add to Cart
            </button>
            
            {/* Wishlist button */}
            <button
              className="w-12 h-12 border border-border rounded-md flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart size={18} />
            </button>
          </div>
          
          {/* Additional information */}
          <div className="border-t border-border pt-6 text-sm">
            <div className="flex items-start mb-3">
              <div className="w-32 text-muted-foreground">Free Shipping</div>
              <div>On all orders over $100</div>
            </div>
            <div className="flex items-start mb-3">
              <div className="w-32 text-muted-foreground">Free Returns</div>
              <div>Within 30 days of purchase</div>
            </div>
            <div className="flex items-start">
              <div className="w-32 text-muted-foreground">Sustainability</div>
              <div>Made with eco-friendly materials</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
