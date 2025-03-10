
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/lib/data";
import ProductDetail from "@/components/ProductDetail";
import { toast } from "sonner";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      if (!product) {
        toast.error("Product not found", {
          description: "The product you're looking for couldn't be found."
        });
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, [product]);

  if (isLoading) {
    return (
      <div className="container-custom py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-square bg-muted rounded"></div>
            <div className="space-y-4">
              <div className="h-8 bg-muted rounded w-2/3"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-6 bg-muted rounded w-1/4 mt-6"></div>
              <div className="h-24 bg-muted rounded w-full mt-6"></div>
              <div className="h-10 bg-muted rounded w-full mt-6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container-custom py-16">
        <h1 className="text-3xl font-medium mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, the product you're looking for doesn't exist.
        </p>
        <button 
          onClick={() => navigate("/products")}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Browse All Products
        </button>
      </div>
    );
  }

  return (
    <div className="container-custom py-16">
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;
