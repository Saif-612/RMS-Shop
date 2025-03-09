
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-medium tracking-tight block mb-4">
              Rmس Abayas
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Contemporary clothing essentials crafted with exceptional materials and timeless design.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-white hover:border-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-white hover:border-white"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-white hover:border-white"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          {/* Navigation columns */}
          <div>
            <h4 className="text-base font-medium mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=T-Shirts" className="text-muted-foreground hover:text-primary transition-colors">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link to="/products?category=Jeans" className="text-muted-foreground hover:text-primary transition-colors">
                  Jeans
                </Link>
              </li>
              <li>
                <Link to="/products?category=Jackets" className="text-muted-foreground hover:text-primary transition-colors">
                  Jackets
                </Link>
              </li>
              <li>
                <Link to="/products?category=Accessories" className="text-muted-foreground hover:text-primary transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-muted-foreground hover:text-primary transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/stores" className="text-muted-foreground hover:text-primary transition-colors">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-base font-medium mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates on new collections and exclusive offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 rounded-l-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <button 
                type="submit" 
                className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors flex items-center justify-center"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Rmس Abayas. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 text-sm">
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
              Shipping Information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
