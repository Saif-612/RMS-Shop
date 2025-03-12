
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/30 via-background to-secondary/50 opacity-70"></div>
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        
        {/* Decorative patterns */}
        <div className="absolute top-20 right-40 w-64 h-64 border border-primary/10 rounded-full"></div>
        <div className="absolute top-40 right-60 w-32 h-32 border border-accent/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 border border-primary/10 rounded-full"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D48A9B' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
               backgroundSize: '100px 100px'
             }}>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-3 mb-6 text-xs tracking-wider uppercase border border-primary/40 text-primary rounded-full animate-fade-in opacity-0 bg-background/70 backdrop-blur-sm" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            NEW COLLECTION
          </span>
          
          <h1 className="mb-6 animate-fade-in opacity-0 font-display text-white text-6xl md:text-7xl lg:text-8xl font-extralight" style={{ 
            animationDelay: "0.2s", 
            animationFillMode: "forwards",
            letterSpacing: "0.05em",
            fontStyle: "italic",
            transform: "rotate(-2deg)",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
          }}>
            Elegant Abayas for Modern Women
          </h1>
          
          <p className="text-lg text-foreground/70 mb-8 animate-fade-in opacity-0 text-shadow-sm font-extralight" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
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
      
      {/* Hero image with animation and decorative elements */}
      <div className="container-custom mt-20 md:mt-24">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-accent/40 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-accent/40 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-accent/40 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-accent/40 rounded-br-xl"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80" 
            alt="Fashion collection showcase" 
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-foreground/10"></div>
          
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
