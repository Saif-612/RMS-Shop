
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initPayment } from "@/lib/payment";
import { toast } from "sonner";
import OrderSummary from "@/components/checkout/OrderSummary";
import CheckoutForm from "@/components/checkout/CheckoutForm";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
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

  // Calculate total for payment button
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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Phone validation (basic)
    if (formData.phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    setIsProcessing(true);

    // Create order data
    const orderData = {
      amount: Math.round(total * 100), // Razorpay amount is in paisa and must be an integer
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
        description: error.error || "Please try again later"
      });
    } finally {
      setIsProcessing(false);
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
          <OrderSummary cartItems={cartItems} />
        </div>
        
        {/* Checkout form */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <CheckoutForm 
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isProcessing={isProcessing}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
