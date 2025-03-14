
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { featuredProducts } from "@/lib/data";

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4 animate-slide-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            Featured Collection
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto animate-slide-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Our most popular abayas, crafted with premium fabrics and timeless designs.
          </p>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="momiinah-button inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
