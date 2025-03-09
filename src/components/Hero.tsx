import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  // Add console log to check if component is rendering
  useEffect(() => {
    console.log("Hero component mounted");
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-3 mb-6 text-xs font-medium tracking-wider uppercase border border-border rounded-full">
            New Collection
          </span>
          
          {/* Remove animation temporarily to check if that's causing issues */}
          <h1 className="mb-6">
            Timeless Elegance in Contemporary Design
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Discover our curated collection of premium clothing essentials, crafted with exceptional attention to detail and sustainable materials.
          </p>
          
          <div className="flex justify-center space-x-4">
            <Link 
              to="/products" 
              className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/90"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
      
      {/* Keep the background decorations but simplify */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
      
      {/* Hero image - simplify to check if this is loading properly */}
      <div className="container-custom mt-20 md:mt-24">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80" 
            alt="Fashion collection showcase" 
            className="w-full h-full object-cover object-center"
            onLoad={() => console.log("Hero image loaded")}
            onError={() => console.error("Hero image failed to load")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
