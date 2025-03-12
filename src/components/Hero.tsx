
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="hero-container">
          <div className="text-center">
            <div className="collection-badge">
              NEW COLLECTION
            </div>
            
            <h1 className="hero-title">
              Elegant Abayas for Modern Women
            </h1>
            
            <p className="hero-description">
              Discover our curated collection of premium abayas, crafted with exceptional attention to detail and sustainable materials.
            </p>
            
            <div className="button-container">
              <Link to="/products" className="shop-button">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link to="/about" className="story-button">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
