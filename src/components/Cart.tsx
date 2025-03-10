import React, { useState, useEffect } from "react";
import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { CartItem } from "@/lib/data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    setIsLoading(false);
  }, []);

  // Save cart items to localStorage whenever cart changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
      // Trigger storage event for other components to update
      window.dispatchEvent(new Event("storage"));
    }
  }, [cartItems, isLoading]);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity, 
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const total = subtotal + tax + shipping;

  // Update quantity
  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
    
    toast.success("Cart updated", {
      description: `Updated quantity of ${cartItems[index].product.name}`,
    });
  };

  // Remove item
  const removeItem = (index: number) => {
    const itemName = cartItems[index].product.name;
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
    
    toast.success("Item removed", {
      description: `Removed ${itemName} from your cart`,
    });
  };

  // Handle checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    navigate("/checkout");
  };

  // Empty cart
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6">
          <ShoppingBag size={32} className="text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          Looks like you haven't added any items to your cart yet.
          Discover our collection and find something you'll love.
        </p>
        <Link 
          to="/products" 
          className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
        >
          Browse Products
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-medium mb-8">Your Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart items */}
        <div className="flex-grow">
          <div className="bg-white rounded-xl overflow-hidden border border-border">
            <div className="p-6">
              <h2 className="text-lg font-medium mb-6">Cart Items ({cartItems.length})</h2>
              
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div 
                    key={`${item.product.id}-${item.size}-${item.color}`} 
                    className={cn(
                      "flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6",
                      index < cartItems.length - 1 && "border-b border-border"
                    )}
                  >
                    {/* Product image */}
                    <div className="w-24 h-24 rounded-lg overflow-hidden border border-border flex-shrink-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    
                    {/* Product details */}
                    <div className="flex-grow">
                      <Link 
                        to={`/product/${item.product.id}`}
                        className="font-medium hover:underline"
                      >
                        {item.product.name}
                      </Link>
                      <div className="text-sm text-muted-foreground mt-1">
                        Size: {item.size} | Color: {item.color}
                      </div>
                      <div className="font-medium mt-1">${item.product.price.toFixed(2)}</div>
                    </div>
                    
                    {/* Quantity controls */}
                    <div className="flex items-center border border-border rounded-full">
                      <button 
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    {/* Remove button */}
                    <button 
                      onClick={() => removeItem(index)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Order summary */}
        <div className="w-full lg:w-96 h-fit">
          <div className="bg-white rounded-xl overflow-hidden border border-border p-6">
            <h2 className="text-lg font-medium mb-6">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="pt-3 border-t border-border flex justify-between font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            {/* Checkout button */}
            <button 
              onClick={handleCheckout}
              className="w-full py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
            >
              Proceed to Checkout
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            
            {/* Indian Rupee price conversion */}
            <div className="text-sm text-center mt-2 text-muted-foreground">
              Approximately ₹{(total * 83).toFixed(2)} INR
            </div>
            
            {/* Continue shopping link */}
            <Link 
              to="/products"
              className="block text-center mt-4 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
