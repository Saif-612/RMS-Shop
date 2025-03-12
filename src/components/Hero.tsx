
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center p-8 bg-background/80 backdrop-blur-md rounded-xl shadow-lg">
          <span className="inline-block py-1 px-3 mb-6 text-xs tracking-wider uppercase border border-primary/40 text-primary rounded-full animate-fade-in opacity-0 bg-background/70 backdrop-blur-sm" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            NEW COLLECTION
          </span>
          
          <h1 className="mb-6 animate-fade-in opacity-0 font-display text-3xl md:text-4xl lg:text-5xl" style={{ 
            animationDelay: "0.2s", 
            animationFillMode: "forwards",
            letterSpacing: "0.02em",
            fontStyle: "italic",
            color: "#D946EF",
            textShadow: "none",
            fontWeight: "normal"
          }}>
            Elegant Abayas for Modern Women
          </h1>
          
          <p className="text-lg text-foreground/90 mb-8 animate-fade-in opacity-0 font-extralight" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Discover our curated collection of premium abayas, crafted with exceptional attention to detail and sustainable materials.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <Link 
              to="/products" 
              className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-primary text-primary-foreground font-light transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-accent/30 text-foreground font-light transition-all hover:bg-accent/50 hover:shadow-md"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
      
      {/* Featured product image with animation */}
      <div className="container-custom mt-20 md:mt-24">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl animate-fade-in opacity-0 bg-background/50 backdrop-blur-sm p-4" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-accent/40 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-accent/40 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-accent/40 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-accent/40 rounded-br-xl"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80" 
            alt="Fashion collection showcase" 
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105 rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-foreground/10 rounded-lg"></div>
          
          {/* Floating text badge */}
          <div className="absolute bottom-8 right-8 bg-background/90 backdrop-blur-sm py-3 px-6 rounded-full shadow-lg transform rotate-2 border border-primary/20">
            <span className="font-display text-lg text-primary font-extralight">New Season 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
