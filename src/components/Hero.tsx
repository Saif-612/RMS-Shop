
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8 py-8 md:py-0">
        <div className="flex flex-col justify-center items-start space-y-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black leading-tight">
            Elegant Abayas for Modern Women
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Discover our collection of timeless abayas that combine traditional elegance with contemporary design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              to="/products"
              className="px-8 py-3 bg-black text-white rounded-none uppercase tracking-widest text-sm font-light transition-all hover:bg-gray-800"
            >
              Shop Collection
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border border-black text-black rounded-none uppercase tracking-widest text-sm font-light transition-all hover:bg-black hover:text-white"
            >
              Our Story
            </Link>
          </div>
        </div>
        
        <div className="relative aspect-[4/5] md:aspect-auto animate-fade-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          <img
            src="https://images.unsplash.com/photo-1639321911469-04be03e86bd2?auto=format&fit=crop&q=80&w=1000"
            alt="Elegant Abaya"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
