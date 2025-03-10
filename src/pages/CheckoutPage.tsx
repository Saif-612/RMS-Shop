
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initPayment } from "@/lib/payment";
import { toast } from "sonner";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  // Load cart items
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (!storedCart || JSON.parse(storedCart).length === 0) {
      toast.error("Your cart is empty");
      navigate("/cart");
      return;
    }
    setCartItems(JSON.parse(storedCart));
    setIsLoading(false);
  }, [navigate]);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const total = subtotal + tax + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'state', 'pincode'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        toast.error(`Please enter your ${field}`);
        return;
      }
    }

    // Create order data
    const orderData = {
      amount: total * 100, // Razorpay amount is in paisa
      currency: "INR",
      receipt: `order_${Date.now()}`,
      customer: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
      },
      items: cartItems.map(item => ({
        id: item.product.id,
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price
      }))
    };

    try {
      // In a real app, you would call your backend API to create a Razorpay order
      const paymentResult = await initPayment(orderData);
      
      if (paymentResult.success) {
        // Clear cart
        localStorage.setItem("cart", JSON.stringify([]));
        window.dispatchEvent(new Event("storage"));
        
        toast.success("Payment successful!", {
          description: "Your order has been placed successfully."
        });
        
        // Redirect to a success page (would be implemented in a real app)
        navigate("/");
      }
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error("Payment failed", {
        description: error.message || "Please try again later"
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container-custom py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/3 mb-8"></div>
          <div className="h-64 bg-muted rounded mb-8"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-16 animate-fade-in">
      <h1 className="text-3xl font-medium mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order summary */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="bg-white rounded-xl overflow-hidden border border-border p-6 sticky top-24">
            <h2 className="text-lg font-medium mb-6">Order Summary</h2>
            
            <div className="mb-4">
              {cartItems.map((item) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex justify-between mb-2">
                  <span className="text-muted-foreground">
                    {item.product.name} × {item.quantity}
                  </span>
                  <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 mb-6 pt-3 border-t border-border">
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
          </div>
        </div>
        
        {/* Checkout form */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="bg-white rounded-xl overflow-hidden border border-border p-6">
            <h2 className="text-lg font-medium mb-6">Shipping Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="+91 9876543210"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="123 Main Street"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium">City</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Mumbai"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="state" className="text-sm font-medium">State</label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Maharashtra"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="pincode" className="text-sm font-medium">PIN Code</label>
                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="400001"
                  />
                </div>
              </div>
              
              <div className="pt-6 border-t border-border">
                <h2 className="text-lg font-medium mb-6">Payment Information</h2>
                <p className="text-muted-foreground mb-4">
                  Secure payment through Razorpay. You will be redirected to the Razorpay payment gateway after clicking the button below.
                </p>
                
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 10H21M7 15H8M12 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Pay ₹{(total * 83).toFixed(2)}
                </button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By clicking the button, you agree to our Terms and Conditions
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
