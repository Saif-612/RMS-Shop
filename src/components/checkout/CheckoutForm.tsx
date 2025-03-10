
import React from "react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

interface CheckoutFormProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isProcessing: boolean;
  total: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ 
  formData, 
  handleChange, 
  handleSubmit, 
  isProcessing, 
  total 
}) => {
  return (
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
            disabled={isProcessing}
            className="w-full py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 10H21M7 15H8M12 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Pay ₹{(total * 83).toFixed(2)}
              </>
            )}
          </button>
          <p className="text-xs text-center text-muted-foreground mt-4">
            By clicking the button, you agree to our Terms and Conditions
          </p>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
