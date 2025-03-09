
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { featuredProducts } from "@/lib/data";

const FeaturedProducts = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container-custom">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="mb-4 animate-slide-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              Featured Collection
            </h2>
            <p className="text-muted-foreground max-w-xl animate-slide-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Our most popular pieces, carefully selected for their exceptional quality and timeless design.
            </p>
          </div>
          <Link 
            to="/products" 
            className="mt-4 md:mt-0 inline-flex items-center text-sm font-medium hover:underline animate-slide-in opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            View All Products
            <ArrowRight size={16} className="ml-1" />
          </Link>
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
      </div>
    </section>
  );
};

export default FeaturedProducts;
