
interface OrderData {
  amount: number;
  currency: string;
  receipt: string;
  customer: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
}

interface PaymentResponse {
  success: boolean;
  paymentId?: string;
  error?: string;
}

// In a real app, this would call your backend API to create an order
// For this demo, we'll simulate a successful backend call
const createRazorpayOrder = async (orderData: OrderData): Promise<{ id: string }> => {
  // This would normally be an API call to your backend
  // which would then call Razorpay's API to create an order
  console.log("Creating order with data:", orderData);
  
  // Simulated successful API response
  return {
    id: `order_${Date.now()}`
  };
};

export const initPayment = (orderData: OrderData): Promise<PaymentResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      // In a real-world scenario, this would come from your backend
      const order = await createRazorpayOrder(orderData);
      
      // Load Razorpay script dynamically
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(script);
      
      script.onload = () => {
        // Initialize Razorpay payment
        const options = {
          key: "rzp_test_YOUR_KEY_HERE", // Replace with your actual test key in production
          amount: orderData.amount,
          currency: orderData.currency,
          name: "Abaya Store",
          description: "Payment for your order",
          order_id: order.id,
          handler: function (response: any) {
            // This handler is called when payment is successful
            resolve({
              success: true,
              paymentId: response.razorpay_payment_id
            });
          },
          prefill: {
            name: orderData.customer.name,
            email: orderData.customer.email,
            contact: orderData.customer.contact
          },
          notes: orderData.notes,
          theme: {
            color: "#9f7aea" // This should match your primary color
          }
        };
        
        // @ts-ignore - Razorpay is loaded via script
        const rzp = new window.Razorpay(options);
        rzp.open();
        
        // Handle payment failure
        rzp.on('payment.failed', function (response: any) {
          reject({
            success: false,
            error: response.error.description
          });
        });
      };
      
      script.onerror = () => {
        reject({
          success: false,
          error: "Failed to load Razorpay SDK"
        });
      };
      
    } catch (error) {
      reject({
        success: false,
        error: error.message
      });
    }
  });
};
