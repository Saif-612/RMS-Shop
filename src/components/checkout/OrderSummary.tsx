
import React from "react";

interface CartItem {
  product: {
    id: string;
    name: string;
    price: number;
  };
  quantity: number;
  size?: string;
  color?: string;
}

interface OrderSummaryProps {
  cartItems: CartItem[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cartItems }) => {
  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const total = subtotal + tax + shipping;

  return (
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
  );
};

export default OrderSummary;
